import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceWhereInput } from './balance-where.input';

@InputType()
export class BalanceListRelationFilter {

    @Field(() => BalanceWhereInput, {nullable:true})
    every?: BalanceWhereInput;

    @Field(() => BalanceWhereInput, {nullable:true})
    some?: BalanceWhereInput;

    @Field(() => BalanceWhereInput, {nullable:true})
    none?: BalanceWhereInput;
}
