import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTransactionsToInput } from './user-create-without-transactions-to.input';

@InputType()
export class UserCreateOrConnectWithoutTransactionsToInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTransactionsToInput, {nullable:false})
    create!: UserCreateWithoutTransactionsToInput;
}
