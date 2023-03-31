import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateVenuePhotoDto {
    @ApiProperty({ example: 'VenuePhoto Url', description: 'Rasmdagi joylashuvi'})
    @IsUrl()
    readonly username: string;
}
