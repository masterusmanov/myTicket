import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ example: 'Uzbekistan', description: 'Enter the country'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
