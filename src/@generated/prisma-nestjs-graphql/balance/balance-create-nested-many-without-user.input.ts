import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';
import { BalanceCreateOrConnectWithoutUserInput } from './balance-create-or-connect-without-user.input';
import { BalanceCreateManyUserInputEnvelope } from './balance-create-many-user-input-envelope.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';

@InputType()
export class BalanceCreateNestedManyWithoutUserInput {

    @Field(() => [BalanceCreateWithoutUserInput], {nullable:true})
    create?: Array<BalanceCreateWithoutUserInput>;

    @Field(() => [BalanceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BalanceCreateOrConnectWithoutUserInput>;

    @Field(() => BalanceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BalanceCreateManyUserInputEnvelope;

    @Field(() => [BalanceWhereUniqueInput], {nullable:true})
    connect?: Array<BalanceWhereUniqueInput>;
}
