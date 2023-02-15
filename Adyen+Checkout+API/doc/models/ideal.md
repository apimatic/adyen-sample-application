
# IDEAL

## Structure

`IDEAL`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type19Enum \| undefined`](../../doc/models/type-19-enum.md) | Optional | **ideal**<br>**Default**: `Type19Enum.Ideal` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

