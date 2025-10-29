import { IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  board: number;

  @IsNotEmpty()
  column: number;
}

export class CreateCommentDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  ticket: number;
}
