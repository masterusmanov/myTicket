import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAdress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAdress) private cutomerAddressRepo: typeof CustomerAdress){}
  
  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    const newCustomerAddress = await this.cutomerAddressRepo.create(createCustomerAddressDto)
    return newCustomerAddress;
  }

  async findAll() {
    const allCustomerAddress = await this.cutomerAddressRepo.findAll({where: {all: true}});
    return allCustomerAddress;
  }

  async findOne(id: number) {
    const oneCustomerAddress = await this.cutomerAddressRepo.findOne({where: {id}})
    return oneCustomerAddress;
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const upCustomerAddress = await this.cutomerAddressRepo.update(updateCustomerAddressDto, {
      where: {id},
      returning: true
    })
    return upCustomerAddress;
  }

  async remove(id: number) {
    const deleteCustomerAddress = await this.cutomerAddressRepo.destroy({where: {id}})
    return deleteCustomerAddress;
  }
}
