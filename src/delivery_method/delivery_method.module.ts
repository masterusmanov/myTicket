import { Module } from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { DeliveryMethodController } from './delivery_method.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryMethod } from './models/delivery_method.model';
import { Booking } from '../booking/models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([DeliveryMethod, Booking])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService]
})
export class DeliveryMethodModule {}
