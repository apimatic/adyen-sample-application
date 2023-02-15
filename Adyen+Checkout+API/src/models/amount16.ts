/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema, string } from '../schema';

/** The surcharge amount. */
export interface Amount16 {
  /** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). */
  currency: string;
  /** The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). */
  value: bigint;
}

export const amount16Schema: Schema<Amount16> = object({
  currency: ['currency', string()],
  value: ['value', bigint()],
});