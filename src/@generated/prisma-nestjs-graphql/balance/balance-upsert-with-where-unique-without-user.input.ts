import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceUpdateWithoutUserInput } from './balance-update-without-user.input';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';

@InputType()
export class BalanceUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;

    @Field(() => BalanceUpdateWithoutUserInput, {nullable:false})
    update!: BalanceUpdateWithoutUserInput;

    @Field(() => BalanceCreateWithoutUserInput, {nullable:false})
    create!: BalanceCreateWithoutUserInput;
}
