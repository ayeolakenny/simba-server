import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManySenderInput } from './transaction-create-many-sender.input';

@InputType()
export class TransactionCreateManySenderInputEnvelope {

    @Field(() => [TransactionCreateManySenderInput], {nullable:false})
    data!: Array<TransactionCreateManySenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
