/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type10Enum
 */
export enum Type10Enum {
  BalanceAccount = 'BalanceAccount',
  Commission = 'Commission',
  Default = 'Default',
  MarketPlace = 'MarketPlace',
  PaymentFee = 'PaymentFee',
  Remainder = 'Remainder',
  Surcharge = 'Surcharge',
  Tip = 'Tip',
  VAT = 'VAT',
  Verification = 'Verification',
}

/**
 * Schema for Type10Enum
 */
export const type10EnumSchema: Schema<Type10Enum> = stringEnum(Type10Enum);