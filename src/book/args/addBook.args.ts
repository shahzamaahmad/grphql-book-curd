import { InputType, Field, Int } from "@nestjs/graphql";


@InputType()
export class AddArgs {
  @Field()
  name: string
  @Field()
  author: string
  @Field((type) => Int)
  price: number
}