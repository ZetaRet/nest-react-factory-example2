import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  board: number;

  @IsNotEmpty()
  @IsNumber()
  column: number;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  done: boolean;
}

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsNumber()
  ticket: number;
}
