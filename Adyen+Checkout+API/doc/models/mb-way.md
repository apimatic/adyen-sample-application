
# MB Way

## Structure

`MBWay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `shopperEmail` | `string` | Required | - |
| `telephoneNumber` | `string` | Required | - |
| `type` | [`Type22Enum \| undefined`](../../doc/models/type-22-enum.md) | Optional | **mbway**<br>**Default**: `Type22Enum.Mbway` |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "shopperEmail": "shopperEmail6",
  "telephoneNumber": "telephoneNumber2",
  "type": null
}
```

