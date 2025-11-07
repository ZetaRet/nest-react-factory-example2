import { CreateCommentDto, CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateCommentDto, UpdateTicketDto } from './dto/update-ticket.dto';
import { DataSource } from 'typeorm';
import { Comment, Ticket } from './entities/ticket.entity';
export declare class TicketsService {
    private dataSource;
    constructor(dataSource: DataSource);
    create(createTicketDto: CreateTicketDto): Promise<{
        id: any;
    }>;
    findAll(id: number): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<{
        success: boolean;
    }>;
    remove(id: number): Promise<{
        success: boolean;
    }>;
    createComment(createCommentDto: CreateCommentDto): Promise<{
        id: any;
    }>;
    updateComment(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        success: boolean;
    }>;
    getComment(id: number): Promise<Comment>;
    getComments(id: number): Promise<Comment[]>;
    removeComment(id: number): Promise<{
        success: boolean;
    }>;
}
