import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class BalanceCreateWithoutUserInput {

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
}
