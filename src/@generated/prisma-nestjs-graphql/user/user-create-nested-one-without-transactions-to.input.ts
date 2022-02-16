import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsToInput } from './user-create-without-transactions-to.input';
import { UserCreateOrConnectWithoutTransactionsToInput } from './user-create-or-connect-without-transactions-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTransactionsToInput {

    @Field(() => UserCreateWithoutTransactionsToInput, {nullable:true})
    create?: UserCreateWithoutTransactionsToInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
