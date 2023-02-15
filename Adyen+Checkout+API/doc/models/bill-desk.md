
# Bill Desk

## Structure

`BillDesk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `type` | [`Type6Enum`](../../doc/models/type-6-enum.md) | Required | **billdesk** |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "issuer": "issuer0",
  "type": "onlinebanking_IN"
}
```

