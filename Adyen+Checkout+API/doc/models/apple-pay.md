
# Apple Pay

## Structure

`ApplePay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applePayToken` | `string` | Required | The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.<br>**Constraints**: *Maximum Length*: `10000` |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type4Enum \| undefined`](../../doc/models/type-4-enum.md) | Optional | **applepay**<br>**Default**: `Type4Enum.Applepay` |

## Example (as JSON)

```json
{
  "applePayToken": "applePayToken2",
  "checkoutAttemptId": null,
  "fundingSource": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

