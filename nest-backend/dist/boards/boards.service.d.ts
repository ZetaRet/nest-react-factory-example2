import { CreateBoardColumnDto, CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardColumnDto, UpdateBoardDto } from './dto/update-board.dto';
import { DataSource } from 'typeorm';
import { Board, BoardColumn } from './entities/board.entity';
export declare class BoardsService {
    private dataSource;
    constructor(dataSource: DataSource);
    create(createBoardDto: CreateBoardDto): Promise<{
        id: any;
    }>;
    findAll(id: number): Promise<Board[]>;
    findOne(id: number): Promise<Board>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<{
        success: boolean;
    }>;
    createColumn(createBoardColumnDto: CreateBoardColumnDto): Promise<{
        id: any;
    }>;
    updateColumn(id: number, updateBoardColumnDto: UpdateBoardColumnDto): Promise<{
        success: boolean;
    }>;
    getColumns(id: number): Promise<BoardColumn[]>;
    getColumn(id: number): Promise<BoardColumn>;
    removeColumn(id: number): Promise<{
        success: boolean;
    }>;
}
