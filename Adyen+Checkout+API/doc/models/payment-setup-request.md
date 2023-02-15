
# Payment Setup Request

## Structure

`PaymentSetupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"allowedPaymentMethods":["ideal","giropay"]` |
| `amount` | [`Amount2`](../../doc/models/amount-2.md) | Required | The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero). |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `billingAddress` | [`Address1 \| undefined`](../../doc/models/address-1.md) | Optional | The address where to send the invoice.<br><br>> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.<br>> <br>> * For 3D Secure 2 transactions in all browser-based and mobile implementations.<br>> * For cross-border payouts to and from Canada. |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"blockedPaymentMethods":["ideal","giropay"]` |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `channel` | [`Channel2Enum \| undefined`](../../doc/models/channel-2-enum.md) | Optional | The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.<br><br>Possible values:<br><br>* iOS<br>* Android<br>* Web |
| `checkoutAttemptId` | `string \| undefined` | Optional | Checkout attempt ID that corresponds to the Id generated for tracking user payment journey. |
| `company` | [`Company1 \| undefined`](../../doc/models/company-1.md) | Optional | Information regarding the company. |
| `configuration` | [`Configuration1 \| undefined`](../../doc/models/configuration-1.md) | Optional | Specify configurations to enable additional features. |
| `conversionId` | `string \| undefined` | Optional | Conversion ID that corresponds to the Id generated for tracking user payment journey. |
| `countryCode` | `string` | Required | The shopper country.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `dccQuote` | [`ForexQuote2 \| undefined`](../../doc/models/forex-quote-2.md) | Optional | The forex quote as returned in the response of the forex service. |
| `deliveryAddress` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | The address where the purchased goods should be delivered. |
| `deliveryDate` | `string \| undefined` | Optional | The date and time the purchased goods should be delivered.<br><br>Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD<br><br>Example: 2017-07-17T13:42:40.428+01:00 |
| `enableOneClick` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments. |
| `enablePayOut` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be tokenized for payouts. |
| `enableRecurring` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments. |
| `entityType` | [`EntityTypeEnum \| undefined`](../../doc/models/entity-type-enum.md) | Optional | The type of the entity the payment is processed for. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `installments` | [`Installments2 \| undefined`](../../doc/models/installments-2.md) | Optional | Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments). |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br><br>> This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome. |
| `localizedShopperStatement` | `Record<string, string> \| undefined` | Optional | This field allows merchants to use dynamic shopper statement in local character sets.<br>The local shopper statement field can be supplied in markets where localized merchant descriptors are used. Currently, Adyen only supports this in the Japanese market<br>.The available character sets at the moment are:<br><br>* Processing in Japan: **ja-Kana**<br>  The character set **ja-Kana** supports UTF-8 based Katakana and alphanumeric and special characters.<br>  Merchants should send the Katakana shopperStatement in full-width characters.<br>  An example request would be:<br><br>> {<br>> "shopperStatement" : "ADYEN - SELLER-A",<br>> "localizedShopperStatement" : {<br>> "ja-Kana" : "ADYEN - セラーA"<br>> }<br>> }<br>> We recommend merchants to always supply the field localizedShopperStatement in addition to the field shopperStatement.It is issuer dependent whether the localized shopper statement field is supported.<br>> In the case of non-domestic transactions (e.g. US-issued cards processed in JP) the field `shopperStatement` is used to modify the statement of the shopper.<br>> Adyen handles the complexity of ensuring the correct descriptors are assigned. |
| `mandate` | [`Mandate1 \| undefined`](../../doc/models/mandate-1.md) | Optional | The mandate details to initiate recurring transaction. |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.<br>The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.<br><br>> We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limits:<br><br>* Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".<br>* Maximum 20 characters per key.<br>* Maximum 80 characters per value. |
| `orderReference` | `string \| undefined` | Optional | When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead. |
| `origin` | `string \| undefined` | Optional | Required for the Web integration.<br><br>Set this parameter to the origin URL of the page that you are loading the SDK from. |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | Defines the behavior to be applied in case of a chargeback. |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Only for 3D Secure 2. |
| `recurringFrequency` | `string \| undefined` | Optional | Minimum number of days between authorisations. Only for 3D Secure 2. |
| `reference` | `string` | Required | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>Maximum length: 80 characters. |
| `returnUrl` | `string` | Required | The URL to return to in case of a redirection.<br>The format depends on the channel. This URL can have a maximum of 1024 characters.<br><br>* For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.<br>  Example: `https://your-company.com/checkout?shopperOrder=12xy`<br>* For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).<br>  Example: `my-app://`<br>* For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).<br>  Example: `my-app://your.package.name`<br>**Constraints**: *Maximum Length*: `8000` |
| `riskData` | [`RiskData3 \| undefined`](../../doc/models/risk-data-3.md) | Optional | Contains risk data, such as client-side data, used to identify risk for a transaction. |
| `sdkVersion` | `string \| undefined` | Optional | The version of the SDK you are using (for Web SDK integrations only). |
| `sessionValidity` | `string \| undefined` | Optional | The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.<br><br>For example: 2020-07-18T15:42:40.428+01:00 |
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
| `storePaymentMethod` | `boolean \| undefined` | Optional | When true and `shopperReference` is provided, the payment details will be stored. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number. |
| `threeDSAuthenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br>**Default**: `false` |
| `token` | `string \| undefined` | Optional | The token obtained when initializing the SDK.<br><br>> This parameter is required for iOS and Android; not required for Web. |
| `trustedShopper` | `boolean \| undefined` | Optional | Set to true if the payment should be routed to a trusted MID. |

## Example (as JSON)

```json
{
  "additionalData": null,
  "allowedPaymentMethods": null,
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "applicationInfo": null,
  "billingAddress": null,
  "blockedPaymentMethods": null,
  "captureDelayHours": null,
  "channel": null,
  "checkoutAttemptId": null,
  "company": null,
  "configuration": null,
  "conversionId": null,
  "countryCode": "countryCode4",
  "dateOfBirth": null,
  "dccQuote": null,
  "deliveryAddress": null,
  "deliveryDate": null,
  "enableOneClick": null,
  "enablePayOut": null,
  "enableRecurring": null,
  "entityType": null,
  "fraudOffset": null,
  "installments": null,
  "lineItems": null,
  "localizedShopperStatement": null,
  "mandate": null,
  "mcc": null,
  "merchantAccount": "merchantAccount8",
  "merchantOrderReference": null,
  "metadata": null,
  "orderReference": null,
  "origin": null,
  "platformChargebackLogic": null,
  "recurringExpiry": null,
  "recurringFrequency": null,
  "reference": "reference4",
  "returnUrl": "returnUrl2",
  "riskData": null,
  "sdkVersion": null,
  "sessionValidity": null,
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
  "storePaymentMethod": null,
  "telephoneNumber": null,
  "threeDSAuthenticationOnly": null,
  "token": null,
  "trustedShopper": null
}
```

