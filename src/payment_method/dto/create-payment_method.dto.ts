import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty({ example: 'cash or plastic card', description: 'Payment method'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
