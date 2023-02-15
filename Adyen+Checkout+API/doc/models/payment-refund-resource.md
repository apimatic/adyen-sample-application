
# Payment Refund Resource

## Structure

`PaymentRefundResource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount34`](../../doc/models/amount-34.md) | Required | The refund amount. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `merchantRefundReason` | [`MerchantRefundReason1Enum \| undefined`](../../doc/models/merchant-refund-reason-1-enum.md) | Optional | Your reason for the refund request. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to refund. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the refund request. |
| `reference` | `string \| undefined` | Optional | Your reference for the refund request. |
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

