import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutToInput } from './transaction-update-without-to.input';
import { TransactionCreateWithoutToInput } from './transaction-create-without-to.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutToInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutToInput, {nullable:false})
    update!: TransactionUpdateWithoutToInput;

    @Field(() => TransactionCreateWithoutToInput, {nullable:false})
    create!: TransactionCreateWithoutToInput;
}
