import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceUpdateWithoutUserInput } from './balance-update-without-user.input';

@InputType()
export class BalanceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;

    @Field(() => BalanceUpdateWithoutUserInput, {nullable:false})
    data!: BalanceUpdateWithoutUserInput;
}
