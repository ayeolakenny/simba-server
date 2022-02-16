import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsFromInput } from './user-create-without-transactions-from.input';
import { UserCreateOrConnectWithoutTransactionsFromInput } from './user-create-or-connect-without-transactions-from.input';
import { UserUpsertWithoutTransactionsFromInput } from './user-upsert-without-transactions-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTransactionsFromInput } from './user-update-without-transactions-from.input';

@InputType()
export class UserUpdateOneRequiredWithoutTransactionsFromInput {

    @Field(() => UserCreateWithoutTransactionsFromInput, {nullable:true})
    create?: UserCreateWithoutTransactionsFromInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsFromInput;

    @Field(() => UserUpsertWithoutTransactionsFromInput, {nullable:true})
    upsert?: UserUpsertWithoutTransactionsFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTransactionsFromInput, {nullable:true})
    update?: UserUpdateWithoutTransactionsFromInput;
}
