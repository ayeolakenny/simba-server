import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';
import { BalanceCreateOrConnectWithoutUserInput } from './balance-create-or-connect-without-user.input';
import { BalanceUpsertWithoutUserInput } from './balance-upsert-without-user.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceUpdateWithoutUserInput } from './balance-update-without-user.input';

@InputType()
export class BalanceUncheckedUpdateOneWithoutUserInput {

    @Field(() => BalanceCreateWithoutUserInput, {nullable:true})
    create?: BalanceCreateWithoutUserInput;

    @Field(() => BalanceCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput;

    @Field(() => BalanceUpsertWithoutUserInput, {nullable:true})
    upsert?: BalanceUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BalanceWhereUniqueInput, {nullable:true})
    connect?: BalanceWhereUniqueInput;

    @Field(() => BalanceUpdateWithoutUserInput, {nullable:true})
    update?: BalanceUpdateWithoutUserInput;
}
