
# Voucher

## Structure

`Voucher`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `firstName` | `string` | Required | The shopper's first name. |
| `lastName` | `string` | Required | The shopper's last name. |
| `shopperEmail` | `string` | Required | The shopper's email. |
| `telephoneNumber` | `string` | Required | The shopper's contact number. It must have an international number format, for example **+31 20 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted. |
| `type` | [`Type15Enum`](../../doc/models/type-15-enum.md) | Required | **econtextvoucher** |

## Example (as JSON)

```json
{
  "checkoutAttemptId": null,
  "firstName": "firstName4",
  "lastName": "lastName4",
  "shopperEmail": "shopperEmail6",
  "telephoneNumber": "telephoneNumber2",
  "type": "econtext_seveneleven"
}
```

