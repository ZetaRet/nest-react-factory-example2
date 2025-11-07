import { Injectable } from '@nestjs/common';
import { CreateCommentDto, CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateCommentDto, UpdateTicketDto } from './dto/update-ticket.dto';
import { DataSource } from 'typeorm';
import { Comment, Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(private dataSource: DataSource) {}

  async create(createTicketDto: CreateTicketDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Ticket)
      .values({ ...createTicketDto })
      .execute();

    return { id: res.raw.insertId };
  }

  findAll(id: number) {
    return this.dataSource
      .createQueryBuilder()
      .select(['ts.id', 'ts.title', 'ts.board', 'ts.column', 'ts.done', 'ts.createdAt', 'ts.updatedAt'])
      .from(Ticket, 'ts')
      .where('ts.board = :id', { id })
      .orderBy('ts.createdAt', 'ASC')
      .getMany();
  }

  findOne(id: number) {
    return this.dataSource.createQueryBuilder().select('*').from(Ticket, '*').where('id = :id', { id }).getOne();
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .update(Ticket)
      .set({ ...updateTicketDto })
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }

  async remove(id: number) {
    const res = await this.dataSource.createQueryBuilder().delete().from(Ticket).where('id = :id', { id }).execute();

    return { success: res.affected ? true : false };
  }

  async createComment(createCommentDto: CreateCommentDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Comment)
      .values({ ...createCommentDto })
      .execute();

    return { id: res.raw.insertId };
  }

  async updateComment(id: number, updateCommentDto: UpdateCommentDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .update(Comment)
      .set({ ...updateCommentDto })
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }

  getComment(id: number) {
    return this.dataSource.createQueryBuilder().select('*').from(Comment, '*').where('id = :id', { id }).getOne();
  }

  getComments(id: number) {
    return this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(Comment, '*')
      .where('ticket = :id', { id })
      .orderBy('createdAt', 'ASC')
      .getMany();
  }

  async removeComment(id: number) {
    const res = await this.dataSource.createQueryBuilder().delete().from(Comment).where('id = :id', { id }).execute();

    return { success: res.affected ? true : false };
  }
}
