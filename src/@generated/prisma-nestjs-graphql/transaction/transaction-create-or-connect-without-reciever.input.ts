import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutRecieverInput } from './transaction-create-without-reciever.input';

@InputType()
export class TransactionCreateOrConnectWithoutRecieverInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutRecieverInput, {nullable:false})
    create!: TransactionCreateWithoutRecieverInput;
}
