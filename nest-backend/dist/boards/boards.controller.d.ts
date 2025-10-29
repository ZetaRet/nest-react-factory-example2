import { BoardsService } from './boards.service';
import { CreateBoardColumnDto, CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardColumnDto, UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: CreateBoardDto): Promise<{
        id: any;
    }>;
    findAll(id: number): Promise<import("./entities/board.entity").Board[]>;
    findOne(id: number): Promise<import("./entities/board.entity").Board>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<{
        success: boolean;
    }>;
    createColumn(createBoardColumnDto: CreateBoardColumnDto): Promise<{
        id: any;
    }>;
    updateColumn(id: number, updateBoardColumnDto: UpdateBoardColumnDto): Promise<{
        success: boolean;
    }>;
    getColumns(id: number): Promise<import("./entities/board.entity").BoardColumn[]>;
    removeColumn(id: number): Promise<{
        success: boolean;
    }>;
}
