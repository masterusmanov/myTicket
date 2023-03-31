import { PartialType } from '@nestjs/mapped-types';
import { CreateCastomerCardDto } from './create-castomer_card.dto';

export class UpdateCastomerCardDto extends PartialType(CreateCastomerCardDto) {}
