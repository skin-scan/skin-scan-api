import bcrypt from 'bcrypt';
import authDao from './auth.dao';

import {
  BadRequestException,
  ForbiddenException,
  UnprocessableEntityException,
} from '../../common/exceptions';
import { JwtUtil } from '../../common/utils';
import { IJwtPayload } from '../../common/interfaces';
import { LoginDto, RegisterDto, ResetPasswordDto } from './auth.dto';

class AuthService {
  private async hash(spec: string) {
    try {
      const salt = await bcrypt.genSalt(12);
      return await bcrypt.hash(spec, salt);
    } catch (error) {
      throw new UnprocessableEntityException('Error occured while hashing');
    }
  }

  async register(spec: RegisterDto) {
    const existingUser = await authDao.getByEmail(spec.email);
    if (existingUser) {
      throw new ForbiddenException(
        `User with email ${spec.email} already exists`,
      );
    }

    const hashedPassword = await this.hash(spec.password);

    spec.hashedPassword = hashedPassword;
    spec.createdBy = 'DEFAULT';
    spec.updatedBy = 'DEFAULT';
    delete (spec as any).password;

    const newUser = await authDao.register(spec);

    const payload: IJwtPayload = {
      id: newUser.id,
      email: newUser.email,
    };

    const token = JwtUtil.generateToken(payload);

    return { token };
  }

  async login(spec: LoginDto) {
    const existingUser = await authDao.getByEmail(spec.email);
    if (!existingUser) {
      throw new BadRequestException(
        `User with email ${spec.email} doesnt exists`,
      );
    }

    const isPasswordValid = await bcrypt.compare(
      spec.password,
      existingUser.hashedPassword,
    );
    if (!isPasswordValid) {
      throw new ForbiddenException('Access denied');
    }

    const payload: IJwtPayload = {
      id: existingUser.id,
      email: existingUser.email,
    };

    const token = JwtUtil.generateToken(payload);

    return { token };
  }

  async resetPassword(spec: ResetPasswordDto) {
    const existingUser = await authDao.getByEmail(spec.email);
    if (!existingUser) {
      throw new BadRequestException(
        `User with email ${spec.email} doesnt exists`,
      );
    }

    const isPasswordValid = await bcrypt.compare(
      spec.oldPassword,
      existingUser.hashedPassword,
    );
    if (!isPasswordValid) {
      throw new ForbiddenException('Access denied');
    }

    const hashedPassword = await this.hash(spec.newPassword);
    spec.newPassword = hashedPassword;

    const result = await authDao.updatePasswordById(spec);

    return {
      id: result.id,
    };
  }
}

export default new AuthService();
