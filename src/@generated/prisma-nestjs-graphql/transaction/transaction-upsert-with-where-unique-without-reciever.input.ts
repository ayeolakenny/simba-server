import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutRecieverInput } from './transaction-update-without-reciever.input';
import { TransactionCreateWithoutRecieverInput } from './transaction-create-without-reciever.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutRecieverInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutRecieverInput, {nullable:false})
    update!: TransactionUpdateWithoutRecieverInput;

    @Field(() => TransactionCreateWithoutRecieverInput, {nullable:false})
    create!: TransactionCreateWithoutRecieverInput;
}
