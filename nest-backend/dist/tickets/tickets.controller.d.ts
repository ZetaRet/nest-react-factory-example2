import { TicketsService } from './tickets.service';
import { CreateCommentDto, CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateCommentDto, UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(createTicketDto: CreateTicketDto): Promise<{
        id: any;
    }>;
    findAll(id: number): Promise<import("./entities/ticket.entity").Ticket[]>;
    findOne(id: number): Promise<import("./entities/ticket.entity").Ticket>;
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
    getComments(id: number): Promise<import("./entities/ticket.entity").Comment[]>;
    removeComment(id: number): Promise<{
        success: boolean;
    }>;
}
