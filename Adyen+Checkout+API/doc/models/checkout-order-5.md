
# Checkout Order 5

The order request object that contains a pspReference that represents the order and the matching encrypted order data.

## Structure

`CheckoutOrder5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderData` | `string` | Required | The encrypted order data. |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |

## Example (as JSON)

```json
{
  "orderData": "orderData8",
  "pspReference": "pspReference8"
}
```

