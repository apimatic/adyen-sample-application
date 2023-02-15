
# Masterpass

## Structure

`Masterpass`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `masterpassTransactionId` | `string` | Required | The Masterpass transaction ID. |
| `type` | [`Type21Enum \| undefined`](../../doc/models/type-21-enum.md) | Optional | **masterpass**<br>**Default**: `Type21Enum.Masterpass` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "fundingSource": null,
  "masterpassTransactionId": "masterpassTransactionId8",
  "type": null
}
```

