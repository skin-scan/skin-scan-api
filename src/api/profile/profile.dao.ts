import { db } from '../../db';
import { UpdateProfileDto } from './profile.dto';
import { UnprocessableEntityException } from '../../common/exceptions';

class ProfileDao {
  async getById(id: string) {
    try {
      const user = await db
        .selectFrom('User')
        .selectAll()
        .where('User.id', '=', id)
        .executeTakeFirst();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async updateById(id: string, spec: UpdateProfileDto) {
    try {
      const user = await db
        .updateTable('User')
        .where('User.id', '=', id)
        .set(spec)
        .returningAll()
        .executeTakeFirstOrThrow();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async getDetectionSummaryById(id: string) {
    try {
      const diagnosed = await db
        .selectFrom('Detection')
        .select((eb) => eb.fn.count<number>('Detection.status').as('count'))
        .where((eb) =>
          eb.and([
            eb('Detection.userId', '=', id),
            eb('Detection.status', '=', 'DIAGNOSED'),
            eb('Detection.deletedAt', 'is', null),
            eb('Detection.deletedBy', 'is', null),
          ]),
        )
        .executeTakeFirst();

      const safe = await db
        .selectFrom('Detection')
        .select((eb) => eb.fn.count<number>('Detection.status').as('count'))
        .where((eb) =>
          eb.and([
            eb('Detection.userId', '=', id),
            eb('Detection.status', '=', 'SAFE'),
            eb('Detection.deletedAt', 'is', null),
            eb('Detection.deletedBy', 'is', null),
          ]),
        )
        .groupBy('Detection.userId')
        .executeTakeFirst();

      const diagnosedCount = +(diagnosed?.count || 0);
      const safeCount = +(safe?.count || 0);

      return {
        diagnosedCount: diagnosedCount,
        safeCount: safeCount,
        totalCount: diagnosedCount + safeCount,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

export default new ProfileDao();
