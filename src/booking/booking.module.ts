import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';
import { Cart } from '../cart/models/cart.model';
import { PaymentMethod } from '../payment_method/models/payment_method.model';
import { DeliveryMethod } from '../delivery_method/models/delivery_method.model';
import { DiscountCoupon } from '../discount_coupon/models/discount_coupon.model';

@Module({
  imports: [SequelizeModule.forFeature([Booking, Cart, PaymentMethod, DeliveryMethod, DiscountCoupon])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
