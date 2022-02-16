import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BalanceCountAggregate } from './balance-count-aggregate.output';
import { BalanceAvgAggregate } from './balance-avg-aggregate.output';
import { BalanceSumAggregate } from './balance-sum-aggregate.output';
import { BalanceMinAggregate } from './balance-min-aggregate.output';
import { BalanceMaxAggregate } from './balance-max-aggregate.output';

@ObjectType()
export class BalanceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
