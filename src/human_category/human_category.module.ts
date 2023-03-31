import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategory } from './models/human_category.model';
import { Event } from '../event/models/event.model';


@Module({
  imports: [SequelizeModule.forFeature([HumanCategory, Event])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports: [HumanCategoryService]
})
export class HumanCategoryModule {}
