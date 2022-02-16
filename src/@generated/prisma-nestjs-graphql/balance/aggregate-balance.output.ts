import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BalanceCountAggregate } from './balance-count-aggregate.output';
import { BalanceAvgAggregate } from './balance-avg-aggregate.output';
import { BalanceSumAggregate } from './balance-sum-aggregate.output';
import { BalanceMinAggregate } from './balance-min-aggregate.output';
import { BalanceMaxAggregate } from './balance-max-aggregate.output';

@ObjectType()
export class AggregateBalance {

    @Field(() => BalanceCountAggregate, {nullable:true})
    _count?: BalanceCountAggregate;

    @Field(() => BalanceAvgAggregate, {nullable:true})
    _avg?: BalanceAvgAggregate;

    @Field(() => BalanceSumAggregate, {nullable:true})
    _sum?: BalanceSumAggregate;

    @Field(() => BalanceMinAggregate, {nullable:true})
    _min?: BalanceMinAggregate;

    @Field(() => BalanceMaxAggregate, {nullable:true})
    _max?: BalanceMaxAggregate;
}
