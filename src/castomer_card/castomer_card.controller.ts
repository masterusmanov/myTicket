import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CastomerCardService } from './castomer_card.service';
import { CreateCastomerCardDto } from './dto/create-castomer_card.dto';
import { UpdateCastomerCardDto } from './dto/update-castomer_card.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ActivateCustomerCardDto } from './dto/activated-customer_card.dto';


@ApiTags('Customer card')
@Controller('castomer-card')
export class CastomerCardController {
  constructor(private readonly castomerCardService: CastomerCardService) {}

  @ApiOperation({summary: "Created customer card"})
  @Post()
  create(@Body() createCastomerCardDto: CreateCastomerCardDto) {
    return this.castomerCardService.create(createCastomerCardDto);
  }

  @ApiOperation({summary: "Get all customer card"})
  @Get()
  findAll() {
    return this.castomerCardService.findAll();
  }

  @ApiOperation({summary: "Get one customer card"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.castomerCardService.findOne(+id);
  }

  @ApiOperation({summary: "Delete customer card"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.castomerCardService.remove(+id);
  }

  @ApiOperation({summary: "Activated customer card"})
  @Post('activateCustomerCard')
  activateCustomerCard(@Body() activateCustomerCardDto: ActivateCustomerCardDto){
    return this.castomerCardService.activateCustomerCard(activateCustomerCardDto)
  }

  @ApiOperation({summary: "Dectivated customer card"})
  @Post('deactivateCustomerCard')
  deactivateCustomerCard(@Body() activateCustomerCardDto: ActivateCustomerCardDto){
    return this.castomerCardService.deactivateCustomerCard(activateCustomerCardDto)
  }

  @ApiOperation({summary: "Main customer card"})
  @Post('mainCustomerCard')
  mainCustomerCard(@Body() activateCustomerCardDto: ActivateCustomerCardDto){
    return this.castomerCardService.mainCustomerCard(activateCustomerCardDto)
  }

  @ApiOperation({summary: "Nomain customer card"})
  @Post('nomainCustomerCard')
  nomainCustomerCard(@Body() activateCustomerCardDto: ActivateCustomerCardDto){
    return this.castomerCardService.nomainCustomerCard(activateCustomerCardDto)
  }
}
