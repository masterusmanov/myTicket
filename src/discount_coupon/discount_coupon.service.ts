import { Injectable } from '@nestjs/common';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountCoupon } from './models/discount_coupon.model';

@Injectable()
export class DiscountCouponService {
  constructor(@InjectModel(DiscountCoupon) private discountCouponRepo: typeof DiscountCoupon){}

  async create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return await this.discountCouponRepo.create(createDiscountCouponDto)
  }

  async findAll() {
    return await this.discountCouponRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.discountCouponRepo.findOne({where: {id}});
  }

  async update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return await this.discountCouponRepo.update(updateDiscountCouponDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.discountCouponRepo.destroy({where: {id}});
  }
}
