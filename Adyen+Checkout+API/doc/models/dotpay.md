
# Dotpay

## Structure

`Dotpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The Dotpay issuer value of the shopper's selected bank. Set this to an **id** of a Dotpay issuer to preselect it. |
| `type` | [`Type13Enum \| undefined`](../../doc/models/type-13-enum.md) | Optional | **dotpay**<br>**Default**: `Type13Enum.Dotpay` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "type": null
}
```

