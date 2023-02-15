
# Dragonpay

## Structure

`Dragonpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `type` | [`Type14Enum`](../../doc/models/type-14-enum.md) | Required | **dragonpay** |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "shopperEmail": null,
  "type": "dragonpay_otc_non_banking"
}
```

