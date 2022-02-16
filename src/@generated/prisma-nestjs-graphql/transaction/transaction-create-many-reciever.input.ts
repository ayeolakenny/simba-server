import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';

@InputType()
export class TransactionCreateManyRecieverInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    senderId!: number;

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
}
