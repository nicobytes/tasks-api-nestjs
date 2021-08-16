import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserService } from './../services/user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }
}
