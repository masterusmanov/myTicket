import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';
import { Region } from '../region/models/region.model';
import { VenueType } from '../venue_type/models/venue_type.model';
import { District } from '../district/models/district.model';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([Venue, Region, VenueType, District])],
  controllers: [VenueController],
  providers: [VenueService]
})
export class VenueModule {}
