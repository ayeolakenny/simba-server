import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceUpdateManyMutationInput } from './balance-update-many-mutation.input';
import { BalanceWhereInput } from './balance-where.input';

@ArgsType()
export class UpdateManyBalanceArgs {

    @Field(() => BalanceUpdateManyMutationInput, {nullable:false})
    data!: BalanceUpdateManyMutationInput;

    @Field(() => BalanceWhereInput, {nullable:true})
    where?: BalanceWhereInput;
}
