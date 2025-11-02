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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./entities/board.entity");
let BoardsService = class BoardsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(createBoardDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(board_entity_1.Board)
            .values({ ...createBoardDto })
            .execute();
        return { id: res.raw.insertId };
    }
    findAll(id) {
        return this.dataSource
            .createQueryBuilder()
            .select('*')
            .from(board_entity_1.Board, '*')
            .where('project = :id', { id })
            .orderBy('createdAt', 'ASC')
            .getMany();
    }
    findOne(id) {
        return this.dataSource.createQueryBuilder().select('*').from(board_entity_1.Board, '*').where('id = :id', { id }).getOne();
    }
    async update(id, updateBoardDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .update(board_entity_1.Board)
            .set({ ...updateBoardDto })
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
    async createColumn(createBoardColumnDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(board_entity_1.BoardColumn)
            .values({ ...createBoardColumnDto })
            .execute();
        return { id: res.raw.insertId };
    }
    async updateColumn(id, updateBoardColumnDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .update(board_entity_1.BoardColumn)
            .set({ ...updateBoardColumnDto })
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
    getColumns(id) {
        return this.dataSource
            .createQueryBuilder()
            .select('*')
            .from(board_entity_1.BoardColumn, '*')
            .where('board = :id', { id })
            .orderBy('`index`', 'ASC')
            .getMany();
    }
    getColumn(id) {
        return this.dataSource.createQueryBuilder().select('*').from(board_entity_1.BoardColumn, '*').where('id = :id', { id }).getOne();
    }
    async removeColumn(id) {
        const res = await this.dataSource
            .createQueryBuilder()
            .delete()
            .from(board_entity_1.BoardColumn)
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BoardsService);
