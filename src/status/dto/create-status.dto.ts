import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateStatusDto {
    @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
