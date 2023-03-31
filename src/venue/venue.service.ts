import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';


@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

  async create(createVenueDto: CreateVenueDto) {
    const newvenue = await this.venueRepo.create(createVenueDto)
    return newvenue;
  }

  async findAll() {
    const venueAll = await this.venueRepo.findAll({include: {all: true}})
    return venueAll;
  }

  async findOne(id: number) {
    const oneVenue = await this.venueRepo.findOne({where: {id}})
    return oneVenue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const updateVenue = await this.venueRepo.update(updateVenueDto, {
      where: {id},
      returning: true});
    return updateVenue;
  };

  async remove(id: number) {
    const venueremove = await this.venueRepo.destroy({where: {id}});
    if(!venueremove){
      throw new HttpException("Ma'lumot yo'q", HttpStatus.NOT_FOUND)
    }
    return {message: "Joy o'chirildi"};
  }
}
