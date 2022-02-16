import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BalanceScalarWhereInput } from './balance-scalar-where.input';
import { BalanceUpdateManyMutationInput } from './balance-update-many-mutation.input';

@InputType()
export class BalanceUpdateManyWithWhereWithoutUserInput {

    @Field(() => BalanceScalarWhereInput, {nullable:false})
    where!: BalanceScalarWhereInput;

    @Field(() => BalanceUpdateManyMutationInput, {nullable:false})
    data!: BalanceUpdateManyMutationInput;
}
