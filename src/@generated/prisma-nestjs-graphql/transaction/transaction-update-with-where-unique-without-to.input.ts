import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutToInput } from './transaction-update-without-to.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutToInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutToInput, {nullable:false})
    data!: TransactionUpdateWithoutToInput;
}
