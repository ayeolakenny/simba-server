import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsFromInput } from './user-create-without-transactions-from.input';
import { UserCreateOrConnectWithoutTransactionsFromInput } from './user-create-or-connect-without-transactions-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTransactionsFromInput {

    @Field(() => UserCreateWithoutTransactionsFromInput, {nullable:true})
    create?: UserCreateWithoutTransactionsFromInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
