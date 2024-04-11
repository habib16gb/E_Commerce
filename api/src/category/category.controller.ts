import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@Controller('api/category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiCreatedResponse({ type: CategoryEntity })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CategoryEntity })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
