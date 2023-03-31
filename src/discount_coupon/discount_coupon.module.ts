import { Module } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { DiscountCouponController } from './discount_coupon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscountCoupon } from './models/discount_coupon.model';
import { Booking } from '../booking/models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([DiscountCoupon, Booking])],
  controllers: [DiscountCouponController],
  providers: [DiscountCouponService]
})
export class DiscountCouponModule {}
