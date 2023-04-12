import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}
