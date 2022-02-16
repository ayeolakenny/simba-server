import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';

@InputType()
export class BalanceCreateOrConnectWithoutUserInput {

    @Field(() => BalanceWhereUniqueInput, {nullable:false})
    where!: BalanceWhereUniqueInput;

    @Field(() => BalanceCreateWithoutUserInput, {nullable:false})
    create!: BalanceCreateWithoutUserInput;
}
