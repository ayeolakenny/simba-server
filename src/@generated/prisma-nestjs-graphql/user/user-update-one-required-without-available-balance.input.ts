import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailableBalanceInput } from './user-create-without-available-balance.input';
import { UserCreateOrConnectWithoutAvailableBalanceInput } from './user-create-or-connect-without-available-balance.input';
import { UserUpsertWithoutAvailableBalanceInput } from './user-upsert-without-available-balance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAvailableBalanceInput } from './user-update-without-available-balance.input';

@InputType()
export class UserUpdateOneRequiredWithoutAvailableBalanceInput {

    @Field(() => UserCreateWithoutAvailableBalanceInput, {nullable:true})
    create?: UserCreateWithoutAvailableBalanceInput;

    @Field(() => UserCreateOrConnectWithoutAvailableBalanceInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAvailableBalanceInput;

    @Field(() => UserUpsertWithoutAvailableBalanceInput, {nullable:true})
    upsert?: UserUpsertWithoutAvailableBalanceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAvailableBalanceInput, {nullable:true})
    update?: UserUpdateWithoutAvailableBalanceInput;
}
