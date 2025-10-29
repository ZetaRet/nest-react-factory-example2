import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column('varchar', { length: 100 })
  name: string;

  @Column('text')
  title: string;

  @Index()
  @Column('int')
  project: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column('varchar', { length: 100 })
  name: string;

  @Column('text')
  title: string;

  @Index()
  @Column('int')
  board: number;

  @Column('int')
  index: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
