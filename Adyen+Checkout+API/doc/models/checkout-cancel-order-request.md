
# Checkout Cancel Order Request

## Structure

`CheckoutCancelOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier that orderData belongs to. |
| `order` | [`CheckoutOrder5`](../../doc/models/checkout-order-5.md) | Required | The order request object that contains a pspReference that represents the order and the matching encrypted order data. |

## Example (as JSON)

```json
{
  "merchantAccount": "merchantAccount8",
  "order": {
    "orderData": "orderData8",
    "pspReference": "pspReference8"
  }
}
```

