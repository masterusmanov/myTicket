import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Discount coupon')
@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}


  @ApiOperation({summary: "Create discount coupon"})
  @Post()
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @ApiOperation({summary: "Get all discount coupon"})
  @Get()
  findAll() {
    return this.discountCouponService.findAll();
  }

  @ApiOperation({summary: "Get one discount coupon"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @ApiOperation({summary: "Update discount coupon"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @ApiOperation({summary: "Delete discount coupon"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCouponService.remove(+id);
  }
}
