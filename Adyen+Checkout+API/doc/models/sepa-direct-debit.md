
# SEPA Direct Debit

## Structure

`SEPADirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `iban` | `string` | Required | The International Bank Account Number (IBAN). |
| `ownerName` | `string` | Required | The name of the bank account holder. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type30Enum \| undefined`](../../doc/models/type-30-enum.md) | Optional | **sepadirectdebit**<br>**Default**: `Type30Enum.Sepadirectdebit` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "iban": "iban4",
  "ownerName": "ownerName4",
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

