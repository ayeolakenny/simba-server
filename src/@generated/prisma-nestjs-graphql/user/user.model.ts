import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Transaction } from '../transaction/transaction.model';
import { Balance } from '../balance/balance.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => [Transaction], {nullable:true})
    transactionsTo?: Array<Transaction>;

    @Field(() => [Transaction], {nullable:true})
    transactionsFrom?: Array<Transaction>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Balance], {nullable:true})
    Balance?: Array<Balance>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
