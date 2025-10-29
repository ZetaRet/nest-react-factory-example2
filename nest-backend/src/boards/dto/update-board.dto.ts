import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardColumnDto, CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

export class UpdateBoardColumnDto extends PartialType(CreateBoardColumnDto) {}
