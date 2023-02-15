
# Google Pay

## Structure

`GooglePay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `googlePayToken` | `string` | Required | The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type18Enum \| undefined`](../../doc/models/type-18-enum.md) | Optional | **googlepay**, **paywithgoogle**<br>**Default**: `Type18Enum.Googlepay` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "fundingSource": null,
  "googlePayToken": "googlePayToken2",
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

