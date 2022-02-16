import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAvailableBalanceInput } from './user-create-without-available-balance.input';

@InputType()
export class UserCreateOrConnectWithoutAvailableBalanceInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAvailableBalanceInput, {nullable:false})
    create!: UserCreateWithoutAvailableBalanceInput;
}
