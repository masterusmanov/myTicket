import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Customer } from '../customer/models/customer.model';
import { Ticket } from '../ticket/models/ticket.model';
import { Booking } from '../booking/models/booking.model';
import { Status } from '../status/models/status.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Customer, Ticket, Booking, Status])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
