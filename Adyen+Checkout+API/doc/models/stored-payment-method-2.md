
# Stored Payment Method 2

## Structure

`StoredPaymentMethod2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The brand of the card. |
| `expiryMonth` | `string \| undefined` | Optional | The month the card expires. |
| `expiryYear` | `string \| undefined` | Optional | The last two digits of the year the card expires. For example, **22** for the year 2022. |
| `holderName` | `string \| undefined` | Optional | The unique payment method code. |
| `iban` | `string \| undefined` | Optional | The IBAN of the bank account. |
| `id` | `string \| undefined` | Optional | A unique identifier of this stored payment method. |
| `lastFour` | `string \| undefined` | Optional | The last four digits of the PAN. |
| `name` | `string \| undefined` | Optional | The display name of the stored payment method. |
| `networkTxReference` | `string \| undefined` | Optional | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID. |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account holder. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `supportedRecurringProcessingModels` | `string[] \| undefined` | Optional | The supported recurring processing models for this stored payment method. |
| `supportedShopperInteractions` | `string[] \| undefined` | Optional | The supported shopper interactions for this stored payment method. |
| `type` | `string \| undefined` | Optional | The type of payment method. |

## Example (as JSON)

```json
{
  "brand": null,
  "expiryMonth": null,
  "expiryYear": null,
  "holderName": null,
  "iban": null,
  "id": null,
  "lastFour": null,
  "name": null,
  "networkTxReference": null,
  "ownerName": null,
  "shopperEmail": null,
  "supportedRecurringProcessingModels": null,
  "supportedShopperInteractions": null,
  "type": null
}
```

