
# Checkout Create Order Request

## Structure

`CheckoutCreateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount10`](../../doc/models/amount-10.md) | Required | The total amount of the order. |
| `expiresAt` | `string \| undefined` | Optional | The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the order. |
| `reference` | `string` | Required | A custom reference identifying the order. |

## Example (as JSON)

```json
{
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "expiresAt": null,
  "merchantAccount": "merchantAccount8",
  "reference": "reference4"
}
```

