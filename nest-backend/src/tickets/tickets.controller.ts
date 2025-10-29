import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateCommentDto, CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateCommentDto, UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get('board/:id')
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.findOne(+id);
  }

  @Post(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Get('remove/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.remove(+id);
  }

  @Post('comment/create')
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.ticketsService.createComment(createCommentDto);
  }

  @Post('comment/:id')
  updateComment(@Param('id', ParseIntPipe) id: number, @Body() updateCommentDto: UpdateCommentDto) {
    return this.ticketsService.updateComment(+id, updateCommentDto);
  }

  @Get('comment_ticket/:id')
  getComments(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.getComments(id);
  }

  @Get('comment_remove/:id')
  removeComment(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.removeComment(+id);
  }
}
