import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BookSchema {
  @Field((type => Int))
  ID: number;
  @Field((type => Int))
  price: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  author: string;

}