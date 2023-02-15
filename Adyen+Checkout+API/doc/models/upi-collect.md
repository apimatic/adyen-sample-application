
# UPI Collect

## Structure

`UPICollect`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingSequenceNumber` | `string` | Required | The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | `string` | Required, Constant | **upi_collect**<br>**Default**: `'upi_collect'` |
| `virtualPaymentAddress` | `string \| undefined` | Optional | The virtual payment address for UPI. |

## Example (as JSON)

```json
{
  "billingSequenceNumber": null,
  "type": "upi_collect"
}
```

