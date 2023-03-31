import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { LoginUserDto } from './dto/login.dto';
import { LogoutUserDto } from './dto/logout.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtIdGuard } from '../guards/jwtId.guards';
import { JwtAuthGuard } from '../guards/JwtAuth.guard';


@ApiTags('Foydalanuvchilar')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({summary: "Signup customer"})
  @Post('signup')
  registration(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.registration(createCustomerDto);
  }

  @ApiOperation({summary: "Signin customer"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Post('signin')
  singin(@Body() loginUserDto: LoginUserDto) {
    return this.customerService.sigin(loginUserDto);
  }

  @ApiOperation({summary: "Signout customer"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutUserDto) {
    return this.customerService.singout(+id, logoutUserDto);
  }

  @ApiOperation({summary: "Get all customer"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({summary: "Get one customer"})
  @UseGuards(JwtIdGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({summary: "Update customer"})
  @UseGuards(JwtIdGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({summary: "Delete customer"})
  @UseGuards(JwtIdGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
