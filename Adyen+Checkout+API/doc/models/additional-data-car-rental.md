
# Additional Data Car Rental

## Structure

`AdditionalDataCarRental`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carRentalCheckOutDate` | `string \| undefined` | Optional | Pick-up date.<br><br>* Date format: `yyyyMMdd` |
| `carRentalCustomerServiceTollFreeNumber` | `string \| undefined` | Optional | The customer service phone number of the car rental company.<br><br>* Format: Alphanumeric<br>* maxLength: 17 |
| `carRentalDaysRented` | `string \| undefined` | Optional | Number of days for which the car is being rented.<br><br>* Format: Numeric<br>* maxLength: 19 |
| `carRentalFuelCharges` | `string \| undefined` | Optional | Any fuel charges associated with the rental.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `carRentalInsuranceCharges` | `string \| undefined` | Optional | Any insurance charges associated with the rental.<br><br>* Format: Numeric<br>* maxLength: 12 |
| `carRentalLocationCity` | `string \| undefined` | Optional | The city from which the car is rented.<br><br>* Format: Alphanumeric<br>* maxLength: 18 |
| `carRentalLocationCountry` | `string \| undefined` | Optional | The country from which the car is rented.<br><br>* Format: Alphanumeric<br>* maxLength: 2 |
| `carRentalLocationStateProvince` | `string \| undefined` | Optional | The state or province from where the car is rented.<br><br>* Format: Alphanumeric<br>* maxLength: 3 |
| `carRentalNoShowIndicator` | `string \| undefined` | Optional | Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).<br><br>* Y - Customer was a no show.<br>* N - Not applicable. |
| `carRentalOneWayDropOffCharges` | `string \| undefined` | Optional | Charge associated with not returning a vehicle to the original rental location. |
| `carRentalRate` | `string \| undefined` | Optional | Daily rental rate.<br><br>* Format: Alphanumeric<br>* maxLength: 12 |
| `carRentalRateIndicator` | `string \| undefined` | Optional | Specifies whether the given rate is applied daily or weekly.<br><br>* D - Daily rate.<br>* W - Weekly rate. |
| `carRentalRentalAgreementNumber` | `string \| undefined` | Optional | The rental agreement number associated with this car rental.<br><br>* Format: Alphanumeric<br>* maxLength: 9 |
| `carRentalRentalClassId` | `string \| undefined` | Optional | Daily rental rate.<br><br>* Format: Alphanumeric<br>* maxLength: 12 |
| `carRentalRenterName` | `string \| undefined` | Optional | The name of the person renting the car.<br><br>* Format: Alphanumeric<br>* maxLength: 26 |
| `carRentalReturnCity` | `string \| undefined` | Optional | The city where the car must be returned.<br><br>* Format: Alphanumeric<br>* maxLength: 18 |
| `carRentalReturnCountry` | `string \| undefined` | Optional | The country where the car must be returned.<br><br>* Format: Alphanumeric<br>* maxLength: 2 |
| `carRentalReturnDate` | `string \| undefined` | Optional | The last date to return the car by.<br><br>* Date format: `yyyyMMdd` |
| `carRentalReturnLocationId` | `string \| undefined` | Optional | Agency code, phone number, or address abbreviation<br><br>* Format: Alphanumeric<br>* maxLength: 10 |
| `carRentalReturnStateProvince` | `string \| undefined` | Optional | The state or province where the car must be returned.<br><br>* Format: Alphanumeric<br>* maxLength: 3 |
| `carRentalTaxExemptIndicator` | `string \| undefined` | Optional | Indicates whether the goods or services were tax-exempt, or tax was not collected.<br><br>Values:<br><br>* Y - Goods or services were tax exempt<br>* N - Tax was not collected |
| `travelEntertainmentAuthDataDuration` | `string \| undefined` | Optional | Number of nights.  This should be included in the auth message.<br><br>* Format: Numeric<br>* maxLength: 2 |
| `travelEntertainmentAuthDataMarket` | `string \| undefined` | Optional | Indicates what market-specific dataset will be submitted or is being submitted. Value should be "A" for Car rental. This should be included in the auth message.<br><br>* Format: Alphanumeric<br>* maxLength: 1 |

## Example (as JSON)

```json
{
  "carRental.checkOutDate": null,
  "carRental.customerServiceTollFreeNumber": null,
  "carRental.daysRented": null,
  "carRental.fuelCharges": null,
  "carRental.insuranceCharges": null,
  "carRental.locationCity": null,
  "carRental.locationCountry": null,
  "carRental.locationStateProvince": null,
  "carRental.noShowIndicator": null,
  "carRental.oneWayDropOffCharges": null,
  "carRental.rate": null,
  "carRental.rateIndicator": null,
  "carRental.rentalAgreementNumber": null,
  "carRental.rentalClassId": null,
  "carRental.renterName": null,
  "carRental.returnCity": null,
  "carRental.returnCountry": null,
  "carRental.returnDate": null,
  "carRental.returnLocationId": null,
  "carRental.returnStateProvince": null,
  "carRental.taxExemptIndicator": null,
  "travelEntertainmentAuthData.duration": null,
  "travelEntertainmentAuthData.market": null
}
```

