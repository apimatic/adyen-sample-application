
# Checkout Three DS2 Action

## Structure

`CheckoutThreeDS2Action`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationToken` | `string \| undefined` | Optional | A token needed to authorise a payment. |
| `paymentData` | `string \| undefined` | Optional | A value that must be submitted to the `/payments/details` endpoint to verify this payment. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `subtype` | `string \| undefined` | Optional | A subtype of the token. |
| `token` | `string \| undefined` | Optional | A token to pass to the 3DS2 Component to get the fingerprint. |
| `type` | `string` | Required, Constant | **threeDS2**<br>**Default**: `'threeDS2'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example (as JSON)

```json
{
  "type": "threeDS2"
}
```

