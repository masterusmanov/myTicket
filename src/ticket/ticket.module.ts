import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';
import { Event } from '../event/models/event.model';
import { Seat } from '../seat/models/seat.model';
import { Status } from '../status/models/status.model';
import { TicketType } from '../ticket_type/models/ticket_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, Event, Seat, Status, TicketType])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
