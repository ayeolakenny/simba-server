import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceCreateManyInput } from './balance-create-many.input';

@ArgsType()
export class CreateManyBalanceArgs {

    @Field(() => [BalanceCreateManyInput], {nullable:false})
    data!: Array<BalanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
