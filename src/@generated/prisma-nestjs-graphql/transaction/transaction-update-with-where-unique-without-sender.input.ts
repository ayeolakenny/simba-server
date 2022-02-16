import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutSenderInput } from './transaction-update-without-sender.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutSenderInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutSenderInput, {nullable:false})
    data!: TransactionUpdateWithoutSenderInput;
}
