import {
  CreateDetectionDto,
  DeleteDetectionDto,
  GetAllDetectionDto,
  GetDetectionDto,
} from './detection.dto';
import { db } from '../../db';
import { UnprocessableEntityException } from '../../common/exceptions';

class DetectionDao {
  async create(spec: CreateDetectionDto) {
    try {
      const user = await db
        .insertInto('Detection')
        .values(spec)
        .returning([
          'Detection.id',
          'Detection.title',
          'Detection.commonName',
          'Detection.medicalName',
          'Detection.image',
          'Detection.assessment',
          'Detection.createdAt',
        ])
        .executeTakeFirstOrThrow();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async getById(spec: GetDetectionDto) {
    try {
      const detection = await db
        .selectFrom('Detection')
        .select([
          'Detection.id',
          'Detection.title',
          'Detection.status',
          'Detection.commonName',
          'Detection.medicalName',
          'Detection.image',
          'Detection.assessment',
          'Detection.createdAt',
        ])
        .where((eb) =>
          eb.and([
            eb('Detection.id', '=', spec.id),
            eb('Detection.userId', '=', spec.userId),
            eb('Detection.deletedAt', 'is', null),
            eb('Detection.deletedBy', 'is', null),
          ]),
        )
        .executeTakeFirst();

      return detection;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async getAll(spec: GetAllDetectionDto) {
    try {
      let query = db
        .selectFrom('Detection')
        .select([
          'Detection.id',
          'Detection.title',
          'Detection.status',
          'Detection.commonName',
          'Detection.medicalName',
          'Detection.image',
          'Detection.assessment',
          'Detection.createdAt',
        ])
        .where((eb) =>
          eb.and([
            eb('Detection.deletedAt', 'is', null),
            eb('Detection.deletedBy', 'is', null),
            eb('Detection.userId', '=', spec.userId),
          ]),
        );

      if (spec.status) {
        query = query.where('Detection.status', '=', spec.status);
      }

      if (spec.q) {
        query = query.where((eb) =>
          eb.or([
            eb('Detection.title', 'like', `${spec.q}%`),
            eb('Detection.commonName', 'like', `${spec.q}%`),
            eb('Detection.medicalName', 'like', `${spec.q}%`),
          ]),
        );
      }

      const detections = await query
        .limit(spec.limit)
        .offset(spec.limit * (spec.page - 1))
        .orderBy('Detection.createdAt', spec.order)
        .execute();

      return detections;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async deleteById(spec: DeleteDetectionDto) {
    try {
      const detection = await db
        .updateTable('Detection')
        .where((eb) =>
          eb.and([
            eb('Detection.id', '=', spec.id),
            eb('Detection.deletedAt', 'is', null),
            eb('Detection.deletedBy', 'is', null),
          ]),
        )
        .set({
          deletedBy: spec.requestedBy,
          deletedAt: new Date(),
        })
        .returning('Detection.id')
        .executeTakeFirstOrThrow();

      return detection;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

export default new DetectionDao();
