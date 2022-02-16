import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';

@ArgsType()
export class FindUniqueBalanceArgs {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;
}
