import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsPhoneNumber, IsUrl } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({ example: 'VenueName', description: 'Joy nomi'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'Address', description: 'Joy manzili'})
    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @ApiProperty({ example: 'Location', description: 'Joy lokatsiyasi'})
    @IsNotEmpty()
    @IsUrl()
    readonly location: string;

    @ApiProperty({ example: 'wwww.site.uz', description: 'Sayti'})
    @IsNotEmpty()
    @IsUrl()
    readonly site: string;

    @ApiProperty({ example: '+998901234567', description: 'Telefon raqami'})
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phoneNumber: string;

    @ApiProperty({ example: 'Venue schema', description: 'Joy sxemasi'})
    @IsNotEmpty()
    @IsString()
    readonly schema: string;
}
