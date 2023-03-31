import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsNumber } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({ example: 'A15', description: 'Seat'})
    @IsNotEmpty()
    @IsString()
    readonly sector: string;
    
    @ApiProperty({ example: '15', description: 'Sector'})
    @IsNotEmpty()
    @IsNumber()
    readonly rowNumber: number;

    @ApiProperty({ example: '1', description: 'Number'})
    @IsNotEmpty()
    @IsNumber()
    readonly number: number;
    
    @ApiProperty({ example: 'Polygon', description: 'Seat location'})
    @IsString()
    readonly locationInSchema: string;
}