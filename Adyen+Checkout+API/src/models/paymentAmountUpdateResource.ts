/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Amount28, amount28Schema } from './amount28';
import {
  IndustryUsage1Enum,
  industryUsage1EnumSchema,
} from './industryUsage1Enum';
import { Split, splitSchema } from './split';

export interface PaymentAmountUpdateResource {
  /** The updated amount. */
  amount: Amount28;
  /**
   * The reason for the amount update. Possible values:
   * * **delayedCharge**
   * * **noShow**
   * * **installment**
   */
  industryUsage?: IndustryUsage1Enum;
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /** The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to update. */
  paymentPspReference: string;
  /** Adyen's 16-character reference associated with the amount update request. */
  pspReference: string;
  /** Your reference for the amount update request. Maximum length: 80 characters. */
  reference: string;
  /** An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). */
  splits?: Split[];
  /** The status of your request. This will always have the value **received**. */
  status: string;
}

export const paymentAmountUpdateResourceSchema: Schema<PaymentAmountUpdateResource> = object(
  {
    amount: ['amount', lazy(() => amount28Schema)],
    industryUsage: ['industryUsage', optional(industryUsage1EnumSchema)],
    merchantAccount: ['merchantAccount', string()],
    paymentPspReference: ['paymentPspReference', string()],
    pspReference: ['pspReference', string()],
    reference: ['reference', string()],
    splits: ['splits', optional(array(lazy(() => splitSchema)))],
    status: ['status', string()],
  }
);