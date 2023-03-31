import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsNumber } from "class-validator";

export class CreateCustomerAddressDto {

    @ApiProperty({ example: 'Joe', description: 'Customer name'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'Chilonzor', description: 'Street name'})
    @IsString()
    readonly street: string;

    @ApiProperty({ example: '10th house', description: 'House'})
    @IsString()
    readonly house: string;

    @ApiProperty({ example: 'Flat', description: 'Flat'})
    @IsString()
    readonly flat: string;

    @ApiProperty({ example: 'location', description: 'Customer location'})
    @IsNotEmpty()
    @IsString()
    readonly location: string;

    @ApiProperty({ example: 'Joe', description: 'Customer name'})
    @IsNumber()
    readonly postIndex: number;

    @ApiProperty({ example: 'Info', description: 'Info'})
    @IsString()
    readonly info: string;
}
