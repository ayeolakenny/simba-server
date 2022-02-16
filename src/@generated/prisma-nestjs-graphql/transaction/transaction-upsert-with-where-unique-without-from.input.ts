import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutFromInput } from './transaction-update-without-from.input';
import { TransactionCreateWithoutFromInput } from './transaction-create-without-from.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutFromInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutFromInput, {nullable:false})
    update!: TransactionUpdateWithoutFromInput;

    @Field(() => TransactionCreateWithoutFromInput, {nullable:false})
    create!: TransactionCreateWithoutFromInput;
}
