import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsDate } from "class-validator";

export class CreateEventDto {
    @ApiProperty({ example: 'User1', description: 'Event name'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    @ApiProperty({ example: 'jpeg or png', description: 'Event photo'})
    @IsString()
    readonly photo: string;
    
    @ApiProperty({ example: '15-04-2023', description: 'Event start date'})
    @IsDate()
    readonly startDate: Date;

    @ApiProperty({ example: '25-04-2023', description: 'Event finish date'})
    @IsDate()
    readonly finishDate: Date;

    @ApiProperty({ example: 'Info', description: 'Event info'})
    @IsString()
    readonly info: string;

    @ApiProperty({ example: '10-03-2023', description: 'Event release date'})
    @IsDate()
    readonly releaseDate: Date;
}