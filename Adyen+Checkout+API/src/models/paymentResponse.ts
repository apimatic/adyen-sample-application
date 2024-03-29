/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Amount26, amount26Schema } from './amount26';
import {
  CheckoutOrderResponse1,
  checkoutOrderResponse1Schema,
} from './checkoutOrderResponse1';
import { FraudResult1, fraudResult1Schema } from './fraudResult1';
import { PaymentResponse1, paymentResponse1Schema } from './paymentResponse1';
import { ResultCode1Enum, resultCode1EnumSchema } from './resultCode1Enum';
import {
  ThreeDS2ResponseData1,
  threeDS2ResponseData1Schema,
} from './threeDS2ResponseData1';
import { ThreeDS2Result1, threeDS2Result1Schema } from './threeDS2Result1';

export interface PaymentResponse {
  /** Action to be taken for completing the payment. */
  action?: unknown;
  /** Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. */
  additionalData?: Record<string, string>;
  /** Authorised amount in the transaction. */
  amount?: Amount26;
  /** Donation Token containing payment details for Adyen Giving. */
  donationToken?: string;
  /** The fraud result properties of the payment. */
  fraudResult?: FraudResult1;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
   * Maximum length: 80 characters.
   */
  merchantReference?: string;
  /** Contains updated information regarding the order in case order information was provided in the request. */
  order?: CheckoutOrderResponse1;
  /**
   * Details about the payment method used in the transaction.
   * Only returned if `resultCode` is **Authorised**.
   */
  paymentMethod?: PaymentResponse1;
  /**
   * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
   * > For payment methods that require a redirect or additional action, you will get this value in the `/payments/details` response.
   */
  pspReference?: string;
  /**
   * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
   * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReason?: string;
  /** Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). */
  refusalReasonCode?: string;
  /**
   * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).
   * Possible values:
   * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
   * * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
   * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
   * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
   * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
   * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
   * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.
   * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
   * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
   * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
   * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
   */
  resultCode?: ResultCode1Enum;
  /** Response of the 3D Secure 2 authentication. */
  threeDS2ResponseData?: ThreeDS2ResponseData1;
  /** Result of the 3D Secure 2 authentication. */
  threeDS2Result?: ThreeDS2Result1;
  /** When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`. */
  threeDSPaymentData?: string;
}

export const paymentResponseSchema: Schema<PaymentResponse> = object({
  action: ['action', optional(unknown())],
  additionalData: ['additionalData', optional(dict(string()))],
  amount: ['amount', optional(lazy(() => amount26Schema))],
  donationToken: ['donationToken', optional(string())],
  fraudResult: ['fraudResult', optional(lazy(() => fraudResult1Schema))],
  merchantReference: ['merchantReference', optional(string())],
  order: ['order', optional(lazy(() => checkoutOrderResponse1Schema))],
  paymentMethod: [
    'paymentMethod',
    optional(lazy(() => paymentResponse1Schema)),
  ],
  pspReference: ['pspReference', optional(string())],
  refusalReason: ['refusalReason', optional(string())],
  refusalReasonCode: ['refusalReasonCode', optional(string())],
  resultCode: ['resultCode', optional(resultCode1EnumSchema)],
  threeDS2ResponseData: [
    'threeDS2ResponseData',
    optional(lazy(() => threeDS2ResponseData1Schema)),
  ],
  threeDS2Result: [
    'threeDS2Result',
    optional(lazy(() => threeDS2Result1Schema)),
  ],
  threeDSPaymentData: ['threeDSPaymentData', optional(string())],
});
