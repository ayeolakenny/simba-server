import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionCreateNestedManyWithoutToInput } from '../transaction/transaction-create-nested-many-without-to.input';
import { TransactionCreateNestedManyWithoutFromInput } from '../transaction/transaction-create-nested-many-without-from.input';

@InputType()
export class UserCreateWithoutAvailableBalanceInput {

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

    @Field(() => TransactionCreateNestedManyWithoutToInput, {nullable:true})
    transactionsTo?: TransactionCreateNestedManyWithoutToInput;

    @Field(() => TransactionCreateNestedManyWithoutFromInput, {nullable:true})
    transactionsFrom?: TransactionCreateNestedManyWithoutFromInput;
}
