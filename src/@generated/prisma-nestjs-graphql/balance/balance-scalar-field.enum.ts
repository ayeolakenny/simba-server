import { registerEnumType } from '@nestjs/graphql';

export enum BalanceScalarFieldEnum {
    id = "id",
    userId = "userId",
    amount = "amount",
    currency = "currency",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BalanceScalarFieldEnum, { name: 'BalanceScalarFieldEnum', description: undefined })
