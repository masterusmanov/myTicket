import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({ example: 'Name', description: 'Joy turi'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}
