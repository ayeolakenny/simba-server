import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutRecieverInput } from './transaction-create-without-reciever.input';
import { TransactionCreateOrConnectWithoutRecieverInput } from './transaction-create-or-connect-without-reciever.input';
import { TransactionCreateManyRecieverInputEnvelope } from './transaction-create-many-reciever-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutRecieverInput {

    @Field(() => [TransactionCreateWithoutRecieverInput], {nullable:true})
    create?: Array<TransactionCreateWithoutRecieverInput>;

    @Field(() => [TransactionCreateOrConnectWithoutRecieverInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutRecieverInput>;

    @Field(() => TransactionCreateManyRecieverInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyRecieverInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
