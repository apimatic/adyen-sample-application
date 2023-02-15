
# Additional Data Level 23

## Structure

`AdditionalDataLevel23`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enhancedSchemeDataCustomerReference` | `string \| undefined` | Optional | Customer code, if supplied by a customer.<br><br>Encoding: ASCII.<br><br>Max length: 25 characters.<br><br>> Required for Level 2 and Level 3 data. |
| `enhancedSchemeDataDestinationCountryCode` | `string \| undefined` | Optional | Destination country code.<br><br>Encoding: ASCII.<br><br>Max length: 3 characters. |
| `enhancedSchemeDataDestinationPostalCode` | `string \| undefined` | Optional | The postal code of a destination address.<br><br>Encoding: ASCII.<br><br>Max length: 10 characters.<br><br>> Required for American Express. |
| `enhancedSchemeDataDestinationStateProvinceCode` | `string \| undefined` | Optional | Destination state or province code.<br><br>Encoding: ASCII.Max length: 3 characters. |
| `enhancedSchemeDataDutyAmount` | `string \| undefined` | Optional | Duty amount, in minor units.<br><br>For example, 2000 means USD 20.00.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataFreightAmount` | `string \| undefined` | Optional | Shipping amount, in minor units.<br><br>For example, 2000 means USD 20.00.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrCommodityCode` | `string \| undefined` | Optional | Item commodity code.<br><br>Encoding: ASCII.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrDescription` | `string \| undefined` | Optional | Item description.<br><br>Encoding: ASCII.<br><br>Max length: 26 characters. |
| `enhancedSchemeDataItemDetailLineItemNrDiscountAmount` | `string \| undefined` | Optional | Discount amount, in minor units.<br><br>For example, 2000 means USD 20.00.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrProductCode` | `string \| undefined` | Optional | Product code.<br><br>Encoding: ASCII.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrQuantity` | `string \| undefined` | Optional | Quantity, specified as an integer value.<br><br>Value must be greater than 0.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrTotalAmount` | `string \| undefined` | Optional | Total amount, in minor units.<br><br>For example, 2000 means USD 20.00.<br><br>Max length: 12 characters. |
| `enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure` | `string \| undefined` | Optional | Item unit of measurement.<br><br>Encoding: ASCII.<br><br>Max length: 3 characters. |
| `enhancedSchemeDataItemDetailLineItemNrUnitPrice` | `string \| undefined` | Optional | Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>Max length: 12 characters. |
| `enhancedSchemeDataOrderDate` | `string \| undefined` | Optional | Order date.<br><br>* Format: `ddMMyy`<br><br>Encoding: ASCII.<br><br>Max length: 6 characters. |
| `enhancedSchemeDataShipFromPostalCode` | `string \| undefined` | Optional | The postal code of a "ship-from" address.<br><br>Encoding: ASCII.<br><br>Max length: 10 characters. |
| `enhancedSchemeDataTotalTaxAmount` | `string \| undefined` | Optional | Total tax amount, in minor units.<br><br>For example, 2000 means USD 20.00.<br><br>Max length: 12 characters.<br><br>> Required for Level 2 and Level 3 data. |

## Example (as JSON)

```json
{
  "enhancedSchemeData.customerReference": null,
  "enhancedSchemeData.destinationCountryCode": null,
  "enhancedSchemeData.destinationPostalCode": null,
  "enhancedSchemeData.destinationStateProvinceCode": null,
  "enhancedSchemeData.dutyAmount": null,
  "enhancedSchemeData.freightAmount": null,
  "enhancedSchemeData.itemDetailLine[itemNr].commodityCode": null,
  "enhancedSchemeData.itemDetailLine[itemNr].description": null,
  "enhancedSchemeData.itemDetailLine[itemNr].discountAmount": null,
  "enhancedSchemeData.itemDetailLine[itemNr].productCode": null,
  "enhancedSchemeData.itemDetailLine[itemNr].quantity": null,
  "enhancedSchemeData.itemDetailLine[itemNr].totalAmount": null,
  "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure": null,
  "enhancedSchemeData.itemDetailLine[itemNr].unitPrice": null,
  "enhancedSchemeData.orderDate": null,
  "enhancedSchemeData.shipFromPostalCode": null,
  "enhancedSchemeData.totalTaxAmount": null
}
```

