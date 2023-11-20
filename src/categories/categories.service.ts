import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepositories: Repository<Category>

  ) { }
  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepositories.create(createCategoryDto)
    return await this.categoriesRepositories.save(category)
  }

   async findAll() {
    return await this.categoriesRepositories.find();
  }

  async findOne(id: number) {
    return await this.categoriesRepositories.findOneBy({
      id:id
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoriesRepositories.update(
      id,
      updateCategoryDto
    
    )
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.categoriesRepositories.delete(id)
    return {message: 'Foi apagado! '}
  }
}
