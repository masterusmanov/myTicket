import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({ example: 'Chilonzor', description: 'District name'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}