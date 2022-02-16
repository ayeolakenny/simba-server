import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceCreateInput } from './balance-create.input';

@ArgsType()
export class CreateOneBalanceArgs {

    @Field(() => BalanceCreateInput, {nullable:false})
    data!: BalanceCreateInput;
}
