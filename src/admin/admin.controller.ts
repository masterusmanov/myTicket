import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, UseGuards,  HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login_admin.dto';
import { LogoutAdminDto } from './dto/logout_admin.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { JwtAuthGuard } from '../guards/JwtAuth.guard';
import { ActivateAdminDto } from './dto/activated-customer_card.dto';
import { JwtIdGuard } from '../guards/jwtId.guards';


@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({summary: "Registration admin"})
  @ApiResponse({ status: 201, type: Admin})
  @Post('signup')
  registration(@Body() createAdminDto: CreateAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.registration(createAdminDto);
  }

  @ApiOperation({summary: "Login admin"})
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: Admin})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  singin(@Body() loginUserDto: LoginAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.sigin(loginUserDto);
  }

  @ApiOperation({summary: "Logout admin"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 2000, type: Admin})
  @HttpCode(HttpStatus.OK)
  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.singout(+id, logoutUserDto);
  }

  @ApiOperation({summary: "Activated customer card"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Post('activateAdmin')
  activateCustomerCard(@Body() activateAdminDto: ActivateAdminDto){
    return this.adminService.activateAdmin(activateAdminDto)
  }

  @ApiOperation({summary: "Dectivated customer card"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deactivateAdmin')
  deactivateCustomerCard(@Body() activateAdminDto: ActivateAdminDto){
    return this.adminService.deactivateAdmin(activateAdminDto)
  }
  
  @ApiOperation({summary: "Get all admin"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({summary: "Get one admin"})
  @UseGuards(JwtIdGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({summary: "update one admin"})
  @UseGuards(JwtIdGuard) 
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({summary: "Delete one admin"})
  @UseGuards(JwtAuthGuard)
  @UseGuards(JwtIdGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
