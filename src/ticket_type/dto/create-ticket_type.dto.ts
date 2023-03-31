import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateTicketTypeDto {
    @ApiProperty({ example: 'Econom or Bussnies', description: 'Ticket type'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'What a color', description: 'Ticket color'})
    @IsNotEmpty()
    @IsString()
    color: string;

}
