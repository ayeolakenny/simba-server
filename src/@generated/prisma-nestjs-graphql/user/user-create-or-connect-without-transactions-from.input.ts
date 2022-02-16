import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTransactionsFromInput } from './user-create-without-transactions-from.input';

@InputType()
export class UserCreateOrConnectWithoutTransactionsFromInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTransactionsFromInput, {nullable:false})
    create!: UserCreateWithoutTransactionsFromInput;
}
