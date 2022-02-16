import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutToInput } from './transaction-create-without-to.input';
import { TransactionCreateOrConnectWithoutToInput } from './transaction-create-or-connect-without-to.input';
import { TransactionCreateManyToInputEnvelope } from './transaction-create-many-to-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedManyWithoutToInput {

    @Field(() => [TransactionCreateWithoutToInput], {nullable:true})
    create?: Array<TransactionCreateWithoutToInput>;

    @Field(() => [TransactionCreateOrConnectWithoutToInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToInput>;

    @Field(() => TransactionCreateManyToInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyToInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
