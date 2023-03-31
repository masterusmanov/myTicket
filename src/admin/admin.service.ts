import { BadRequestException, ForbiddenException, Injectable, HttpStatus, HttpException, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginAdminDto } from './dto/login_admin.dto';
import { LogoutAdminDto } from './dto/logout_admin.dto';
import { ActivateAdminDto } from './dto/activated-customer_card.dto';



@Injectable()
export class AdminService {

  constructor(@InjectModel(Admin) private adminRepo: typeof Admin, private readonly jwtService: JwtService){}
  
  async registration(createAdminDto: CreateAdminDto) {
    const admin = await this.adminRepo.findOne({
      where: {login: createAdminDto.login}
    })    
    if(admin) {
      throw new BadRequestException('login already used!');
    }
    if(createAdminDto.password !== createAdminDto.confirmPassword) {
      throw new BadRequestException('Password is not match!');
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    const newUser = await this.adminRepo.create({
      ...createAdminDto,
      hashedPassword: hashedPassword
    })
    const tokens = await this.generateToken(newUser)
    const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7)
    const updateUser = await this.adminRepo.update({
      hashedRefreshToken: hashedRefreshToken,
    }, {where:{id: newUser.id}, returning: true});
    return {customer: updateUser[1][0], tokens}; 

  }

  async sigin(loginAdminDto: LoginAdminDto) {
    const {login, password} = loginAdminDto;
    const admin = await this.adminRepo.findOne({ where: {login}});
    if(!admin) {
      throw new BadRequestException('admin not found!!');
    }
    const isMatchPass = await bcrypt.compare(password, admin.hashedPassword)
    if(!isMatchPass) {
      throw new BadRequestException('admin not registered(pass)!!');
    }
    const tokens = await this.generateToken(admin)
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const updatedUser = await this.adminRepo.update({
      hashedRefreshToken: hashed_refresh_token}, {where: {id: admin.id}, returning: true})
    return {
      message: "you are logged",
      admin: updatedUser[1][0],
      tokens
    }
  } 

  async singout(id: number, logoutAdminDto: LogoutAdminDto){
    const {refreshToken} = logoutAdminDto
    const adminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if(!adminData){
      throw new ForbiddenException('Admin not found');
    }
    if(id != adminData.id){
      throw new ForbiddenException('Admin not found');
    }
    const admin = await this.adminRepo.findOne({where: {id}})
    const isMatch = await bcrypt.compare(refreshToken, admin.hashedRefreshToken);
    if(!isMatch){
      throw new UnauthorizedException('Unauthorized admin');
    } 
    const updatedUser = await this.adminRepo.update({hashedRefreshToken: null}, {
      where: {id: adminData.id}, returning: true
    }); 
    return updatedUser[1][0];
  }
  
  private async generateToken(admin: Admin){
    const jwtPayload = { id: admin.id };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
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
  };

  async activateAdmin(activateAdminDto: ActivateAdminDto){
    const customerCard = await this.adminRepo.findByPk(activateAdminDto.adminId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isActive = true;
    await customerCard.save();
    return customerCard;
  }

  async deactivateAdmin(activateAdminDto: ActivateAdminDto){
    const customerCard = await this.adminRepo.findByPk(activateAdminDto.adminId);
    if(!customerCard){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    customerCard.isActive = false;
    await customerCard.save();
    return customerCard;
  }
  

  async findAll() {
    return await this.adminRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.adminRepo.findOne({where: {id}});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.adminRepo.update(updateAdminDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return await this.adminRepo.destroy({where: {id}});
  }
}
