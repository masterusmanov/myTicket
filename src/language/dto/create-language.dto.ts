import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({ example: 'Uz or Rus or Eng', description: 'Language'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
