
# Checkout Order Response

## Structure

`CheckoutOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount11 \| undefined`](../../doc/models/amount-11.md) | Optional | The initial amount of the order. |
| `expiresAt` | `string \| undefined` | Optional | The expiry date for the order. |
| `orderData` | `string \| undefined` | Optional | The encrypted order data. |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |
| `reference` | `string \| undefined` | Optional | The merchant reference for the order. |
| `remainingAmount` | [`Amount14 \| undefined`](../../doc/models/amount-14.md) | Optional | The updated remaining amount. |

## Example (as JSON)

```json
{
  "amount": null,
  "expiresAt": null,
  "orderData": null,
  "pspReference": "pspReference8",
  "reference": null,
  "remainingAmount": null
}
```

