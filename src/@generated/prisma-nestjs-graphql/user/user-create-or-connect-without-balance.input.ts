import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutBalanceInput } from './user-create-without-balance.input';

@InputType()
export class UserCreateOrConnectWithoutBalanceInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutBalanceInput, {nullable:false})
    create!: UserCreateWithoutBalanceInput;
}
