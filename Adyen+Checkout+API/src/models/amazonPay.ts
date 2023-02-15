/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type2Enum, type2EnumSchema } from './type2Enum';

export interface AmazonPay {
  /** This is the `amazonPayToken` that you obtained from the [Get Checkout Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session) response. */
  amazonPayToken?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** **amazonpay** */
  type?: Type2Enum;
}

export const amazonPaySchema: Schema<AmazonPay> = object({
  amazonPayToken: ['amazonPayToken', optional(string())],
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  type: ['type', optional(type2EnumSchema)],
});