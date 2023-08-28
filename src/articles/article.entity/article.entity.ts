import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Article {
  @PrimaryColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  author: string;
  @Column()
  creationDate: Date;
}
