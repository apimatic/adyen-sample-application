
# Payment Method Issuer

## Structure

`PaymentMethodIssuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disabled` | `boolean \| undefined` | Optional | A boolean value indicating whether this issuer is unavailable. Can be `true` whenever the issuer is offline.<br>**Default**: `false` |
| `id` | `string` | Required | The unique identifier of this issuer, to submit in requests to /payments. |
| `name` | `string` | Required | A localized name of the issuer. |

## Example (as JSON)

```json
{
  "disabled": null,
  "id": "id0",
  "name": "name0"
}
```

