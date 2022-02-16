import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutFromInput } from './transaction-create-without-from.input';
import { TransactionCreateOrConnectWithoutFromInput } from './transaction-create-or-connect-without-from.input';
import { TransactionUpsertWithWhereUniqueWithoutFromInput } from './transaction-upsert-with-where-unique-without-from.input';
import { TransactionCreateManyFromInputEnvelope } from './transaction-create-many-from-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutFromInput } from './transaction-update-with-where-unique-without-from.input';
import { TransactionUpdateManyWithWhereWithoutFromInput } from './transaction-update-many-with-where-without-from.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutFromInput {

    @Field(() => [TransactionCreateWithoutFromInput], {nullable:true})
    create?: Array<TransactionCreateWithoutFromInput>;

    @Field(() => [TransactionCreateOrConnectWithoutFromInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutFromInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutFromInput>;

    @Field(() => TransactionCreateManyFromInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyFromInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutFromInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutFromInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutFromInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutFromInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
