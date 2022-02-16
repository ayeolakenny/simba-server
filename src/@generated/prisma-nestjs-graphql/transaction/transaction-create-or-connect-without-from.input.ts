import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutFromInput } from './transaction-create-without-from.input';

@InputType()
export class TransactionCreateOrConnectWithoutFromInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutFromInput, {nullable:false})
    create!: TransactionCreateWithoutFromInput;
}
