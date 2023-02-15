
# Payment Capture Resource

## Structure

`PaymentCaptureResource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount29`](../../doc/models/amount-29.md) | Required | The captured amount. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the captured items, required for [partial captures](https://docs.adyen.com/online-payments/capture#partial-capture).<br><br>> This field is required for partial captures with 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to capture. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the capture request. |
| `reference` | `string \| undefined` | Optional | Your reference for the capture request. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br>**Default**: `'received'` |

## Example (as JSON)

```json
{
  "amount": null,
  "merchantAccount": null,
  "paymentPspReference": null,
  "pspReference": null,
  "status": "received"
}
```

