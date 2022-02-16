import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBalanceInput } from './user-create-without-balance.input';
import { UserCreateOrConnectWithoutBalanceInput } from './user-create-or-connect-without-balance.input';
import { UserUpsertWithoutBalanceInput } from './user-upsert-without-balance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutBalanceInput } from './user-update-without-balance.input';

@InputType()
export class UserUpdateOneRequiredWithoutBalanceInput {

    @Field(() => UserCreateWithoutBalanceInput, {nullable:true})
    create?: UserCreateWithoutBalanceInput;

    @Field(() => UserCreateOrConnectWithoutBalanceInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput;

    @Field(() => UserUpsertWithoutBalanceInput, {nullable:true})
    upsert?: UserUpsertWithoutBalanceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutBalanceInput, {nullable:true})
    update?: UserUpdateWithoutBalanceInput;
}
