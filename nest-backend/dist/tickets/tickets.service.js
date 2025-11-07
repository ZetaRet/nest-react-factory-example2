"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketsService = class TicketsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(createTicketDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(ticket_entity_1.Ticket)
            .values({ ...createTicketDto })
            .execute();
        return { id: res.raw.insertId };
    }
    findAll(id) {
        return this.dataSource
            .createQueryBuilder()
            .select(['ts.id', 'ts.title', 'ts.board', 'ts.column', 'ts.done', 'ts.createdAt', 'ts.updatedAt'])
            .from(ticket_entity_1.Ticket, 'ts')
            .where('ts.board = :id', { id })
            .orderBy('ts.createdAt', 'ASC')
            .getMany();
    }
    findOne(id) {
        return this.dataSource.createQueryBuilder().select('*').from(ticket_entity_1.Ticket, '*').where('id = :id', { id }).getOne();
    }
    async update(id, updateTicketDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .update(ticket_entity_1.Ticket)
            .set({ ...updateTicketDto })
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
    async remove(id) {
        const res = await this.dataSource.createQueryBuilder().delete().from(ticket_entity_1.Ticket).where('id = :id', { id }).execute();
        return { success: res.affected ? true : false };
    }
    async createComment(createCommentDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(ticket_entity_1.Comment)
            .values({ ...createCommentDto })
            .execute();
        return { id: res.raw.insertId };
    }
    async updateComment(id, updateCommentDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .update(ticket_entity_1.Comment)
            .set({ ...updateCommentDto })
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
    getComment(id) {
        return this.dataSource.createQueryBuilder().select('*').from(ticket_entity_1.Comment, '*').where('id = :id', { id }).getOne();
    }
    getComments(id) {
        return this.dataSource
            .createQueryBuilder()
            .select('*')
            .from(ticket_entity_1.Comment, '*')
            .where('ticket = :id', { id })
            .orderBy('createdAt', 'ASC')
            .getMany();
    }
    async removeComment(id) {
        const res = await this.dataSource.createQueryBuilder().delete().from(ticket_entity_1.Comment).where('id = :id', { id }).execute();
        return { success: res.affected ? true : false };
    }
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TicketsService);
