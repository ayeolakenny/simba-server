import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BalanceCountOrderByAggregateInput } from './balance-count-order-by-aggregate.input';
import { BalanceAvgOrderByAggregateInput } from './balance-avg-order-by-aggregate.input';
import { BalanceMaxOrderByAggregateInput } from './balance-max-order-by-aggregate.input';
import { BalanceMinOrderByAggregateInput } from './balance-min-order-by-aggregate.input';
import { BalanceSumOrderByAggregateInput } from './balance-sum-order-by-aggregate.input';

@InputType()
export class BalanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BalanceCountOrderByAggregateInput, {nullable:true})
    _count?: BalanceCountOrderByAggregateInput;

    @Field(() => BalanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: BalanceAvgOrderByAggregateInput;

    @Field(() => BalanceMaxOrderByAggregateInput, {nullable:true})
    _max?: BalanceMaxOrderByAggregateInput;

    @Field(() => BalanceMinOrderByAggregateInput, {nullable:true})
    _min?: BalanceMinOrderByAggregateInput;

    @Field(() => BalanceSumOrderByAggregateInput, {nullable:true})
    _sum?: BalanceSumOrderByAggregateInput;
}
