import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Region')
@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region){}

  @ApiOperation({summary: "Create region"})
  async create(createRegionDto: CreateRegionDto) {
    return await this.regionRepo.create(createRegionDto);
  }

  @ApiOperation({summary: "Get all region"})
  async findAll() {
    return await this.regionRepo.findAll({include: {all: true}});
  }

  @ApiOperation({summary: "Get one region"})
  async findOne(id: number) {
    return await this.regionRepo.findOne({where: {id}});
  }

  @ApiOperation({summary: "Update region"})
  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  @ApiOperation({summary: "Delete region"})
  async remove(id: number) {
    return await this.regionRepo.destroy({where: {id}});

  }
}
