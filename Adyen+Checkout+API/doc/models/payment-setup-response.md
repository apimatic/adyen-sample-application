
# Payment Setup Response

## Structure

`PaymentSetupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentSession` | `string \| undefined` | Optional | The encoded payment session that you need to pass to the SDK. |
| `recurringDetails` | [`RecurringDetail[] \| undefined`](../../doc/models/recurring-detail.md) | Optional | The detailed list of stored payment details required to generate payment forms. Will be empty if oneClick is set to false in the request. |

## Example (as JSON)

```json
{
  "paymentSession": null,
  "recurringDetails": null
}
```

