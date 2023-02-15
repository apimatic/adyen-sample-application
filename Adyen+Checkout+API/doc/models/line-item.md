
# Line Item

## Structure

`LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountExcludingTax` | `number \| undefined` | Optional | Item amount excluding the tax, in minor units. |
| `amountIncludingTax` | `number \| undefined` | Optional | Item amount including the tax, in minor units. |
| `brand` | `string \| undefined` | Optional | Brand of the item. |
| `color` | `string \| undefined` | Optional | Color of the item. |
| `description` | `string \| undefined` | Optional | Description of the line item. |
| `id` | `string \| undefined` | Optional | ID of the line item. |
| `imageUrl` | `string \| undefined` | Optional | Link to the picture of the purchased item. |
| `itemCategory` | `string \| undefined` | Optional | Item category, used by the RatePay payment method. |
| `manufacturer` | `string \| undefined` | Optional | Manufacturer of the item. |
| `productUrl` | `string \| undefined` | Optional | Link to the purchased item. |
| `quantity` | `number \| undefined` | Optional | Number of items. |
| `receiverEmail` | `string \| undefined` | Optional | Email associated with the given product in the basket (usually in electronic gift cards). |
| `size` | `string \| undefined` | Optional | Size of the item. |
| `sku` | `string \| undefined` | Optional | Stock keeping unit. |
| `taxAmount` | `number \| undefined` | Optional | Tax amount, in minor units. |
| `taxPercentage` | `number \| undefined` | Optional | Tax percentage, in minor units. |
| `upc` | `string \| undefined` | Optional | Universal Product Code. |

## Example (as JSON)

```json
{
  "amountExcludingTax": null,
  "amountIncludingTax": null,
  "brand": null,
  "color": null,
  "description": null,
  "id": null,
  "imageUrl": null,
  "itemCategory": null,
  "manufacturer": null,
  "productUrl": null,
  "quantity": null,
  "receiverEmail": null,
  "size": null,
  "sku": null,
  "taxAmount": null,
  "taxPercentage": null,
  "upc": null
}
```

