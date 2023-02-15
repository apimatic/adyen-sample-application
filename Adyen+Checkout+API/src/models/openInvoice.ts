/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type25Enum, type25EnumSchema } from './type25Enum';

export interface OpenInvoice {
  /** The address where to send the invoice. */
  billingAddress?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The address where the goods should be delivered. */
  deliveryAddress?: string;
  /** Shopper name, date of birth, phone number, and email address. */
  personalDetails?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **openinvoice** */
  type?: Type25Enum;
}

export const openInvoiceSchema: Schema<OpenInvoice> = object({
  billingAddress: ['billingAddress', optional(string())],
  checkoutAttemptId: ['checkoutAttemptId', optional(string())],
  deliveryAddress: ['deliveryAddress', optional(string())],
  personalDetails: ['personalDetails', optional(string())],
  recurringDetailReference: ['recurringDetailReference', optional(string())],
  storedPaymentMethodId: ['storedPaymentMethodId', optional(string())],
  type: ['type', optional(type25EnumSchema)],
});