/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address2, address2Schema } from './address2';
import { Address3, address3Schema } from './address3';
import { Amount24, amount24Schema } from './amount24';
import {
  InstallmentOption,
  installmentOptionSchema,
} from './installmentOption';
import { LineItem, lineItemSchema } from './lineItem';
import { Name3, name3Schema } from './name3';
import {
  RecurringProcessingModel3Enum,
  recurringProcessingModel3EnumSchema,
} from './recurringProcessingModel3Enum';
import {
  RequiredShopperFieldEnum,
  requiredShopperFieldEnumSchema,
} from './requiredShopperFieldEnum';
import { RiskData1, riskData1Schema } from './riskData1';
import { Split, splitSchema } from './split';
import { Status1Enum, status1EnumSchema } from './status1Enum';
import {
  StorePaymentMethodModeEnum,
  storePaymentMethodModeEnumSchema,
} from './storePaymentMethodModeEnum';

export interface PaymentLinkResponse {
  /**
   * List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
   * Example: `"allowedPaymentMethods":["ideal","giropay"]`
   */
  allowedPaymentMethods?: string[];
  /** The payment amount and currency. */
  amount: Amount24;
  /** The address where to send the invoice. */
  billingAddress?: Address3;
  /**
   * List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
   * Example: `"blockedPaymentMethods":["ideal","giropay"]`
   */
  blockedPaymentMethods?: string[];
  /** The delay between the authorisation and scheduled auto-capture, specified in hours. */
  captureDelayHours?: number;
  /** The shopper's two-letter country code. */
  countryCode?: string;
  /**
   * The shopper's date of birth.
   * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
   */
  dateOfBirth?: string;
  /**
   * The date and time when the purchased goods should be delivered.
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
   */
  deliverAt?: string;
  /** The address where the purchased goods should be delivered. */
  deliveryAddress?: Address2;
  /**
   * A short description visible on the payment page.
   * Maximum length: 280 characters.
   */
  description?: string;
  /**
   * The date when the payment link expires.
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
   * The maximum expiry date is 70 days after the payment link is created.
   * If not provided, the payment link expires 24 hours after it was created.
   */
  expiresAt?: string;
  /** A unique identifier of the payment link. */
  id: string;
  /** A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options. */
  installmentOptions?: Record<string, InstallmentOption>;
  /**
   * Price and product information about the purchased items, to be included on the invoice sent to the shopper.
   * This parameter is required for open invoice (_buy now, pay later_) payment methods such Afterpay, Clearpay, Klarna, RatePay, and Zip.
   */
  lineItems?: LineItem[];
  /** Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture). */
  manualCapture?: boolean;
  /** The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. */
  mcc?: string;
  /** The merchant account identifier for which the payment link is created. */
  merchantAccount: string;
  /** This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle. */
  merchantOrderReference?: string;
  /**
   * Metadata consists of entries, each of which includes a key and a value.
   * Limitations:
   * * Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"
   * * Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"
   * * A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID.
   */
  metadata?: Record<string, string>;
  /**
   * Defines a recurring payment type. Required when creating a token to store payment details.
   * Possible values:
   * * **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.
   * * **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel?: RecurringProcessingModel3Enum;
  /** A reference that is used to uniquely identify the payment in future communications about the payment status. */
  reference: string;
  /**
   * List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).
   * Possible values:
   * * **billingAddress** – The address where to send the invoice.
   * * **deliveryAddress** – The address where the purchased goods should be delivered.
   * * **shopperEmail** – The shopper's email address.
   * * **shopperName** – The shopper's full name.
   * * **telephoneNumber** – The shopper's phone number.
   */
  requiredShopperFields?: RequiredShopperFieldEnum[];
  /**
   * Website URL used for redirection after payment is completed.
   * If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.
   */
  returnUrl?: string;
  /** Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only. */
  reusable?: boolean;
  /** Any risk-related settings to apply to the payment. */
  riskData?: RiskData1;
  /** The shopper's email address. */
  shopperEmail?: string;
  /**
   * The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.
   * For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/online-payments/pay-by-link#language-and-localization).
   */
  shopperLocale?: string;
  /** The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program. */
  shopperName?: Name3;
  /**
   * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.
   * > Your reference must not include personally identifiable information (PII), for example name or email address.
   */
  shopperReference?: string;
  /**
   * The text to be shown on the shopper's bank statement.
   *  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.
   *  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.
   */
  shopperStatement?: string;
  /** Set to **false** to hide the button that lets the shopper remove a stored payment method. */
  showRemovePaymentMethodButton?: boolean;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
  /** Boolean value indicating whether the card payment method should be split into separate debit and credit options. */
  splitCardFundingSources?: boolean;
  /** An array of objects specifying how the payment should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). */
  splits?: Split[];
  /**
   * Status of the payment link. Possible values:
   * * **active**: The link can be used to make payments.
   * * **expired**: The expiry date for the payment link has passed. Shoppers can no longer use the link to make payments.
   * * **completed**: The shopper completed the payment.
   * * **paymentPending**: The shopper is in the process of making the payment. Applies to payment methods with an asynchronous flow.
   */
  status: Status1Enum;
  /** The physical store, for which this payment is processed. */
  store?: string;
  /**
   * Indicates if the details of the payment method will be stored for the shopper. Possible values:
   * * **disabled** – No details will be stored (default).
   * * **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored.
   * * **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.
   */
  storePaymentMethodMode?: StorePaymentMethodModeEnum;
  /** The shopper's telephone number. */
  telephoneNumber?: string;
  /** A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area. */
  themeId?: string;
  /**
   * The date when the payment link status was updated.
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
   */
  updatedAt?: string;
  /** The URL at which the shopper can complete the payment. */
  url: string;
}

export const paymentLinkResponseSchema: Schema<PaymentLinkResponse> = object({
  allowedPaymentMethods: ['allowedPaymentMethods', optional(array(string()))],
  amount: ['amount', lazy(() => amount24Schema)],
  billingAddress: ['billingAddress', optional(lazy(() => address3Schema))],
  blockedPaymentMethods: ['blockedPaymentMethods', optional(array(string()))],
  captureDelayHours: ['captureDelayHours', optional(number())],
  countryCode: ['countryCode', optional(string())],
  dateOfBirth: ['dateOfBirth', optional(string())],
  deliverAt: ['deliverAt', optional(string())],
  deliveryAddress: ['deliveryAddress', optional(lazy(() => address2Schema))],
  description: ['description', optional(string())],
  expiresAt: ['expiresAt', optional(string())],
  id: ['id', string()],
  installmentOptions: [
    'installmentOptions',
    optional(dict(lazy(() => installmentOptionSchema))),
  ],
  lineItems: ['lineItems', optional(array(lazy(() => lineItemSchema)))],
  manualCapture: ['manualCapture', optional(boolean())],
  mcc: ['mcc', optional(string())],
  merchantAccount: ['merchantAccount', string()],
  merchantOrderReference: ['merchantOrderReference', optional(string())],
  metadata: ['metadata', optional(dict(string()))],
  recurringProcessingModel: [
    'recurringProcessingModel',
    optional(recurringProcessingModel3EnumSchema),
  ],
  reference: ['reference', string()],
  requiredShopperFields: [
    'requiredShopperFields',
    optional(array(requiredShopperFieldEnumSchema)),
  ],
  returnUrl: ['returnUrl', optional(string())],
  reusable: ['reusable', optional(boolean())],
  riskData: ['riskData', optional(lazy(() => riskData1Schema))],
  shopperEmail: ['shopperEmail', optional(string())],
  shopperLocale: ['shopperLocale', optional(string())],
  shopperName: ['shopperName', optional(lazy(() => name3Schema))],
  shopperReference: ['shopperReference', optional(string())],
  shopperStatement: ['shopperStatement', optional(string())],
  showRemovePaymentMethodButton: [
    'showRemovePaymentMethodButton',
    optional(boolean()),
  ],
  socialSecurityNumber: ['socialSecurityNumber', optional(string())],
  splitCardFundingSources: ['splitCardFundingSources', optional(boolean())],
  splits: ['splits', optional(array(lazy(() => splitSchema)))],
  status: ['status', status1EnumSchema],
  store: ['store', optional(string())],
  storePaymentMethodMode: [
    'storePaymentMethodMode',
    optional(storePaymentMethodModeEnumSchema),
  ],
  telephoneNumber: ['telephoneNumber', optional(string())],
  themeId: ['themeId', optional(string())],
  updatedAt: ['updatedAt', optional(string())],
  url: ['url', string()],
});
