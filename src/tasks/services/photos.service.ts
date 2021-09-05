import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './../entities/photo.entity';
import { Profile } from './../entities/profile.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photoRepo: Repository<Photo>,
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}

  async addPhoto(data: any) {
    const profile = await this.profileRepo.findOne(data.profileId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    const newPhoto = new Photo();
    newPhoto.profile = profile;
    newPhoto.url = data.url;
    return this.photoRepo.save(newPhoto);
  }
}
