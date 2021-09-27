import { Controller, Post, Body } from '@nestjs/common';

import { CategoriesService } from './../services/categories.service';

@Controller('api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  create(@Body() body: any) {
    return this.categoriesService.create(body);
  }
}
