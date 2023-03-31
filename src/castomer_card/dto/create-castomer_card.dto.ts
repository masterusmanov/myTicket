import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsPhoneNumber, IsNumber } from "class-validator";

export class CreateCastomerCardDto {
    @ApiProperty({ example: 'Joe', description: 'Customer name'})
    @IsString()
    readonly name?: string;

    @ApiProperty({ example: '+998901234567', description: 'Customer phone'})
    @IsPhoneNumber()
    readonly phoneNumber?: string;

    @ApiProperty({ example: '15', description: 'Customer number'})
    @IsString()
    readonly number: string;

    @ApiProperty({example: '2023', description: 'Year'})  
    @IsString()
    readonly year: string;
    
    @ApiProperty({example: '01 or 12', description: 'month'})  
    @IsString()
    month: string;
}
