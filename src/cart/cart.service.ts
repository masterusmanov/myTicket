import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart){}

  async findAll() {
    const allCart = await this.cartRepo.findAll({include: {all: true}});
    return allCart;
  }

  async findOne(id: number) {
    const oneCart = await this.cartRepo.findOne({where: {id}});
    return oneCart;
  }

  async remove(id: number) {
    const deleteCart = await this.cartRepo.destroy({where: {id}})
    return deleteCart;
  }
}
