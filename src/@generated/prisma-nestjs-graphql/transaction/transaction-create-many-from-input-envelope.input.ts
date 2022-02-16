import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyFromInput } from './transaction-create-many-from.input';

@InputType()
export class TransactionCreateManyFromInputEnvelope {

    @Field(() => [TransactionCreateManyFromInput], {nullable:false})
    data!: Array<TransactionCreateManyFromInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
