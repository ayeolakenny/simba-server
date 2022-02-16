import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereInput } from './balance-where.input';
import { BalanceOrderByWithRelationInput } from './balance-order-by-with-relation.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BalanceCountAggregateInput } from './balance-count-aggregate.input';
import { BalanceAvgAggregateInput } from './balance-avg-aggregate.input';
import { BalanceSumAggregateInput } from './balance-sum-aggregate.input';
import { BalanceMinAggregateInput } from './balance-min-aggregate.input';
import { BalanceMaxAggregateInput } from './balance-max-aggregate.input';

@ArgsType()
export class BalanceAggregateArgs {

    @Field(() => BalanceWhereInput, {nullable:true})
    where?: BalanceWhereInput;

    @Field(() => [BalanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BalanceOrderByWithRelationInput>;

    @Field(() => BalanceWhereUniqueInput, {nullable:true})
    cursor?: BalanceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BalanceCountAggregateInput, {nullable:true})
    _count?: BalanceCountAggregateInput;

    @Field(() => BalanceAvgAggregateInput, {nullable:true})
    _avg?: BalanceAvgAggregateInput;

    @Field(() => BalanceSumAggregateInput, {nullable:true})
    _sum?: BalanceSumAggregateInput;

    @Field(() => BalanceMinAggregateInput, {nullable:true})
    _min?: BalanceMinAggregateInput;

    @Field(() => BalanceMaxAggregateInput, {nullable:true})
    _max?: BalanceMaxAggregateInput;
}
