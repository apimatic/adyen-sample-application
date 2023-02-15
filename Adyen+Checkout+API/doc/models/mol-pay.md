
# MOL Pay

## Structure

`MOLPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The shopper's bank. Specify this with the issuer value that corresponds to this bank. |
| `type` | [`Type24Enum`](../../doc/models/type-24-enum.md) | Required | **molpay** |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "type": "molpay_ebanking_fpx_MY"
}
```

