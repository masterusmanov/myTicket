import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateEventTypeDto {
    @ApiProperty({ example: 'Cinema or Concert or Sport', description: 'Event type'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}