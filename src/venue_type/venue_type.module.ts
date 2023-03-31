import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from '../venue/models/venue.model';
import { VenuesId } from './models/venuesId.model';
import { VenueType } from './models/venue_type.model';
import { VenueModule } from '../venue/venue.module';


@Module({
  imports: [SequelizeModule.forFeature([Venue, VenuesId, VenueType])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService]
})
export class VenueTypeModule {}
