import { Injectable } from '@nestjs/common';
import { CreateBoardColumnDto, CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardColumnDto, UpdateBoardDto } from './dto/update-board.dto';
import { DataSource } from 'typeorm';
import { Board, BoardColumn } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(private dataSource: DataSource) {}

  async create(createBoardDto: CreateBoardDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Board)
      .values({ ...createBoardDto })
      .execute();

    return { id: res.raw.insertId };
  }

  findAll(id: number) {
    return this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(Board, '*')
      .where('project = :id', { id })
      .orderBy('createdAt', 'ASC')
      .getMany();
  }

  findOne(id: number) {
    return this.dataSource.createQueryBuilder().select('*').from(Board, '*').where('id = :id', { id }).getOne();
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .update(Board)
      .set({ ...updateBoardDto })
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }

  async createColumn(createBoardColumnDto: CreateBoardColumnDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(BoardColumn)
      .values({ ...createBoardColumnDto })
      .execute();

    return { id: res.raw.insertId };
  }

  async updateColumn(id: number, updateBoardColumnDto: UpdateBoardColumnDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .update(BoardColumn)
      .set({ ...updateBoardColumnDto })
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }

  getColumns(id: number) {
    return this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(BoardColumn, '*')
      .where('board = :id', { id })
      .orderBy('`index`', 'ASC')
      .getMany();
  }

  async removeColumn(id: number) {
    const res = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(BoardColumn)
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }
}
