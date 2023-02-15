
# Pay U

## Structure

`PayU`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | `string` | Required, Constant | **payu_IN_upi**<br>**Default**: `'payu_IN_upi'` |
| `virtualPaymentAddress` | `string \| undefined` | Optional | The virtual payment address for UPI. |

## Example (as JSON)

```json
{
  "type": "payu_IN_upi"
}
```

