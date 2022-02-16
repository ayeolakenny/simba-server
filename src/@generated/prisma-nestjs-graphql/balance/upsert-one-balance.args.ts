import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceCreateInput } from './balance-create.input';
import { BalanceUpdateInput } from './balance-update.input';

@ArgsType()
export class UpsertOneBalanceArgs {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;

    @Field(() => BalanceCreateInput, {nullable:false})
    create!: BalanceCreateInput;

    @Field(() => BalanceUpdateInput, {nullable:false})
    update!: BalanceUpdateInput;
}
