import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    reciever?: User;

    @Field(() => Int, {nullable:false})
    recieverId!: number;

    @Field(() => User, {nullable:false})
    sender?: User;

    @Field(() => Int, {nullable:false})
    senderId!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    sourceCurrency!: string;

    @Field(() => String, {nullable:false})
    targetCurrency!: string;

    @Field(() => Float, {nullable:false})
    exchangeRate!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
