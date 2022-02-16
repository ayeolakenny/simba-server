import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BalanceWhereInput } from './balance-where.input';
import { BalanceOrderByWithRelationInput } from './balance-order-by-with-relation.input';
import { BalanceWhereUniqueInput } from './balance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BalanceScalarFieldEnum } from './balance-scalar-field.enum';

@ArgsType()
export class FindFirstBalanceArgs {

    @Field(() => BalanceWhereInput, {nullable:true})
    where?: BalanceWhereInput;

    @Field(() => [BalanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BalanceOrderByWithRelationInput>;

    @Field(() => BalanceWhereUniqueInput, {nullable:true})
    cursor?: BalanceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BalanceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BalanceScalarFieldEnum>;
}
