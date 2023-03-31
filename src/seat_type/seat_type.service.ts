import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType){}

  async create(createSeatTypeDto: CreateSeatTypeDto) {
    const newSeatType = await this.seatTypeRepo.create(createSeatTypeDto)
    return newSeatType;
  }

  async findAll() {
    const allSeatTypes = await this.seatTypeRepo.findAll({include: {all: true}});
    return allSeatTypes;
  }

  async findOne(id: number) {
    const oneSeatType = await this.seatTypeRepo.findOne({where: {id}})
    return oneSeatType;
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const updateSeatType = await this.seatTypeRepo.update(updateSeatTypeDto, {
      where: {id},
      returning: true
    })
    return updateSeatType;
  }

  async remove(id: number) {
    const deleteSeatType = await this.seatTypeRepo.destroy({where: {id}})
    return deleteSeatType;
  }
}
