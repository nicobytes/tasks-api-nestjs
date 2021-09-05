import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './entities/task.entity';
import { User } from './entities/user.entity';
import { Photo } from './entities/photo.entity';
import { Profile } from './entities/profile.entity';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { PhotosService } from './services/photos.service';
import { PhotosController } from './controllers/photos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User, Profile, Photo])],
  providers: [TasksService, UserService, PhotosService],
  controllers: [TasksController, UserController, PhotosController],
})
export class TasksModule {}
