
# Payment Methods Request

## Structure

`PaymentMethodsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payment request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `allowedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"allowedPaymentMethods":["ideal","giropay"]` |
| `amount` | [`Amount2 \| undefined`](../../doc/models/amount-2.md) | Optional | The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero). |
| `blockedPaymentMethods` | `string[] \| undefined` | Optional | List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).<br><br>Example: `"blockedPaymentMethods":["ideal","giropay"]` |
| `channel` | [`Channel3Enum \| undefined`](../../doc/models/channel-3-enum.md) | Optional | The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values:<br><br>* iOS<br>* Android<br>* Web |
| `countryCode` | `string \| undefined` | Optional | The shopper's country code. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `order` | [`CheckoutOrder2 \| undefined`](../../doc/models/checkout-order-2.md) | Optional | The order information required for partial payments. |
| `shopperLocale` | `string \| undefined` | Optional | The combination of a language code and a country code to specify the language to be used in the payment. |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `splitCardFundingSources` | `boolean \| undefined` | Optional | Boolean value indicating whether the card payment method should be split into separate debit and credit options.<br>**Default**: `false` |
| `store` | `string \| undefined` | Optional | The ecommerce or point-of-sale store that is processing the payment. Used in [partner model integrations](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#route-payments) for Adyen for Platforms.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |

## Example (as JSON)

```json
{
  "additionalData": null,
  "allowedPaymentMethods": null,
  "amount": null,
  "blockedPaymentMethods": null,
  "channel": null,
  "countryCode": null,
  "merchantAccount": "merchantAccount8",
  "order": null,
  "shopperLocale": null,
  "shopperReference": null,
  "splitCardFundingSources": null,
  "store": null
}
```

