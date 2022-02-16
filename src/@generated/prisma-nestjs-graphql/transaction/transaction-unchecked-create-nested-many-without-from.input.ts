import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutFromInput } from './transaction-create-without-from.input';
import { TransactionCreateOrConnectWithoutFromInput } from './transaction-create-or-connect-without-from.input';
import { TransactionCreateManyFromInputEnvelope } from './transaction-create-many-from-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutFromInput {

    @Field(() => [TransactionCreateWithoutFromInput], {nullable:true})
    create?: Array<TransactionCreateWithoutFromInput>;

    @Field(() => [TransactionCreateOrConnectWithoutFromInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromInput>;

    @Field(() => TransactionCreateManyFromInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyFromInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
