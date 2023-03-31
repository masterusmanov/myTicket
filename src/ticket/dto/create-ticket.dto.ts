import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsDecimal } from "class-validator";

export class CreateTicketDto {
    @ApiProperty({ example: '100$', description: 'Ticket price'})
    @IsDecimal()
    readonly price: number;

    @ApiProperty({ example: '10$', description: 'Service fee'})
    @IsDecimal()
    readonly serviceFee: number;
}
