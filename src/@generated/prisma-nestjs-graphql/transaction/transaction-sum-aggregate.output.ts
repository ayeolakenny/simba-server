import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TransactionSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    recieverId?: number;

    @Field(() => Int, {nullable:true})
    senderId?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    exchangeRate?: number;

    @Field(() => Int, {nullable:true})
    status?: number;
}
