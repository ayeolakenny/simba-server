import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceCreateWithoutUserInput } from './balance-create-without-user.input';
import { BalanceCreateOrConnectWithoutUserInput } from './balance-create-or-connect-without-user.input';
import { BalanceUpsertWithWhereUniqueWithoutUserInput } from './balance-upsert-with-where-unique-without-user.input';
import { BalanceCreateManyUserInputEnvelope } from './balance-create-many-user-input-envelope.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { BalanceUpdateWithWhereUniqueWithoutUserInput } from './balance-update-with-where-unique-without-user.input';
import { BalanceUpdateManyWithWhereWithoutUserInput } from './balance-update-many-with-where-without-user.input';
import { BalanceScalarWhereInput } from './balance-scalar-where.input';

@InputType()
export class BalanceUpdateManyWithoutUserInput {

    @Field(() => [BalanceCreateWithoutUserInput], {nullable:true})
    create?: Array<BalanceCreateWithoutUserInput>;

    @Field(() => [BalanceCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BalanceCreateOrConnectWithoutUserInput>;

    @Field(() => [BalanceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<BalanceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BalanceCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BalanceCreateManyUserInputEnvelope;

    @Field(() => [BalanceWhereUniqueInput], {nullable:true})
    set?: Array<BalanceWhereUniqueInput>;

    @Field(() => [BalanceWhereUniqueInput], {nullable:true})
    disconnect?: Array<BalanceWhereUniqueInput>;

    @Field(() => [BalanceWhereUniqueInput], {nullable:true})
    delete?: Array<BalanceWhereUniqueInput>;

    @Field(() => [BalanceWhereUniqueInput], {nullable:true})
    connect?: Array<BalanceWhereUniqueInput>;

    @Field(() => [BalanceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<BalanceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BalanceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<BalanceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BalanceScalarWhereInput], {nullable:true})
    deleteMany?: Array<BalanceScalarWhereInput>;
}
