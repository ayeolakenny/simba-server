import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TransactionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    recieverId?: true;

    @Field(() => Boolean, {nullable:true})
    senderId?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    exchangeRate?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;
}
