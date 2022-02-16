import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceUpdateInput } from './balance-update.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';

@ArgsType()
export class UpdateOneBalanceArgs {

    @Field(() => BalanceUpdateInput, {nullable:false})
    data!: BalanceUpdateInput;

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;
}
