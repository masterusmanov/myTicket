import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";


export class CreateDiscountCouponDto {
    @ApiProperty({ example: 'underprivileged or otherwise', description: 'Discount coupon'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
