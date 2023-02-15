
# Open Invoice

## Structure

`OpenInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | `string \| undefined` | Optional | The address where to send the invoice. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deliveryAddress` | `string \| undefined` | Optional | The address where the goods should be delivered. |
| `personalDetails` | `string \| undefined` | Optional | Shopper name, date of birth, phone number, and email address. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type25Enum \| undefined`](../../doc/models/type-25-enum.md) | Optional | **openinvoice**<br>**Default**: `Type25Enum.Openinvoice` |

## Example (as JSON)

```json
{
  "billingAddress": null,
  "checkoutAttemptId": null,
  "deliveryAddress": null,
  "personalDetails": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

