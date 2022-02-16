import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceCreateManyUserInput } from './balance-create-many-user.input';

@InputType()
export class BalanceCreateManyUserInputEnvelope {

    @Field(() => [BalanceCreateManyUserInput], {nullable:false})
    data!: Array<BalanceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
