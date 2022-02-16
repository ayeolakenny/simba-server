import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutSenderInput } from './transaction-create-without-sender.input';
import { TransactionCreateOrConnectWithoutSenderInput } from './transaction-create-or-connect-without-sender.input';
import { TransactionCreateManySenderInputEnvelope } from './transaction-create-many-sender-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutSenderInput {

    @Field(() => [TransactionCreateWithoutSenderInput], {nullable:true})
    create?: Array<TransactionCreateWithoutSenderInput>;

    @Field(() => [TransactionCreateOrConnectWithoutSenderInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutSenderInput>;

    @Field(() => TransactionCreateManySenderInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManySenderInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
