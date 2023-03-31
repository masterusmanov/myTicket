import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';


@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeRepo: typeof VenueType){};


  async create(createVenueTypeDto: CreateVenueTypeDto) {
    const newvenueType = await this.venueTypeRepo.create(createVenueTypeDto);
    return newvenueType;
  };

  async findAll() {
    const venueTypeAll = await this.venueTypeRepo.findAll({include: {all: true}});
    return venueTypeAll;
  };

  async findOne(id: number) {
    const venueTypeOne = await this.venueTypeRepo.findOne({where: {id}});
    return venueTypeOne;
  };

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const updateVenueType = await this.venueTypeRepo.update(updateVenueTypeDto, {
      where: {id},
      returning: true
    });
    return updateVenueType;
  };

  async remove(id: number) {
    const venueTypeOne = await this.venueTypeRepo.destroy({where: {id}});
    return venueTypeOne;
  };
}
