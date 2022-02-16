import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutToInput } from './transaction-create-without-to.input';

@InputType()
export class TransactionCreateOrConnectWithoutToInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutToInput, {nullable:false})
    create!: TransactionCreateWithoutToInput;
}
