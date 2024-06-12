import { db } from '../../db';
import { RegisterDto, ResetPasswordDto } from './auth.dto';
import { UnprocessableEntityException } from '../../common/exceptions';

class AuthDao {
  async register(spec: RegisterDto) {
    try {
      const user = await db
        .insertInto('User')
        .values(spec)
        .returningAll()
        .executeTakeFirstOrThrow();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async getByEmail(email: string) {
    try {
      const user = await db
        .selectFrom('User')
        .selectAll()
        .where((eb) =>
          eb.and([
            eb('User.email', '=', email),
            eb('User.deletedAt', 'is', null),
            eb('User.deletedBy', 'is', null),
          ]),
        )
        .executeTakeFirst();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async updatePasswordById(spec: ResetPasswordDto) {
    try {
      const user = await db
        .updateTable('User')
        .set({
          hashedPassword: spec.newPassword,
        })
        .where((eb) =>
          eb.and([
            eb('User.id', '=', spec.id),
            eb('User.deletedAt', 'is', null),
            eb('User.deletedBy', 'is', null),
          ]),
        )
        .returningAll()
        .executeTakeFirstOrThrow();

      return user;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

export default new AuthDao();
