import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking){}

  async findAll() {
    return await this.bookingRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.bookingRepo.findOne({where: {id}});
  }

  async remove(id: number) {
    return await this.bookingRepo.destroy({where: {id}});
  }
}
