import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';


@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventReppo: typeof Event){}
  
  async create(createEventDto: CreateEventDto) {
    const newEvent = await this.eventReppo.create(createEventDto)
    return newEvent;
  }

  async findAll() {
    const eventAll = await this.eventReppo.findAll({include: {all: true}})
    return eventAll;
  }

  async findOne(id: number) {
    const eventOne = await this.eventReppo.findOne({where: {id}})
    return eventOne;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const updateEvent = await this.eventReppo.update(updateEventDto, {
      where: {id},
      returning: true
    })
    return updateEvent;
  }

  async remove(id: number) {
    const deleteEvent = await this.eventReppo.destroy({where: {id}})
    return deleteEvent;
  }
}
