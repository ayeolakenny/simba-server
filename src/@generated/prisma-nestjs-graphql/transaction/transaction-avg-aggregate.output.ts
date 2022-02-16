import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TransactionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    recieverId?: number;

    @Field(() => Float, {nullable:true})
    senderId?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    exchangeRate?: number;

    @Field(() => Float, {nullable:true})
    status?: number;
}
