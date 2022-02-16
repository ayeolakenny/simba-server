import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTransactionsToInput } from '../user/user-create-nested-one-without-transactions-to.input';
import { UserCreateNestedOneWithoutTransactionsFromInput } from '../user/user-create-nested-one-without-transactions-from.input';

@InputType()
export class TransactionCreateInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    amount!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceCurrency!: string;

    @Field(() => String, {nullable:false})
    targetCurrency!: string;

    @Field(() => Float, {nullable:false})
    exchangeRate!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTransactionsToInput, {nullable:false})
    reciever!: UserCreateNestedOneWithoutTransactionsToInput;

    @Field(() => UserCreateNestedOneWithoutTransactionsFromInput, {nullable:false})
    sender!: UserCreateNestedOneWithoutTransactionsFromInput;
}
