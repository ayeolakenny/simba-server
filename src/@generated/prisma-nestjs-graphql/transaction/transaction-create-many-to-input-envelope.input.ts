import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyToInput } from './transaction-create-many-to.input';

@InputType()
export class TransactionCreateManyToInputEnvelope {

    @Field(() => [TransactionCreateManyToInput], {nullable:false})
    data!: Array<TransactionCreateManyToInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
