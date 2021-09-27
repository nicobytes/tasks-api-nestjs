import { Body, Controller, Post } from '@nestjs/common';

import { CategoriesService } from './../services/categories.service';

@Controller('api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  addCategory(@Body() body: any) {
    return this.categoriesService.create(body);
  }
}
