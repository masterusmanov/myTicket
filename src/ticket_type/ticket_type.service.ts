import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketType } from './models/ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(TicketType) private ticketTypeRepo: typeof TicketType){}

  async create(createTicketTypeDto: CreateTicketTypeDto) {
    return await this.ticketTypeRepo.create(createTicketTypeDto);
  }

  async findAll() {
    return await this.ticketTypeRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.ticketTypeRepo.findOne({where: {id}, include:{all:true}});
  }

  async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return await this.ticketTypeRepo.update(updateTicketTypeDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.ticketTypeRepo.destroy({where: {id}});
  }
}
