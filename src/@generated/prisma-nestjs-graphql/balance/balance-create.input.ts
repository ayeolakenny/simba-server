import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutBalanceInput } from '../user/user-create-nested-one-without-balance.input';

@InputType()
export class BalanceCreateInput {

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    amount!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    currency!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBalanceInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBalanceInput;
}
