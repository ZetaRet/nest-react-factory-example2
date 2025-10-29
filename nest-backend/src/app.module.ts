import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { Project } from './projects/entities/project.entity';
import { BoardsModule } from './boards/boards.module';
import { TicketsModule } from './tickets/tickets.module';
import { Board, BoardColumn } from './boards/entities/board.entity';
import { Comment, Ticket } from './tickets/entities/ticket.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public_html'),
      exclude: ['/api/(.*)'],
    }),
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV == 'rootprod' ? 'nest-backend/.env' : '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_NAME,
      password: process.env.DB_PASS,
      database: process.env.SCHEMA,
      entities: [Project, Board, BoardColumn, Ticket, Comment],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProjectsModule,
    BoardsModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
