import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto){};

  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    const newVenuePhoto = await this.venuePhotoRepo.create(createVenuePhotoDto);
    return newVenuePhoto;
  };

  async findAll() {
    const venuePhotoAll = await this.venuePhotoRepo.findAll({include: {all: true}});
    return `This action returns all venuePhoto`;
  };

  async findOne(id: number) {
    const venuePhotoOne = await this.venuePhotoRepo.findOne({where: {id}});
    return venuePhotoOne;
  };

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const updateVenuePhoto = await this.venuePhotoRepo.update(updateVenuePhotoDto, {
      where: {id},
      returning: true
    });
    return updateVenuePhoto;
  }

  async remove(id: number) {
    const venuePhotoOne = await this.venuePhotoRepo.destroy({where: {id}});
    return venuePhotoOne;
  };
}
