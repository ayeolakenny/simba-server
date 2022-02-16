import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    reciever?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    recieverId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    sender?: UserRelationFilter;

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
