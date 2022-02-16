import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBalanceInput } from './user-create-without-balance.input';
import { UserCreateOrConnectWithoutBalanceInput } from './user-create-or-connect-without-balance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBalanceInput {

    @Field(() => UserCreateWithoutBalanceInput, {nullable:true})
    create?: UserCreateWithoutBalanceInput;

    @Field(() => UserCreateOrConnectWithoutBalanceInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
