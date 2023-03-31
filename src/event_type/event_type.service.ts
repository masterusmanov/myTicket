import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventTypeRepo: typeof EventType){}
  
  async create(createEventTypeDto: CreateEventTypeDto) {
    const newEventType = await this.eventTypeRepo.create(createEventTypeDto);
    return newEventType;
  }

  async findAll() {
    const allEventType = await this.eventTypeRepo.findAll({include: {all: true}});
    return allEventType;
  }

  async findOne(id: number) {
    const oneEventType = await this.eventTypeRepo.findOne({where: {id}});
    return oneEventType;
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const updateEventType = await this.eventTypeRepo.update(updateEventTypeDto, {
      where: {id},
      returning: true
    })
    return updateEventType;
  }

  async remove(id: number) {
    const oneEventType = await this.eventTypeRepo.destroy({where: {id}});
    return oneEventType;
  }
}
