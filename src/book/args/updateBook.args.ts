import { InputType, Field, Int } from "@nestjs/graphql";


@InputType()
export class UpdateArgs {
  @Field()
  name: string
  @Field((type) => Int)
  ID: number
  @Field()
  author: string
  @Field((type) => Int)
  price: number
}