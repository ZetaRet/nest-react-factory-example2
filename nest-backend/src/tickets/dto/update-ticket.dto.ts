import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto, CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
