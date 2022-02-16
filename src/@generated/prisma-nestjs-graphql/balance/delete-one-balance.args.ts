import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';

@ArgsType()
export class DeleteOneBalanceArgs {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;
}
