import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsPhoneNumber, IsDate } from "class-validator";

export class CreateCustomerDto {
    @ApiProperty({ example: 'Joe', description: 'Customer first name'})
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @ApiProperty({ example: 'Doe', description: 'Customer last name'})
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @ApiProperty({ example: '+998901234567', description: 'Customer phone number'})
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phoneNumber: string;

    @ApiProperty({ example: 'P@$$w0rd', description: 'Customer password'})
    @MinLength(8, {})
    @IsStrongPassword()
    readonly password: string;

    @ApiProperty({ example: 'P@$$w0rd', description: 'Customer confirm password'})
    @MinLength(8, {})
    @IsStrongPassword()
    readonly confirmPassword: string;

    @ApiProperty({ example: 'User1@mail.uz', description: 'Customer email'})
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'User1@mail.uz', description: 'Customer email'})
    @IsDate()
    readonly birthDay: Date;

    @ApiProperty({ example: 'Male or Female', description: 'Customer gender'})
    @IsString()
    readonly gender: string;
}
