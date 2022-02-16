import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    transactionsTo!: number;

    @Field(() => Int, {nullable:false})
    transactionsFrom!: number;

    @Field(() => Int, {nullable:false})
    Balance!: number;
}
