import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUpdateManyWithoutToInput } from '../transaction/transaction-update-many-without-to.input';
import { TransactionUpdateManyWithoutFromInput } from '../transaction/transaction-update-many-without-from.input';

@InputType()
export class UserUpdateWithoutAvailableBalanceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUpdateManyWithoutToInput, {nullable:true})
    transactionsTo?: TransactionUpdateManyWithoutToInput;

    @Field(() => TransactionUpdateManyWithoutFromInput, {nullable:true})
    transactionsFrom?: TransactionUpdateManyWithoutFromInput;
}
