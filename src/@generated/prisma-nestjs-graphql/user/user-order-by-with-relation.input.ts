import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';
import { BalanceOrderByRelationAggregateInput } from '../balance/balance-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    transactionsTo?: TransactionOrderByRelationAggregateInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    transactionsFrom?: TransactionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BalanceOrderByRelationAggregateInput, {nullable:true})
    Balance?: BalanceOrderByRelationAggregateInput;
}
