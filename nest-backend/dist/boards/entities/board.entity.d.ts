export declare class Board {
    id: number;
    name: string;
    title: string;
    project: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class BoardColumn {
    id: number;
    name: string;
    title: string;
    board: number;
    index: number;
    createdAt: Date;
    updatedAt: Date;
}
