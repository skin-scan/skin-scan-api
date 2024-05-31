import profileDao from './profile.dao';
import { UpdateProfileDto } from './profile.dto';
import { BadRequestException } from '../../common/exceptions';
import { uploadFile } from '../../bucket';

class ProfileService {
  async getById(id: string) {
    const user = await profileDao.getById(id);
    if (!user) {
      throw new BadRequestException(`User with id ${id} doesnt exists`);
    }

    const summary = await profileDao.getDetectionSummaryById(id);

    return {
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
      summary: summary,
    };
  }

  async updateById(id: string, spec: UpdateProfileDto) {
    const existingUser = await this.getById(id);
    if (!existingUser) {
      throw new BadRequestException(`User with id ${id} doesnt exists`);
    }

    if (spec.file) {
      const publicUrl = await uploadFile(spec.file, id);
      spec.profilePicture = publicUrl;
      delete (spec as any).file;
    }

    const user = await profileDao.updateById(id, spec);
    return {
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
    };
  }
}

export default new ProfileService();
