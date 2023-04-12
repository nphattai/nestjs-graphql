import { Field, InputType, Int } from "@nestjs/graphql";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@InputType()
export class UpdateUserInput {
  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
