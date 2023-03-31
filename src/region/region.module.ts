import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { Venue } from '../venue/models/venue.model';
import { CustomerAdress } from '../customer_address/models/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([Region, Venue, CustomerAdress ])],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
