
# Create Payment Link Request

## Structure

`CreatePaymentLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"allowedPaymentMethods":["ideal","giropay"]` |
| `amount` | [`Amount24`](../../doc/models/amount-24.md) | Required | The payment amount and currency. |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"blockedPaymentMethods":["ideal","giropay"]` |
| `captureDelayHours` | `number \| undefined` | Optional | The delay between the authorisation and scheduled auto-capture, specified in hours. |
| `countryCode` | `string \| undefined` | Optional | The shopper's two-letter country code. |
| `dateOfBirth` | `string \| undefined` | Optional | The shopper's date of birth.<br><br>Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD |
| `deliverAt` | `string \| undefined` | Optional | The date and time when the purchased goods should be delivered.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**. |
| `deliveryAddress` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | The address where the purchased goods should be delivered. |
| `description` | `string \| undefined` | Optional | A short description visible on the payment page.<br>Maximum length: 280 characters. |
| `expiresAt` | `string \| undefined` | Optional | The date when the payment link expires.<br><br>[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.<br><br>The maximum expiry date is 70 days after the payment link is created.<br><br>If not provided, the payment link expires 24 hours after it was created. |
| `installmentOptions` | [`Record<string, InstallmentOption> \| undefined`](../../doc/models/installment-option.md) | Optional | A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information about the purchased items, to be included on the invoice sent to the shopper.<br>This parameter is required for open invoice (_buy now, pay later_) payment methods such Afterpay, Clearpay, Klarna, RatePay, and Zip. |
| `manualCapture` | `boolean \| undefined` | Optional | Indicates if the payment must be [captured manually](https://docs.adyen.com/online-payments/capture). |
| `mcc` | `string \| undefined` | Optional | The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant. |
| `merchantAccount` | `string` | Required | The merchant account identifier for which the payment link is created. |
| `merchantOrderReference` | `string \| undefined` | Optional | This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata consists of entries, each of which includes a key and a value.<br>Limitations:<br><br>* Maximum 20 key-value pairs per request. Otherwise, error "177" occurs: "Metadata size exceeds limit"<br>* Maximum 20 characters per key. Otherwise, error "178" occurs: "Metadata key size exceeds limit"<br>* A key cannot have the name `checkout.linkId`. Any value that you provide with this key is going to be replaced by the real payment link ID. |
| `recurringProcessingModel` | [`RecurringProcessingModel3Enum \| undefined`](../../doc/models/recurring-processing-model-3-enum.md) | Optional | Defines a recurring payment type. Required when creating a token to store payment details.<br>Possible values:<br><br>* **Subscription** – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* **CardOnFile** – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* **UnscheduledCardOnFile** – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount. |
| `reference` | `string` | Required | A reference that is used to uniquely identify the payment in future communications about the payment status. |
| `requiredShopperFields` | [`RequiredShopperFieldEnum[] \| undefined`](../../doc/models/required-shopper-field-enum.md) | Optional | List of fields that the shopper has to provide on the payment page before completing the payment. For more information, refer to [Provide shopper information](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#shopper-information).<br><br>Possible values:<br><br>* **billingAddress** – The address where to send the invoice.<br>* **deliveryAddress** – The address where the purchased goods should be delivered.<br>* **shopperEmail** – The shopper's email address.<br>* **shopperName** – The shopper's full name.<br>* **telephoneNumber** – The shopper's phone number. |
| `returnUrl` | `string \| undefined` | Optional | Website URL used for redirection after payment is completed.<br>If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL. |
| `reusable` | `boolean \| undefined` | Optional | Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only. |
| `riskData` | [`RiskData1 \| undefined`](../../doc/models/risk-data-1.md) | Optional | Any risk-related settings to apply to the payment. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper's email address. |
| `shopperLocale` | `string \| undefined` | Optional | The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.<br><br>For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/online-payments/pay-by-link#language-and-localization). |
| `shopperName` | [`Name3 \| undefined`](../../doc/models/name-3.md) | Optional | The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `shopperStatement` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**. |
| `showRemovePaymentMethodButton` | `boolean \| undefined` | Optional | Set to **false** to hide the button that lets the shopper remove a stored payment method.<br>**Default**: `true` |
| `socialSecurityNumber` | `string \| undefined` | Optional | The shopper's social security number. |
| `splitCardFundingSources` | `boolean \| undefined` | Optional | Boolean value indicating whether the card payment method should be split into separate debit and credit options.<br>**Default**: `false` |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the payment should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). |
| `store` | `string \| undefined` | Optional | The physical store, for which this payment is processed. |
| `storePaymentMethodMode` | [`StorePaymentMethodModeEnum \| undefined`](../../doc/models/store-payment-method-mode-enum.md) | Optional | Indicates if the details of the payment method will be stored for the shopper. Possible values:<br><br>* **disabled** – No details will be stored (default).<br>* **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored.<br>* **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent. |
| `telephoneNumber` | `string \| undefined` | Optional | The shopper's telephone number. |
| `themeId` | `string \| undefined` | Optional | A [theme](https://docs.adyen.com/unified-commerce/pay-by-link/payment-links/api#themes) to customize the appearance of the payment page. If not specified, the payment page is rendered according to the theme set as default in your Customer Area. |

## Example (as JSON)

```json
{
  "allowedPaymentMethods": null,
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "billingAddress": null,
  "blockedPaymentMethods": null,
  "captureDelayHours": null,
  "countryCode": null,
  "dateOfBirth": null,
  "deliverAt": null,
  "deliveryAddress": null,
  "description": null,
  "expiresAt": null,
  "installmentOptions": null,
  "lineItems": null,
  "manualCapture": null,
  "mcc": null,
  "merchantAccount": "merchantAccount8",
  "merchantOrderReference": null,
  "metadata": null,
  "recurringProcessingModel": null,
  "reference": "reference4",
  "requiredShopperFields": null,
  "returnUrl": null,
  "reusable": null,
  "riskData": null,
  "shopperEmail": null,
  "shopperLocale": null,
  "shopperName": null,
  "shopperReference": null,
  "shopperStatement": null,
  "showRemovePaymentMethodButton": null,
  "socialSecurityNumber": null,
  "splitCardFundingSources": null,
  "splits": null,
  "store": null,
  "storePaymentMethodMode": null,
  "telephoneNumber": null,
  "themeId": null
}
```

