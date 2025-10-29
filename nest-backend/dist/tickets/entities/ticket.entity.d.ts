export declare class Ticket {
    id: number;
    title: string;
    description: string;
    board: number;
    column: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Comment {
    id: number;
    username: string;
    text: string;
    ticket: number;
    createdAt: Date;
    updatedAt: Date;
}
