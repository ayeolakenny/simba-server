import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutSenderInput } from './transaction-create-without-sender.input';

@InputType()
export class TransactionCreateOrConnectWithoutSenderInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutSenderInput, {nullable:false})
    create!: TransactionCreateWithoutSenderInput;
}
