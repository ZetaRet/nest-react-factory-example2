"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const config_1 = require("@nestjs/config");
const projects_module_1 = require("./projects/projects.module");
const project_entity_1 = require("./projects/entities/project.entity");
const boards_module_1 = require("./boards/boards.module");
const tickets_module_1 = require("./tickets/tickets.module");
const board_entity_1 = require("./boards/entities/board.entity");
const ticket_entity_1 = require("./tickets/entities/ticket.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../', 'public_html'),
                exclude: ['/api/(.*)'],
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.NODE_ENV == 'rootprod' ? 'nest-backend/.env' : '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_NAME,
                password: process.env.DB_PASS,
                database: process.env.SCHEMA,
                entities: [project_entity_1.Project, board_entity_1.Board, board_entity_1.BoardColumn, ticket_entity_1.Ticket, ticket_entity_1.Comment],
                synchronize: true,
                autoLoadEntities: true,
            }),
            projects_module_1.ProjectsModule,
            boards_module_1.BoardsModule,
            tickets_module_1.TicketsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
