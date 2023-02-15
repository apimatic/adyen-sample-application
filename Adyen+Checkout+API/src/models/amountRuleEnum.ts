/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AmountRuleEnum
 */
export enum AmountRuleEnum {
  Max = 'max',
  Exact = 'exact',
}

/**
 * Schema for AmountRuleEnum
 */
export const amountRuleEnumSchema: Schema<AmountRuleEnum> = stringEnum(AmountRuleEnum);