import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { Profile } from './../entities/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Profile) private profilesRepo: Repository<Profile>,
  ) {}

  findAll() {
    return this.usersRepo.find({
      relations: ['profile', 'profile.photos'],
    });
  }

  async create(body: any) {
    const profile = new Profile();
    profile.name = body.name;
    profile.lastName = body.lastName;
    const newProfile = await this.profilesRepo.save(profile);

    const user = new User();
    user.email = body.email;
    user.password = body.password;
    user.profile = newProfile;
    return this.usersRepo.save(user);
  }
}
