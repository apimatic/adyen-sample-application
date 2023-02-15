
# BLIK

## Structure

`BLIK`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blikCode` | `string \| undefined` | Optional | BLIK code consisting of 6 digits. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type7Enum \| undefined`](../../doc/models/type-7-enum.md) | Optional | **blik** |

## Example (as JSON)

```json
{
  "blikCode": null,
  "checkoutAttemptId": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

