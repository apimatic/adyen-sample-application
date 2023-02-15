
# Additional Data Open Invoice

## Structure

`AdditionalDataOpenInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `openinvoicedataMerchantData` | `string \| undefined` | Optional | Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.<br><br>The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.<br><br>Since the field is optional, if it's not included it does not impact computing the merchant signature.<br><br>Applies only to Klarna.<br><br>You can contact Klarna for the format and structure of the string. |
| `openinvoicedataNumberOfLines` | `string \| undefined` | Optional | The number of invoice lines included in `openinvoicedata`.<br><br>There needs to be at least one line, so `numberOfLines` needs to be at least 1. |
| `openinvoicedataRecipientFirstName` | `string \| undefined` | Optional | First name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna. |
| `openinvoicedataRecipientLastName` | `string \| undefined` | Optional | Last name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna. |
| `openinvoicedataLineItemNrCurrencyCode` | `string \| undefined` | Optional | The three-character ISO currency code. |
| `openinvoicedataLineItemNrDescription` | `string \| undefined` | Optional | A text description of the product the invoice line refers to. |
| `openinvoicedataLineItemNrItemAmount` | `string \| undefined` | Optional | The price for one item in the invoice line, represented in minor units.<br><br>The due amount for the item, VAT excluded. |
| `openinvoicedataLineItemNrItemId` | `string \| undefined` | Optional | A unique id for this item. Required for RatePay if the description of each item is not unique. |
| `openinvoicedataLineItemNrItemVatAmount` | `string \| undefined` | Optional | The VAT due for one item in the invoice line, represented in minor units. |
| `openinvoicedataLineItemNrItemVatPercentage` | `string \| undefined` | Optional | The VAT percentage for one item in the invoice line, represented in minor units.<br><br>For example, 19% VAT is specified as 1900. |
| `openinvoicedataLineItemNrNumberOfItems` | `string \| undefined` | Optional | The number of units purchased of a specific product. |
| `openinvoicedataLineItemNrReturnShippingCompany` | `string \| undefined` | Optional | Name of the shipping company handling the the return shipment. |
| `openinvoicedataLineItemNrReturnTrackingNumber` | `string \| undefined` | Optional | The tracking number for the return of the shipment. |
| `openinvoicedataLineItemNrReturnTrackingUri` | `string \| undefined` | Optional | URI where the customer can track the return of their shipment. |
| `openinvoicedataLineItemNrShippingCompany` | `string \| undefined` | Optional | Name of the shipping company handling the delivery. |
| `openinvoicedataLineItemNrShippingMethod` | `string \| undefined` | Optional | Shipping method. |
| `openinvoicedataLineItemNrTrackingNumber` | `string \| undefined` | Optional | The tracking number for the shipment. |
| `openinvoicedataLineItemNrTrackingUri` | `string \| undefined` | Optional | URI where the customer can track their shipment. |

## Example (as JSON)

```json
{
  "openinvoicedata.merchantData": null,
  "openinvoicedata.numberOfLines": null,
  "openinvoicedata.recipientFirstName": null,
  "openinvoicedata.recipientLastName": null,
  "openinvoicedataLine[itemNr].currencyCode": null,
  "openinvoicedataLine[itemNr].description": null,
  "openinvoicedataLine[itemNr].itemAmount": null,
  "openinvoicedataLine[itemNr].itemId": null,
  "openinvoicedataLine[itemNr].itemVatAmount": null,
  "openinvoicedataLine[itemNr].itemVatPercentage": null,
  "openinvoicedataLine[itemNr].numberOfItems": null,
  "openinvoicedataLine[itemNr].returnShippingCompany": null,
  "openinvoicedataLine[itemNr].returnTrackingNumber": null,
  "openinvoicedataLine[itemNr].returnTrackingUri": null,
  "openinvoicedataLine[itemNr].shippingCompany": null,
  "openinvoicedataLine[itemNr].shippingMethod": null,
  "openinvoicedataLine[itemNr].trackingNumber": null,
  "openinvoicedataLine[itemNr].trackingUri": null
}
```

