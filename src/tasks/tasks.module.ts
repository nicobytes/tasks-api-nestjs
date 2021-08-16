import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './entities/task.entity';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User, Profile])],
  providers: [TasksService, UserService],
  controllers: [TasksController, UserController],
})
export class TasksModule {}
