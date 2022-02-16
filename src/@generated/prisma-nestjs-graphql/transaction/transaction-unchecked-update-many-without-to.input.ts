import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutToInput } from './transaction-create-without-to.input';
import { TransactionCreateOrConnectWithoutToInput } from './transaction-create-or-connect-without-to.input';
import { TransactionUpsertWithWhereUniqueWithoutToInput } from './transaction-upsert-with-where-unique-without-to.input';
import { TransactionCreateManyToInputEnvelope } from './transaction-create-many-to-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutToInput } from './transaction-update-with-where-unique-without-to.input';
import { TransactionUpdateManyWithWhereWithoutToInput } from './transaction-update-many-with-where-without-to.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutToInput {

    @Field(() => [TransactionCreateWithoutToInput], {nullable:true})
    create?: Array<TransactionCreateWithoutToInput>;

    @Field(() => [TransactionCreateOrConnectWithoutToInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutToInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutToInput>;

    @Field(() => TransactionCreateManyToInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyToInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutToInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutToInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutToInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutToInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
