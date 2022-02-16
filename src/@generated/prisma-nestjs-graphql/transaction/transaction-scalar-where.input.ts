import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TransactionScalarWhereInput {

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    AND?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    OR?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    recieverId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    senderId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceCurrency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    targetCurrency?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    exchangeRate?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    status?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
