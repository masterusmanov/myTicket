import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateHumanCategoryDto {
    @ApiProperty({ example: 'User1', description: 'User name'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: '7 or 14 age', description: 'Underage users'})
    @IsNotEmpty()
    @IsString()
    readonly startAge: string;

    @ApiProperty({ example: '65 or 80 age', description: 'Older users'})
    @IsNotEmpty()
    @IsString()
    readonly finishAge: string;

    @ApiProperty({ example: 'Male or Female', description: 'Users are male or female'})
    @IsNotEmpty()
    @IsString()
    readonly gender: string;
}
