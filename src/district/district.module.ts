import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { Venue } from '../venue/models/venue.model';
import { CustomerAdress } from '../customer_address/models/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([District, Venue, CustomerAdress])],
  controllers: [DistrictController],
  providers: [DistrictService]
})
export class DistrictModule {}
