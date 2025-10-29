export declare class CreateTicketDto {
    title: string;
    description: string;
    board: number;
    column: number;
}
export declare class CreateCommentDto {
    username: string;
    text: string;
    ticket: number;
}
