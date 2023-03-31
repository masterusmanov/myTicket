import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize'
import { EventType } from '../event_type/models/event_type.model';
import { HumanCategory } from '../human_category/models/human_category.model';
import { Venue } from '../venue/models/venue.model';

@Module({
  imports: [SequelizeModule.forFeature([Event, EventType, HumanCategory, Venue])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
