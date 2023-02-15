
# Checkout SDK Action

## Structure

`CheckoutSDKAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string \| undefined` | Optional | A value that must be submitted to the `/payments/details` endpoint to verify this payment. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `sdkData` | `Record<string, string> \| undefined` | Optional | The data to pass to the SDK. |
| `type` | [`Type11Enum`](../../doc/models/type-11-enum.md) | Required | The type of the action. |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example (as JSON)

```json
{
  "paymentData": null,
  "paymentMethodType": null,
  "sdkData": null,
  "type": "sdk",
  "url": null
}
```

