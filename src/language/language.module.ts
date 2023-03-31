import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './models/language.model';
import { Event } from '../event/models/event.model';
import { Customer } from '../customer/models/customer.model';

@Module({
  imports: [SequelizeModule.forFeature([Language, Event, Customer])],
  controllers: [LanguageController],
  providers: [LanguageService]
})
export class LanguageModule {}
