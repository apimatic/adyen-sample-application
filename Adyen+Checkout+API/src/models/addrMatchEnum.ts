/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AddrMatchEnum
 */
export enum AddrMatchEnum {
  Y = 'Y',
  N = 'N',
}

/**
 * Schema for AddrMatchEnum
 */
export const addrMatchEnumSchema: Schema<AddrMatchEnum> = stringEnum(AddrMatchEnum);