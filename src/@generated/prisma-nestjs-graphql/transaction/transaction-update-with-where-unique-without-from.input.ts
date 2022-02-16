import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutFromInput } from './transaction-update-without-from.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutFromInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutFromInput, {nullable:false})
    data!: TransactionUpdateWithoutFromInput;
}
