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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
let ProjectsService = class ProjectsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(createProjectDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(project_entity_1.Project)
            .values({ ...createProjectDto })
            .execute();
        return { id: res.raw.insertId };
    }
    findAll() {
        return this.dataSource.createQueryBuilder().select('*').from(project_entity_1.Project, '*').getMany();
    }
    findOne(id) {
        return this.dataSource.createQueryBuilder().select('*').from(project_entity_1.Project, '*').where('id = :id', { id }).getOne();
    }
    async update(id, updateProjectDto) {
        const res = await this.dataSource
            .createQueryBuilder()
            .update(project_entity_1.Project)
            .set({ ...updateProjectDto })
            .where('id = :id', { id })
            .execute();
        return { success: res.affected ? true : false };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ProjectsService);
