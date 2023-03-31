import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { CustomerCard } from '../customer_card/entities/customer_card.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[SequelizeModule.forFeature([Customer, CustomerCard]), JwtModule.register({})],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
