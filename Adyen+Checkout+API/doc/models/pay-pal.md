
# Pay Pal

## Structure

`PayPal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `orderID` | `string \| undefined` | Optional | The unique ID associated with the order. |
| `payerID` | `string \| undefined` | Optional | The unique ID associated with the payer. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `subtype` | [`SubtypeEnum \| undefined`](../../doc/models/subtype-enum.md) | Optional | The type of flow to initiate. |
| `type` | `string` | Required, Constant | **paypal**<br>**Default**: `'paypal'` |

## Example (as JSON)

```json
{
  "type": "paypal"
}
```

