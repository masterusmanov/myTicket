import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCastomerCardDto } from './dto/create-castomer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/castomer_card.model';
import { ActivateCustomerCardDto } from './dto/activated-customer_card.dto';

@Injectable()
export class CastomerCardService {
  constructor(@InjectModel(CustomerCard) private customerCardRepo: typeof CustomerCard){}

  async create(createCastomerCardDto: CreateCastomerCardDto) {
    return await this.customerCardRepo.create(createCastomerCardDto);
  }

  async findAll() {
    return await this.customerCardRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.customerCardRepo.findOne({where: {id}});
  }

  async remove(id: number) {
    return await this.customerCardRepo.destroy({where: {id}});
  }

  async activateCustomerCard(activateCustomerCardDto: ActivateCustomerCardDto){
    const customerCard = await this.customerCardRepo.findByPk(activateCustomerCardDto.customerCardId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isActive = true;
    await customerCard.save();
    return customerCard;
  }

  async deactivateCustomerCard(activateCustomerCardDto: ActivateCustomerCardDto){
    const customerCard = await this.customerCardRepo.findByPk(activateCustomerCardDto.customerCardId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isActive = false;
    await customerCard.save();
    return customerCard;
  }

  async mainCustomerCard(activateCustomerCardDto: ActivateCustomerCardDto){
    const customerCard = await this.customerCardRepo.findByPk(activateCustomerCardDto.customerCardId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isMain = true;
    await customerCard.save();
    return customerCard;
  }

  async nomainCustomerCard(activateCustomerCardDto: ActivateCustomerCardDto){
    const customerCard = await this.customerCardRepo.findByPk(activateCustomerCardDto.customerCardId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isMain = false;
    await customerCard.save();
    return customerCard;
  }
}
