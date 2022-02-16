import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceWhereInput } from './balance-where.input';

@InputType()
export class BalanceRelationFilter {

    @Field(() => BalanceWhereInput, {nullable:true})
    is?: BalanceWhereInput;

    @Field(() => BalanceWhereInput, {nullable:true})
    isNot?: BalanceWhereInput;
}
