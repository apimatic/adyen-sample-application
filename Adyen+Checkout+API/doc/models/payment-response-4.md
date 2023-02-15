
# Payment Response 4

## Structure

`PaymentResponse4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. |
| `type` | `string \| undefined` | Optional | The `paymentMethod.type` value used in the request. |

## Example (as JSON)

```json
{
  "brand": null,
  "type": null
}
```

