import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketType } from './models/ticket_type.model';
import { Ticket } from '../ticket/models/ticket.model';

@Module({
  imports:[SequelizeModule.forFeature([TicketType, Ticket])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
