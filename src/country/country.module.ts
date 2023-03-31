import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './models/country.model';
import { CustomerAdress } from '../customer_address/models/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([Country, CustomerAdress])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
