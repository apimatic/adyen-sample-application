
# Create Payment Refund Request

## Structure

`CreatePaymentRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount25`](../../doc/models/amount-25.md) | Required | The amount that you want to refund. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `merchantRefundReason` | [`MerchantRefundReasonEnum \| undefined`](../../doc/models/merchant-refund-reason-enum.md) | Optional | Your reason for the refund request |
| `reference` | `string \| undefined` | Optional | Your reference for the refund request. Maximum length: 80 characters. |
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
  "merchantRefundReason": null,
  "reference": null,
  "splits": null
}
```

