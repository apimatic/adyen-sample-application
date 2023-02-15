
# Checkout Await Action

## Structure

`CheckoutAwaitAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | A value that must be submitted to the `/payments/details` endpoint to verify this payment. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `type` | `string` | Required, Constant | **await**<br>**Default**: `'await'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example (as JSON)

```json
{
  "type": "await"
}
```

