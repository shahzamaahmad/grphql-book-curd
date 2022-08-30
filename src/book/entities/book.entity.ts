/* eslint-disable @typescript-eslint/no-unused-vars */
// import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class BookEntity {
//   @Field(() => Int, { description: 'Book Id Field' })
//   id: number;
//   @Field({ description: 'Book Name Field' })
//   name: string;
//   @Field(() => Int, { description: 'Price Field' })
//   price: number;
//   @Field({ description: 'Author Field' })
//   author: string;
// }
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  price: number;
  @Column()
  name: string;
  @Column()
  author: string;
}
