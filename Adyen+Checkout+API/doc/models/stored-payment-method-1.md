
# Stored Payment Method 1

## Structure

`StoredPaymentMethod1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type31Enum \| undefined`](../../doc/models/type-31-enum.md) | Optional | The payment method type. |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

