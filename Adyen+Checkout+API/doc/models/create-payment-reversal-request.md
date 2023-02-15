
# Create Payment Reversal Request

## Structure

`CreatePaymentReversalRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `reference` | `string \| undefined` | Optional | Your reference for the reversal request. Maximum length: 80 characters. |

## Example (as JSON)

```json
{
  "merchantAccount": "merchantAccount8",
  "reference": null
}
```

