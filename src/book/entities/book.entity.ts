
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  price: number;
  @Column({ unique: true })
  name: string;
  @Column()
  author: string;
}
