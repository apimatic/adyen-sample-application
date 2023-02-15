
# Samsung Pay

## Structure

`SamsungPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `samsungPayToken` | `string` | Required | The payload you received from the Samsung Pay SDK response. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type29Enum \| undefined`](../../doc/models/type-29-enum.md) | Optional | **samsungpay**<br>**Default**: `Type29Enum.Samsungpay` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "fundingSource": null,
  "recurringDetailReference": null,
  "samsungPayToken": "samsungPayToken2",
  "storedPaymentMethodId": null,
  "type": null
}
```

