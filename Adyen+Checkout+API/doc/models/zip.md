
# Zip

## Structure

`Zip`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `clickAndCollect` | `string \| undefined` | Optional | Set this to **true** if the shopper would like to pick up and collect their order, instead of having the goods delivered to them. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `type` | [`Type36Enum \| undefined`](../../doc/models/type-36-enum.md) | Optional | **zip**<br>**Default**: `Type36Enum.Zip` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "clickAndCollect": null,
  "recurringDetailReference": null,
  "storedPaymentMethodId": null,
  "type": null
}
```

