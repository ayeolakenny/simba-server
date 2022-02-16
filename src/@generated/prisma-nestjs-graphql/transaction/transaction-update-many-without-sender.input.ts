import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutSenderInput } from './transaction-create-without-sender.input';
import { TransactionCreateOrConnectWithoutSenderInput } from './transaction-create-or-connect-without-sender.input';
import { TransactionUpsertWithWhereUniqueWithoutSenderInput } from './transaction-upsert-with-where-unique-without-sender.input';
import { TransactionCreateManySenderInputEnvelope } from './transaction-create-many-sender-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutSenderInput } from './transaction-update-with-where-unique-without-sender.input';
import { TransactionUpdateManyWithWhereWithoutSenderInput } from './transaction-update-many-with-where-without-sender.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutSenderInput {

    @Field(() => [TransactionCreateWithoutSenderInput], {nullable:true})
    create?: Array<TransactionCreateWithoutSenderInput>;

    @Field(() => [TransactionCreateOrConnectWithoutSenderInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutSenderInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutSenderInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutSenderInput>;

    @Field(() => TransactionCreateManySenderInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManySenderInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutSenderInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutSenderInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutSenderInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutSenderInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
