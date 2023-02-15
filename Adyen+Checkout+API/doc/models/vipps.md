
# Vipps

## Structure

`Vipps`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `telephoneNumber` | `string` | Required | - |
| `type` | [`Type32Enum \| undefined`](../../doc/models/type-32-enum.md) | Optional | **vipps**<br>**Default**: `Type32Enum.Vipps` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "telephoneNumber": "telephoneNumber2",
  "type": null
}
```

