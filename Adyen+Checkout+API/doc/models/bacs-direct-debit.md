
# BACS Direct Debit

## Structure

`BACSDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The bank account number (without separators). |
| `bankLocationId` | `string \| undefined` | Optional | The bank routing number of the account. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `holderName` | `string \| undefined` | Optional | The name of the bank account holder. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type5Enum \| undefined`](../../doc/models/type-5-enum.md) | Optional | **directdebit_GB**<br>**Default**: `Type5Enum.DirectdebitGB` |

## Example (as JSON)

```json
{
  "bankAccountNumber": null,
  "bankLocationId": null,
  "checkoutAttemptId": null,
  "holderName": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

