import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereInput } from './balance-where.input';

@ArgsType()
export class DeleteManyBalanceArgs {

    @Field(() => BalanceWhereInput, {nullable:true})
    where?: BalanceWhereInput;
}
