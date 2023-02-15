
# Payment Method

## Structure

`PaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | Brand for the selected gift card. For example: plastix, hmclub. |
| `brands` | `string[] \| undefined` | Optional | List of possible brands. For example: visa, mc. |
| `configuration` | `Record<string, string> \| undefined` | Optional | The configuration of the payment method. |
| `fundingSource` | [`FundingSource7Enum \| undefined`](../../doc/models/funding-source-7-enum.md) | Optional | The funding source of the payment method. |
| `group` | [`PaymentMethodGroup2 \| undefined`](../../doc/models/payment-method-group-2.md) | Optional | The group where this payment method belongs to. |
| `inputDetails` | [`InputDetail[] \| undefined`](../../doc/models/input-detail.md) | Optional | All input details to be provided to complete the payment with this payment method. |
| `issuers` | [`PaymentMethodIssuer[] \| undefined`](../../doc/models/payment-method-issuer.md) | Optional | A list of issuers for this payment method. |
| `name` | `string \| undefined` | Optional | The displayable name of this payment method. |
| `type` | `string \| undefined` | Optional | The unique payment method code. |

## Example (as JSON)

```json
{
  "brand": null,
  "brands": null,
  "configuration": null,
  "fundingSource": null,
  "group": null,
  "inputDetails": null,
  "issuers": null,
  "name": null,
  "type": null
}
```

