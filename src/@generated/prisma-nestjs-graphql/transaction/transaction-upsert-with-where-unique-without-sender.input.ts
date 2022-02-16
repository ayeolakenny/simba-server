import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutSenderInput } from './transaction-update-without-sender.input';
import { TransactionCreateWithoutSenderInput } from './transaction-create-without-sender.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutSenderInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutSenderInput, {nullable:false})
    update!: TransactionUpdateWithoutSenderInput;

    @Field(() => TransactionCreateWithoutSenderInput, {nullable:false})
    create!: TransactionCreateWithoutSenderInput;
}
