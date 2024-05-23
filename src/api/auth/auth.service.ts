import bcrypt from 'bcrypt';
import authDao from './auth.dao';

import { JwtUtil } from '../../common/utils';
import { LoginDto, RegisterDto } from './auth.dto';
import { IJwtPayload } from '../../common/interfaces';
import {
  BadRequestException,
  ForbiddenException,
} from '../../common/exceptions';

class AuthService {
  async register(spec: RegisterDto) {
    const existingUser = await authDao.getByEmail(spec.email);
    if (existingUser) {
      throw new ForbiddenException(
        `User with email ${spec.email} already exists`,
      );
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(spec.password, salt);

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
}

export default new AuthService();
