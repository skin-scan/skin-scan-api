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
}

export default new ProfileDao();
