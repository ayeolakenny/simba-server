import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionCreateNestedManyWithoutRecieverInput } from '../transaction/transaction-create-nested-many-without-reciever.input';
import { BalanceCreateNestedManyWithoutUserInput } from '../balance/balance-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutTransactionsFromInput {

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

    @Field(() => TransactionCreateNestedManyWithoutRecieverInput, {nullable:true})
    transactionsTo?: TransactionCreateNestedManyWithoutRecieverInput;

    @Field(() => BalanceCreateNestedManyWithoutUserInput, {nullable:true})
    Balance?: BalanceCreateNestedManyWithoutUserInput;
}
