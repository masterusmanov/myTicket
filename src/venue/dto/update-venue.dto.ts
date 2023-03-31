import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsPhoneNumber, IsUrl } from "class-validator";

export class UpdateVenueDto {
    @ApiProperty({ example: 'VenueName', description: 'Joy nomi'})
    @IsString()
    readonly name?: string;

    @ApiProperty({ example: 'Address', description: 'Joy manzili'})
    @IsString()
    readonly address?: string;

    @ApiProperty({ example: 'Location', description: 'Joy lokatsiyasi'})
    @IsUrl()
    readonly location?: string;

    @ApiProperty({ example: 'wwww.site.uz', description: 'Sayti'})
    @IsUrl()
    readonly site?: string;

    @ApiProperty({ example: '+998901234567', description: 'Telefon raqami'})
    @IsPhoneNumber()
    readonly phoneNumber?: string;

    @ApiProperty({ example: 'Venue schema', description: 'Joy sxemasi'})
    @IsString()
    readonly schema?: string;    
}
