import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';


@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket){}

  async create(createTicketDto: CreateTicketDto) {
    const newTicket = await this.ticketRepo.create(createTicketDto);
    return newTicket;
  }

  async findAll() {
    const allTicket = await this.ticketRepo.findAll({include: {all: true}})
    return allTicket;
  }

  async findOne(id: number) {
    const oneTicket = await this.ticketRepo.findOne({where: {id}});
    return oneTicket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const updateTicket = await this.ticketRepo.update(updateTicketDto, {
      where: {id},
      returning: true
    });
    return updateTicket;
  }

  async remove(id: number) {
    const deleteTicket = await this.ticketRepo.destroy({where: {id}});
    return deleteTicket;
  }
}
