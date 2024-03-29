
# Create Checkout Session Request

## Structure

`CreateCheckoutSessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountInfo` | [`AccountInfo1 \| undefined`](../../doc/models/account-info-1.md) | Optional | Shopper account information for 3D Secure 2.<br><br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow. |
| `additionalAmount` | [`Amount1 \| undefined`](../../doc/models/amount-1.md) | Optional | If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"allowedPaymentMethods":["ideal","giropay"]` |
| `amount` | [`Amount19`](../../doc/models/amount-19.md) | Required | The amount of the payment. |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `authenticationData` | [`AuthenticationData1 \| undefined`](../../doc/models/authentication-data-1.md) | Optional | Configuration data for 3DS payments. |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"blockedPaymentMethods":["ideal","giropay"]` |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `channel` | [`ChannelEnum \| undefined`](../../doc/models/channel-enum.md) | Optional | The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br><br>* **iOS**<br>* **Android**<br>* **Web** |
| `company` | [`Company1 \| undefined`](../../doc/models/company-1.md) | Optional | Information regarding the company. |
| `countryCode` | `string \| undefined` | Optional | The shopper's two-letter country code. |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `deliverAt` | `string \| undefined` | Optional | The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `deliveryAddress` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | The address where the purchased goods should be delivered. |
| `enableOneClick` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments. |
| `enablePayOut` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be tokenized for payouts. |
| `enableRecurring` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments. |
| `expiresAt` | `string \| undefined` | Optional | The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation. |
| `fundOrigin` | [`FundOrigin1 \| undefined`](../../doc/models/fund-origin-1.md) | Optional | The person or entity funding the money. |
| `fundRecipient` | [`FundRecipient1 \| undefined`](../../doc/models/fund-recipient-1.md) | Optional | the person or entity receiving the money |
| `installmentOptions` | [`Record<string, CheckoutSessionInstallmentOption> \| undefined`](../../doc/models/checkout-session-installment-option.md) | Optional | A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br><br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Zip. |
| `mandate` | [`Mandate1 \| undefined`](../../doc/models/mandate-1.md) | Optional | The mandate details to initiate recurring transaction. |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br><br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br><br>* Maximum 20 key-value pairs per request.<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
| `mpiData` | [`ThreeDSecureData1 \| undefined`](../../doc/models/three-d-secure-data-1.md) | Optional | Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires). |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Only for 3D Secure 2. |
| `recurringFrequency` | `string \| undefined` | Optional | Minimum number of days between authorisations. Only for 3D Secure 2. |
| `recurringProcessingModel` | [`RecurringProcessingModel1Enum \| undefined`](../../doc/models/recurring-processing-model-1-enum.md) | Optional | Defines a recurring payment type. Required when creating a token to store payment details.<br>Allowed values:<br><br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount. |
| `redirectFromIssuerMethod` | `string \| undefined` | Optional | Specifies the redirect method (GET or POST) when redirecting back from the issuer. |
| `redirectToIssuerMethod` | `string \| undefined` | Optional | Specifies the redirect method (GET or POST) when redirecting to the issuer. |
| `reference` | `string` | Required | The reference to uniquely identify a payment. |
| `returnUrl` | `string` | Required | The URL to return to when a redirect payment is completed. |
| `riskData` | [`RiskData1 \| undefined`](../../doc/models/risk-data-1.md) | Optional | Any risk-related settings to apply to the payment. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. |
| `shopperIP` | `string \| undefined` | Optional | The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br><br>> For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations.<br>> This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `shopperInteraction` | [`ShopperInteractionEnum \| undefined`](../../doc/models/shopper-interaction-enum.md) | Optional | Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br><br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal. |
| `shopperLocale` | `string \| undefined` | Optional | The combination of a language code and a country code to specify the language to be used in the payment. |
| `shopperName` | [`Name3 \| undefined`](../../doc/models/name-3.md) | Optional | The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**. |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `splitCardFundingSources` | `boolean \| undefined` | Optional | Boolean value indicating whether the card payment method should be split into separate debit and credit options.<br>**Default**: `false` |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/manage-funds#split). |
| `store` | `string \| undefined` | Optional | The ecommerce or point-of-sale store that is processing the payment. |
| `storePaymentMethod` | `boolean \| undefined` | Optional | When this is set to **true** and the `shopperReference` is provided, the payment details will be stored. |
| `storePaymentMethodMode` | [`StorePaymentMethodModeEnum \| undefined`](../../doc/models/store-payment-method-mode-enum.md) | Optional | Indicates if the details of the payment method will be stored for the shopper. Possible values:<br><br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number. |
| `threeDSAuthenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br>**Default**: `false` |
| `trustedShopper` | `boolean \| undefined` | Optional | Set to true if the payment should be routed to a trusted MID. |

## Example (as JSON)

```json
{
  "accountInfo": null,
  "additionalAmount": null,
  "additionalData": null,
  "allowedPaymentMethods": null,
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "applicationInfo": null,
  "authenticationData": null,
  "billingAddress": null,
  "blockedPaymentMethods": null,
  "captureDelayHours": null,
  "channel": null,
  "company": null,
  "countryCode": null,
  "dateOfBirth": null,
  "deliverAt": null,
  "deliveryAddress": null,
  "enableOneClick": null,
  "enablePayOut": null,
  "enableRecurring": null,
  "expiresAt": null,
  "fundOrigin": null,
  "fundRecipient": null,
  "installmentOptions": null,
  "lineItems": null,
  "mandate": null,
  "mcc": null,
  "merchantAccount": "merchantAccount8",
  "merchantOrderReference": null,
  "metadata": null,
  "mpiData": null,
  "recurringExpiry": null,
  "recurringFrequency": null,
  "recurringProcessingModel": null,
  "redirectFromIssuerMethod": null,
  "redirectToIssuerMethod": null,
  "reference": "reference4",
  "returnUrl": "returnUrl2",
  "riskData": null,
  "shopperEmail": null,
  "shopperIP": null,
  "shopperInteraction": null,
  "shopperLocale": null,
  "shopperName": null,
  "shopperReference": null,
  "shopperStatement": null,
  "socialSecurityNumber": null,
  "splitCardFundingSources": null,
  "splits": null,
  "store": null,
  "storePaymentMethod": null,
  "storePaymentMethodMode": null,
  "telephoneNumber": null,
  "threeDSAuthenticationOnly": null,
  "trustedShopper": null
}
```

