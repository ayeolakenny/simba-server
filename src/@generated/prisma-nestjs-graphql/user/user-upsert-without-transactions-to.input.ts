import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTransactionsToInput } from './user-update-without-transactions-to.input';
import { UserCreateWithoutTransactionsToInput } from './user-create-without-transactions-to.input';

@InputType()
export class UserUpsertWithoutTransactionsToInput {

    @Field(() => UserUpdateWithoutTransactionsToInput, {nullable:false})
    update!: UserUpdateWithoutTransactionsToInput;

    @Field(() => UserCreateWithoutTransactionsToInput, {nullable:false})
    create!: UserCreateWithoutTransactionsToInput;
}
