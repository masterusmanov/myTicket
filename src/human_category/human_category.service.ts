import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';


@Injectable()
export class HumanCategoryService {
  constructor(@InjectModel(HumanCategory) private humanCategoryRepo: typeof HumanCategory){}
 
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    const newhumanCategory = await this.humanCategoryRepo.create(createHumanCategoryDto);
    return newhumanCategory;
  }

  async findAll() {
    const getAllHumanCategory = await this.humanCategoryRepo.findAll({include: {all: true}});
    return getAllHumanCategory;
  }

  async findOne(id: number) {
    const oneHumanCategory = await this.humanCategoryRepo.findOne({where: {id}});
    return oneHumanCategory;
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const updateHumanCategory = await this.humanCategoryRepo.update(updateHumanCategoryDto, {
      where: {id},
      returning: true
    })
    return updateHumanCategory;
  }

  async remove(id: number) {
    const getAllHumanCategory = await this.humanCategoryRepo.destroy({where: {id}});
    return getAllHumanCategory;
  }
}
