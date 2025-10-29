import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardColumnDto, CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardColumnDto, UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @Get('project/:id')
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.findOne(+id);
  }

  @Post(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.update(+id, updateBoardDto);
  }

  @Post('column/create')
  createColumn(@Body() createBoardColumnDto: CreateBoardColumnDto) {
    return this.boardsService.createColumn(createBoardColumnDto);
  }

  @Post('column/:id')
  updateColumn(@Param('id', ParseIntPipe) id: number, @Body() updateBoardColumnDto: UpdateBoardColumnDto) {
    return this.boardsService.updateColumn(+id, updateBoardColumnDto);
  }

  @Get('column_board/:id')
  getColumns(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.getColumns(+id);
  }

  @Get('remove_column/:id')
  removeColumn(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.removeColumn(+id);
  }
}
