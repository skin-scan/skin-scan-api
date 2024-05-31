import {
  CreateDetectionDto,
  DeleteDetectionDto,
  GetAllDetectionDto,
  GetDetectionDto,
} from './detection.dto';
import { v4 as uuidv4 } from 'uuid';
import { uploadFile } from '../../bucket';
import detectionDao from './detection.dao';
import { NotFounException } from '../../common/exceptions';
import { DetectionStatus } from '../../../prisma/generated/types';

class DetectionService {
  async create(spec: CreateDetectionDto) {
    const id = uuidv4();

    (spec as any).id = id;
    spec.diagnosis = 'DUMMY';
    spec.status = DetectionStatus.DIAGNOSED;

    const publicUrl = await uploadFile(spec.file, id);
    spec.image = publicUrl;
    delete (spec as any).file;

    const result = await detectionDao.create(spec);

    return result;
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
