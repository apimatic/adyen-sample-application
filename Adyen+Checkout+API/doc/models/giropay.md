
# Giropay

## Structure

`Giropay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type17Enum \| undefined`](../../doc/models/type-17-enum.md) | Optional | **giropay**<br>**Default**: `Type17Enum.Giropay` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

