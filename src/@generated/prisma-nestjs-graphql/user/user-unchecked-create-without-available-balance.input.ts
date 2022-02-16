import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionUncheckedCreateNestedManyWithoutToInput } from '../transaction/transaction-unchecked-create-nested-many-without-to.input';
import { TransactionUncheckedCreateNestedManyWithoutFromInput } from '../transaction/transaction-unchecked-create-nested-many-without-from.input';

@InputType()
export class UserUncheckedCreateWithoutAvailableBalanceInput {

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

    @Field(() => TransactionUncheckedCreateNestedManyWithoutToInput, {nullable:true})
    transactionsTo?: TransactionUncheckedCreateNestedManyWithoutToInput;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutFromInput, {nullable:true})
    transactionsFrom?: TransactionUncheckedCreateNestedManyWithoutFromInput;
}
