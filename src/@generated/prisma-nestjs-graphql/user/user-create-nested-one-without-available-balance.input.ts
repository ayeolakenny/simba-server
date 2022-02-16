import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvailableBalanceInput } from './user-create-without-available-balance.input';
import { UserCreateOrConnectWithoutAvailableBalanceInput } from './user-create-or-connect-without-available-balance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAvailableBalanceInput {

    @Field(() => UserCreateWithoutAvailableBalanceInput, {nullable:true})
    create?: UserCreateWithoutAvailableBalanceInput;

    @Field(() => UserCreateOrConnectWithoutAvailableBalanceInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAvailableBalanceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
