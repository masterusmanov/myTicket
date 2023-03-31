import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class LoginAdminDto {
    @ApiProperty({ example: 'L0gin', description: 'Admin login'})
    @IsString()
    login: string;
    
    @ApiProperty({ example: 'P@$$w0rdd', description: 'Admin login password'})
    @IsStrongPassword()
    @MinLength(8, {})
    password: string;
}
