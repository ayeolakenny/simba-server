import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTransactionsFromInput } from './user-update-without-transactions-from.input';
import { UserCreateWithoutTransactionsFromInput } from './user-create-without-transactions-from.input';

@InputType()
export class UserUpsertWithoutTransactionsFromInput {

    @Field(() => UserUpdateWithoutTransactionsFromInput, {nullable:false})
    update!: UserUpdateWithoutTransactionsFromInput;

    @Field(() => UserCreateWithoutTransactionsFromInput, {nullable:false})
    create!: UserCreateWithoutTransactionsFromInput;
}
