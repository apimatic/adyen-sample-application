
# Stored Payment Method

## Structure

`StoredPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type16Enum`](../../doc/models/type-16-enum.md) | Required | **genericissuer** |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": "onlineBanking_SK"
}
```

