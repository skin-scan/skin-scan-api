import {
  CreateDetectionDto,
  DeleteDetectionDto,
  GetAllDetectionDto,
  GetDetectionDto,
} from './detection.dto';
import { v4 as uuidv4 } from 'uuid';
import { uploadFile } from '../../bucket';
import detectionDao from './detection.dao';
import detectionModel from './detection.model';
import { NotFounException } from '../../common/exceptions';
import { DetectionStatus } from '../../../prisma/generated/types';

class DetectionService {
  async create(spec: CreateDetectionDto) {
    const id = uuidv4();
    (spec as any).id = id;

    const detection = await detectionModel.predict(spec.file.buffer);
    spec.commonName = detection.commonName;
    spec.medicalName = detection.medicalName;
    spec.assessment = detection.assessment;
    spec.status =
      spec.medicalName == 'Healthy' || spec.commonName == 'Healthy'
        ? DetectionStatus.SAFE
        : DetectionStatus.DIAGNOSED;

    const publicUrl = await uploadFile(spec.file, id);
    spec.image = publicUrl;
    delete (spec as any).file;

    return await detectionDao.create(spec);
  }

  async getById(spec: GetDetectionDto) {
    const detection = await detectionDao.getById(spec);
    if (!detection) {
      throw new NotFounException(`Detection with id ${spec.id} doesnt exist`);
    }

    return detection;
  }

  async getAll(spec: GetAllDetectionDto) {
    return await detectionDao.getAll(spec);
  }

  async deleteById(spec: DeleteDetectionDto) {
    const detection = await detectionDao.getById(spec);
    if (!detection) {
      throw new NotFounException(`Detection with id ${spec.id} doesnt exist`);
    }

    return await detectionDao.deleteById(spec);
  }
}

export default new DetectionService();
