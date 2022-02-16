import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsToInput } from './user-create-without-transactions-to.input';
import { UserCreateOrConnectWithoutTransactionsToInput } from './user-create-or-connect-without-transactions-to.input';
import { UserUpsertWithoutTransactionsToInput } from './user-upsert-without-transactions-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTransactionsToInput } from './user-update-without-transactions-to.input';

@InputType()
export class UserUpdateOneRequiredWithoutTransactionsToInput {

    @Field(() => UserCreateWithoutTransactionsToInput, {nullable:true})
    create?: UserCreateWithoutTransactionsToInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsToInput;

    @Field(() => UserUpsertWithoutTransactionsToInput, {nullable:true})
    upsert?: UserUpsertWithoutTransactionsToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTransactionsToInput, {nullable:true})
    update?: UserUpdateWithoutTransactionsToInput;
}
