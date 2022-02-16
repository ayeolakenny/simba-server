import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutToInput } from '../transaction/transaction-unchecked-update-many-without-to.input';
import { TransactionUncheckedUpdateManyWithoutFromInput } from '../transaction/transaction-unchecked-update-many-without-from.input';

@InputType()
export class UserUncheckedUpdateWithoutAvailableBalanceInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => TransactionUncheckedUpdateManyWithoutToInput, {nullable:true})
    transactionsTo?: TransactionUncheckedUpdateManyWithoutToInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutFromInput, {nullable:true})
    transactionsFrom?: TransactionUncheckedUpdateManyWithoutFromInput;
}
