import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    recieverId = "recieverId",
    senderId = "senderId",
    amount = "amount",
    sourceCurrency = "sourceCurrency",
    targetCurrency = "targetCurrency",
    exchangeRate = "exchangeRate",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
