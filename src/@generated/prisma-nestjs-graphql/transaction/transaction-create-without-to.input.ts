import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutTransactionsFromInput } from '../user/user-create-nested-one-without-transactions-from.input';

@InputType()
export class TransactionCreateWithoutToInput {

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

    @Field(() => UserCreateNestedOneWithoutTransactionsFromInput, {nullable:false})
    from!: UserCreateNestedOneWithoutTransactionsFromInput;
}
