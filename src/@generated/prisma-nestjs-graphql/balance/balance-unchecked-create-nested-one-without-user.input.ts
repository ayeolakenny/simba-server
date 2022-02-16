import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';
import { BalanceCreateOrConnectWithoutUserInput } from './balance-create-or-connect-without-user.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';

@InputType()
export class BalanceUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => BalanceCreateWithoutUserInput, {nullable:true})
    create?: BalanceCreateWithoutUserInput;

    @Field(() => BalanceCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput;

    @Field(() => BalanceWhereUniqueInput, {nullable:true})
    connect?: BalanceWhereUniqueInput;
}
