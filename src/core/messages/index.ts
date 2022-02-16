export enum ERROR_FIELD {
  EMAIL = 'email',
  NAME = 'name',
  PASSWORD = 'password',
}

const AUTH = {
  EMAIL_CONFLICT: 'email address is already registered',
  SHORT_PASSWORD: 'password must be greater than 6 letters',
  INVALID_CREDENTIALS: 'invalid credentials',
};

const USER = {
  SHORT_NAME: 'must be greater than 2',
};

const TRANSACTION = {
  INSUFFICIENT_FUND: 'insufficient fund',
};

export const MESSAGES = { AUTH, USER, TRANSACTION };
