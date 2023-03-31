import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAdress } from './models/customer_address.model';
import { Customer } from '../customer/models/customer.model';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAdress, Customer])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
