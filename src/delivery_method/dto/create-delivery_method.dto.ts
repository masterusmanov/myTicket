import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateDeliveryMethodDto {
    @ApiProperty({ example: 'mail or taxi', description: 'Delivery method'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
