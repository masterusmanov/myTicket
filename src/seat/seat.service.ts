import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat){};

  async create(createSeatDto: CreateSeatDto) {
    const newSeat = await this.seatRepo.create(createSeatDto)
    return newSeat;
  }

  async findAll() {
    const allSeat = await this.seatRepo.findAll({include: {all: true}})
    return allSeat;
  }

  async findOne(id: number) {
    const oneSeat = await this.seatRepo.findOne({where: {id}});
    return oneSeat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const updateSeat = await this.seatRepo.update(updateSeatDto, {
      where: {id},
      returning: true
    })
    return updateSeat;
  }

  async remove(id: number) {
    const oneSeat = await this.seatRepo.destroy({where: {id}});
    return oneSeat;
  }
}
