import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login.dto';
import { LogoutUserDto } from './dto/logout.dto';


@Injectable()
export class CustomerService {

  constructor(
    @InjectModel(Customer) private customerRepo: typeof Customer, private readonly jwtService: JwtService) {}

  async registration(createCustomerDto: CreateCustomerDto) {
    const user = await this.customerRepo.findOne({
      where: {email: createCustomerDto.email}});    
    if(user) {
      throw new BadRequestException('email already used!');
    };    
    if(createCustomerDto.password !== createCustomerDto.confirmPassword) {
      throw new BadRequestException('Password is not match!');
    };
    const hashedPassword = await bcrypt.hash(createCustomerDto.password, 7);
    const newUser = await this.customerRepo.create({
      ...createCustomerDto,
      hashedPassword: hashedPassword
    })
    const tokens = await this.generateToken(newUser)
    const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7)
    const updateUser = await this.customerRepo.update({hashedRefreshToken: hashedRefreshToken}, {where:{id: newUser.id}, returning: true});
    return {customer: updateUser[1][0], tokens};
  }

  async sigin(loginUserDto: LoginUserDto) {
    const {email, password} = loginUserDto;
    const user = await this.customerRepo.findOne({ where: {email}});
    if(!user) {
      throw new BadRequestException('User not registered!!');
    };
    const isMatchPass = await bcrypt.compare(password, user.hashedPassword)
    if(!isMatchPass) {
      throw new BadRequestException('User not registered(pass)!!');
    }
    const tokens = await this.generateToken(user)
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)
    const updatedUser = await this.customerRepo.update({
      hashedRefreshToken: hashed_refresh_token},
     {where: {id: user.id}, returning: true}
    )
    return {
      message: "you are logged",
      user: updatedUser[1][0],
      tokens
    }
  } 

  async singout(id: number, logoutUserDto: LogoutUserDto){
    const {refreshToken} = logoutUserDto
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if(!userData){
      throw new ForbiddenException('User not found');
    };
    if(id != userData.id){
      throw new ForbiddenException('User not found');
    };
    const user = await this.customerRepo.findOne({where: {id}})

    const isMatch = await bcrypt.compare(refreshToken, user.hashedRefreshToken);
    if(!isMatch){
      throw new UnauthorizedException('Unauthorized user');
    };
    const updatedUser = await this.customerRepo.update({hashedRefreshToken: null}, {
      where: {id: userData.id}, returning: true
    });
    return updatedUser[1][0];
  }

  private async generateToken(user: Customer){
    const jwtPayload = { id: user.id };
    const [accessToken, refreshToken] = await Promise.all([this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      }),
    ])
    return {
      access_token: accessToken,
      refresh_token: refreshToken
    }
  }
  
  findAll() {
    return this.customerRepo.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.customerRepo.findOne({where: {id}, include:{all:true}});
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepo.update(updateCustomerDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.customerRepo.destroy({where: {id}});
  }
}
