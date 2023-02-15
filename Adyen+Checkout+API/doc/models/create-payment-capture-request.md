
# Create Payment Capture Request

## Structure

`CreatePaymentCaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount23`](../../doc/models/amount-23.md) | Required | The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the captured items, required for [partial captures](https://docs.adyen.com/online-payments/capture#partial-capture).<br><br>> This field is required for partial captures with 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `reference` | `string \| undefined` | Optional | Your reference for the capture request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). |

## Example (as JSON)

```json
{
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "lineItems": null,
  "merchantAccount": "merchantAccount8",
  "reference": null,
  "splits": null
}
```

