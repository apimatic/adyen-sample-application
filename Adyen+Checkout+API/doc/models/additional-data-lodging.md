
# Additional Data Lodging

## Structure

`AdditionalDataLodging`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lodgingCheckInDate` | `string \| undefined` | Optional | The arrival date.<br><br>* Date format: `yyyyMMdd` |
| `lodgingCheckOutDate` | `string \| undefined` | Optional | The departure date.<br><br>* Date format: `yyyyMMdd` |
| `lodgingCustomerServiceTollFreeNumber` | `string \| undefined` | Optional | The toll free phone number for the hotel/lodgings.<br><br>* Format: Alphanumeric<br>* maxLength: 17 |
| `lodgingFireSafetyActIndicator` | `string \| undefined` | Optional | Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: 'Y' or 'N'.<br><br>* Format: Alphabetic<br>* maxLength: 1 |
| `lodgingFolioCashAdvances` | `string \| undefined` | Optional | The folio cash advances.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingFolioNumber` | `string \| undefined` | Optional | Card acceptor’s internal invoice or billing ID reference number.<br><br>* Format: Alphanumeric<br>* maxLength: 25 |
| `lodgingFoodBeverageCharges` | `string \| undefined` | Optional | Any charges for food and beverages associated with the booking.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingNoShowIndicator` | `string \| undefined` | Optional | Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).<br><br>Value should be Y or N.<br><br>* Format: Numeric<br>* maxLength: 1 |
| `lodgingPrepaidExpenses` | `string \| undefined` | Optional | Prepaid expenses for the booking.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingPropertyPhoneNumber` | `string \| undefined` | Optional | Identifies specific lodging property location by its local phone number.<br><br>* Format: Alphanumeric<br>* maxLength: 17 |
| `lodgingRoom1NumberOfNights` | `string \| undefined` | Optional | Total number of nights the room will be rented.<br><br>* Format: Numeric<br>* maxLength: 4 |
| `lodgingRoom1Rate` | `string \| undefined` | Optional | The rate of the room.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingRoom1Tax` | `string \| undefined` | Optional | The total amount of tax to be paid.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingTotalRoomTax` | `string \| undefined` | Optional | Total room tax amount.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `lodgingTotalTax` | `string \| undefined` | Optional | Total tax amount.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `travelEntertainmentAuthDataDuration` | `string \| undefined` | Optional | Number of nights. This should be included in the auth message.<br><br>* Format: Numeric<br>* maxLength: 2 |
| `travelEntertainmentAuthDataMarket` | `string \| undefined` | Optional | Indicates what market-specific dataset will be submitted or is being submitted. Value should be "H" for Hotel. This should be included in the auth message.<br><br>* Format: Alphanumeric<br>* maxLength: 1 |

## Example (as JSON)

```json
{
  "lodging.checkInDate": null,
  "lodging.checkOutDate": null,
  "lodging.customerServiceTollFreeNumber": null,
  "lodging.fireSafetyActIndicator": null,
  "lodging.folioCashAdvances": null,
  "lodging.folioNumber": null,
  "lodging.foodBeverageCharges": null,
  "lodging.noShowIndicator": null,
  "lodging.prepaidExpenses": null,
  "lodging.propertyPhoneNumber": null,
  "lodging.room1.numberOfNights": null,
  "lodging.room1.rate": null,
  "lodging.room1.tax": null,
  "lodging.totalRoomTax": null,
  "lodging.totalTax": null,
  "travelEntertainmentAuthData.duration": null,
  "travelEntertainmentAuthData.market": null
}
```

