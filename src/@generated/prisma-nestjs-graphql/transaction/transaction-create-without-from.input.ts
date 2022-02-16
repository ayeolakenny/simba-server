import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutTransactionsToInput } from '../user/user-create-nested-one-without-transactions-to.input';

@InputType()
export class TransactionCreateWithoutFromInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    value!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    currency!: string;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTransactionsToInput, {nullable:false})
    to!: UserCreateNestedOneWithoutTransactionsToInput;
}
