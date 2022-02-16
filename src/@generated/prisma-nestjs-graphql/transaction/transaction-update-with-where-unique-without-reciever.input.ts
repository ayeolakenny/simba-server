import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutRecieverInput } from './transaction-update-without-reciever.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutRecieverInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutRecieverInput, {nullable:false})
    data!: TransactionUpdateWithoutRecieverInput;
}
