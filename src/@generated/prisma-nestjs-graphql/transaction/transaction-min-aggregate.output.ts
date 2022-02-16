import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TransactionMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    recieverId?: number;

    @Field(() => Int, {nullable:true})
    senderId?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    sourceCurrency?: string;

    @Field(() => String, {nullable:true})
    targetCurrency?: string;

    @Field(() => Float, {nullable:true})
    exchangeRate?: number;

    @Field(() => Int, {nullable:true})
    status?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
