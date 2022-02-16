import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutRecieverInput } from './transaction-create-without-reciever.input';
import { TransactionCreateOrConnectWithoutRecieverInput } from './transaction-create-or-connect-without-reciever.input';
import { TransactionUpsertWithWhereUniqueWithoutRecieverInput } from './transaction-upsert-with-where-unique-without-reciever.input';
import { TransactionCreateManyRecieverInputEnvelope } from './transaction-create-many-reciever-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutRecieverInput } from './transaction-update-with-where-unique-without-reciever.input';
import { TransactionUpdateManyWithWhereWithoutRecieverInput } from './transaction-update-many-with-where-without-reciever.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutRecieverInput {

    @Field(() => [TransactionCreateWithoutRecieverInput], {nullable:true})
    create?: Array<TransactionCreateWithoutRecieverInput>;

    @Field(() => [TransactionCreateOrConnectWithoutRecieverInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutRecieverInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutRecieverInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutRecieverInput>;

    @Field(() => TransactionCreateManyRecieverInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyRecieverInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutRecieverInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutRecieverInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutRecieverInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutRecieverInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
