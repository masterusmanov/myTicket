import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateSeatTypeDto {
    @ApiProperty({ example: 'Seat type', description: 'Seat type'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}

