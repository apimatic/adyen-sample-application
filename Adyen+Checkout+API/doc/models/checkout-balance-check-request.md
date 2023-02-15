
# Checkout Balance Check Request

## Structure

`CheckoutBalanceCheckRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountInfo` | [`AccountInfo1 \| undefined`](../../doc/models/account-info-1.md) | Optional | Shopper account information for 3D Secure 2.<br><br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow. |
| `additionalAmount` | [`Amount1 \| undefined`](../../doc/models/amount-1.md) | Optional | If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).<br>Required to be in the same currency as the `amount`. |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `amount` | [`Amount2`](../../doc/models/amount-2.md) | Required | The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero). |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `billingAddress` | [`Address1 \| undefined`](../../doc/models/address-1.md) | Optional | The address where to send the invoice.<br><br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>> <br>> * For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>> * For cross-border payouts to and from Canada. |
| `browserInfo` | [`BrowserInfo1 \| undefined`](../../doc/models/browser-info-1.md) | Optional | The shopper's browser information.<br><br>> For 3D Secure, the full object is required for web integrations. For mobile app integrations, include the `userAgent` and `acceptHeader` fields to indicate  that your integration can support a redirect in case a payment is routed to 3D Secure 1. |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `dccQuote` | [`ForexQuote2 \| undefined`](../../doc/models/forex-quote-2.md) | Optional | The forex quote as returned in the response of the forex service. |
| `deliveryAddress` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | The address where the purchased goods should be delivered. |
| `deliveryDate` | `string \| undefined` | Optional | The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00 |
| `deviceFingerprint` | `string \| undefined` | Optional | A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).<br>**Constraints**: *Maximum Length*: `5000` |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `installments` | [`Installments2 \| undefined`](../../doc/models/installments-2.md) | Optional | Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments). |
| `localizedShopperStatement` | `Record<string, string> \| undefined` | Optional | This field allows merchants to use dynamic shopper statement in local character sets.<br>The local shopper statement field can be supplied in markets where localized merchant descriptors are used. Currently, Adyen only supports this in the Japanese market<br>.The available character sets at the moment are:<br><br>* Processing in Japan: **ja-Kana**<br>  The character set **ja-Kana** supports UTF-8 based Katakana and alphanumeric and special characters.<br>  Merchants should send the Katakana shopperStatement in full-width characters.<br>  An example request would be:<br><br>> {<br>> "shopperStatement" : "ADYEN - SELLER-A",<br>> "localizedShopperStatement" : {<br>> "ja-Kana" : "ADYEN - セラーA"<br>> }<br>> }<br>> We recommend merchants to always supply the field localizedShopperStatement in addition to the field shopperStatement.It is issuer dependent whether the localized shopper statement field is supported.<br>> In the case of non-domestic transactions (e.g. US-issued cards processed in JP) the field `shopperStatement` is used to modify the statement of the shopper.<br>> Adyen handles the complexity of ensuring the correct descriptors are assigned. |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br><br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`. |
| `merchantRiskIndicator` | [`MerchantRiskIndicator2 \| undefined`](../../doc/models/merchant-risk-indicator-2.md) | Optional | Additional risk fields for 3D Secure 2.<br><br>> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br><br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
| `orderReference` | `string \| undefined` | Optional | When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. |
| `paymentMethod` | `Record<string, string>` | Required | The collection that contains the type of the payment method and its specific information. |
| `recurring` | [`Recurring2 \| undefined`](../../doc/models/recurring-2.md) | Optional | The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments). |
| `recurringProcessingModel` | [`RecurringProcessingModelEnum \| undefined`](../../doc/models/recurring-processing-model-enum.md) | Optional | Defines a recurring payment type.<br>Allowed values:<br><br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount. |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `selectedBrand` | `string \| undefined` | Optional | Some payment methods require defining a value for this field to specify how to process the transaction.<br><br>For the Bancontact payment method, it can be set to:<br><br>* `maestro` (default), to be processed like a Maestro card, or<br>* `bcmc`, to be processed like a Bancontact card. |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `sessionId` | `string \| undefined` | Optional | A session ID used to identify a payment session. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.<br><br>> For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations. |
| `shopperIP` | `string \| undefined` | Optional | The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).<br><br>> For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations.<br>> This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new). |
| `shopperInteraction` | [`ShopperInteractionEnum \| undefined`](../../doc/models/shopper-interaction-enum.md) | Optional | Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br><br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal. |
| `shopperLocale` | `string \| undefined` | Optional | The combination of a language code and a country code to specify the language to be used in the payment. |
| `shopperName` | [`Name7 \| undefined`](../../doc/models/name-7.md) | Optional | The shopper's full name. |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**. |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/add-manage-funds#split). |
| `store` | `string \| undefined` | Optional | The ecommerce or point-of-sale store that is processing the payment. Used in [partner model integrations](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#route-payments) for Adyen for Platforms.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number. |
| `threeDS2RequestData` | [`ThreeDS2RequestData1 \| undefined`](../../doc/models/three-ds2-request-data-1.md) | Optional | Request fields for 3D Secure 2. To check if any of the following fields are required for your integration, refer to [Online payments](https://docs.adyen.com/online-payments) or [Classic integration](https://docs.adyen.com/classic-integration) documentation. |
| `threeDSAuthenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br>**Default**: `false` |
| `totalsGroup` | `string \| undefined` | Optional | The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `trustedShopper` | `boolean \| undefined` | Optional | Set to true if the payment should be routed to a trusted MID. |

## Example (as JSON)

```json
{
  "accountInfo": null,
  "additionalAmount": null,
  "additionalData": null,
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "applicationInfo": null,
  "billingAddress": null,
  "browserInfo": null,
  "captureDelayHours": null,
  "dateOfBirth": null,
  "dccQuote": null,
  "deliveryAddress": null,
  "deliveryDate": null,
  "deviceFingerprint": null,
  "fraudOffset": null,
  "installments": null,
  "localizedShopperStatement": null,
  "mcc": null,
  "merchantAccount": "merchantAccount8",
  "merchantOrderReference": null,
  "merchantRiskIndicator": null,
  "metadata": null,
  "orderReference": null,
  "paymentMethod": {
    "key0": "paymentMethod6"
  },
  "recurring": null,
  "recurringProcessingModel": null,
  "reference": "reference4",
  "selectedBrand": null,
  "selectedRecurringDetailReference": null,
  "sessionId": null,
  "shopperEmail": null,
  "shopperIP": null,
  "shopperInteraction": null,
  "shopperLocale": null,
  "shopperName": null,
  "shopperReference": null,
  "shopperStatement": null,
  "socialSecurityNumber": null,
  "splits": null,
  "store": null,
  "telephoneNumber": null,
  "threeDS2RequestData": null,
  "threeDSAuthenticationOnly": null,
  "totalsGroup": null,
  "trustedShopper": null
}
```

