
# Mandate 1

The mandate details to initiate recurring transaction.

## Structure

`Mandate1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | The billing amount (in minor units) of the recurring transactions. |
| `amountRule` | [`AmountRuleEnum \| undefined`](../../doc/models/amount-rule-enum.md) | Optional | The limitation rule of the billing amount.<br><br>Possible values:<br><br>* **max**: The transaction amount can not exceed the `amount`.<br><br>* **exact**: The transaction amount should be the same as the `amount`. |
| `billingAttemptsRule` | [`BillingAttemptsRuleEnum \| undefined`](../../doc/models/billing-attempts-rule-enum.md) | Optional | The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.<br><br>Possible values:<br><br>* **on**: On a specific date.<br><br>* **before**:  Before and on a specific date.<br><br>* **after**: On and after a specific date. |
| `billingDay` | `string \| undefined` | Optional | The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.<br><br>Possible values: 1-31 based on the `frequency`. |
| `endsAt` | `string` | Required | End date of the billing plan, in YYYY-MM-DD format. |
| `frequency` | [`FrequencyEnum`](../../doc/models/frequency-enum.md) | Required | The frequency with which a shopper should be charged.<br><br>Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**. |
| `remarks` | `string \| undefined` | Optional | The message shown by UPI to the shopper on the approval screen. |
| `startsAt` | `string \| undefined` | Optional | Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date. |

## Example (as JSON)

```json
{
  "amount": "amount8",
  "amountRule": null,
  "billingAttemptsRule": null,
  "billingDay": null,
  "endsAt": "endsAt0",
  "frequency": "monthly",
  "remarks": null,
  "startsAt": null
}
```

