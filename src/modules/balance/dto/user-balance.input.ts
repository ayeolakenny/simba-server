import { Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserBalances {
  @Field(() => Int)
  USD: number;

  @Field(() => Int)
  EUR: number;

  @Field(() => Int)
  GBP: number;
}
