import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyRecieverInput } from './transaction-create-many-reciever.input';

@InputType()
export class TransactionCreateManyRecieverInputEnvelope {

    @Field(() => [TransactionCreateManyRecieverInput], {nullable:false})
    data!: Array<TransactionCreateManyRecieverInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
