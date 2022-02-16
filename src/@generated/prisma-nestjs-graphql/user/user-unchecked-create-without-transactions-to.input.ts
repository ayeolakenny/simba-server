import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionUncheckedCreateNestedManyWithoutSenderInput } from '../transaction/transaction-unchecked-create-nested-many-without-sender.input';
import { BalanceUncheckedCreateNestedManyWithoutUserInput } from '../balance/balance-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutTransactionsToInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    @Validator.IsString()
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutSenderInput, {nullable:true})
    transactionsFrom?: TransactionUncheckedCreateNestedManyWithoutSenderInput;

    @Field(() => BalanceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput;
}
