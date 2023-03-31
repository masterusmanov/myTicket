import { Module } from '@nestjs/common';
import { CastomerCardService } from './castomer_card.service';
import { CastomerCardController } from './castomer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './models/castomer_card.model';
import { Customer } from '../customer/models/customer.model';

@Module({
  imports:[SequelizeModule.forFeature([CustomerCard, Customer])],
  controllers: [CastomerCardController],
  providers: [CastomerCardService]
})
export class CastomerCardModule {}
