
# Additional Data Airline

## Structure

`AdditionalDataAirline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `airlineAgencyInvoiceNumber` | `string \| undefined` | Optional | Reference number for the invoice, issued by the agency.<br><br>* minLength: 1<br>* maxLength: 6 |
| `airlineAgencyPlanName` | `string \| undefined` | Optional | 2-letter agency plan identifier; alphabetical.<br><br>* minLength: 2<br>* maxLength: 2 |
| `airlineAirlineCode` | `string \| undefined` | Optional | [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX); numeric. It identifies the carrier.<br><br>* Format: IATA 3-digit accounting code (PAX)<br>* Example: KLM = 074<br>* minLength: 3<br>* maxLength: 3 |
| `airlineAirlineDesignatorCode` | `string \| undefined` | Optional | [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.<br><br>* Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter airline code<br>* Example: KLM = KL<br>* minLength: 2<br>* maxLength: 2 |
| `airlineBoardingFee` | `string \| undefined` | Optional | Chargeable amount for boarding the plane.<br>The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).<br><br>* minLength: 1<br>* maxLength: 18 |
| `airlineComputerizedReservationSystem` | `string \| undefined` | Optional | The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.<br><br>* Format: alphanumeric.<br>* minLength: 4<br>* maxLength: 4 |
| `airlineCustomerReferenceNumber` | `string \| undefined` | Optional | Reference number; alphanumeric.<br><br>* minLength: 0<br>* maxLength: 20 |
| `airlineDocumentType` | `string \| undefined` | Optional | Optional 2-digit code; alphanumeric. It identifies the type of product of the transaction. The description of the code may appear on credit card statements.<br><br>* Format: 2-digit code<br>* Example: Passenger ticket = 01<br>* minLength: 2<br>* maxLength: 2 |
| `airlineFlightDate` | `string \| undefined` | Optional | Flight departure date. Local time `(HH:mm)` is optional.<br><br>* Date format: `yyyy-MM-dd`<br>* Date and time format: `yyyy-MM-dd HH:mm`<br>* minLength: 10<br>* maxLength: 16 |
| `airlineLegCarrierCode` | `string \| undefined` | Optional | [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.<br>This field is required/mandatory if the airline data includes leg details.<br><br>* Format: IATA 2-letter airline code<br>* Example: KLM = KL<br>* minLength: 2<br>* maxLength: 2 |
| `airlineLegClassOfTravel` | `string \| undefined` | Optional | 1-letter travel class identifier; alphabetical. There is no standard; however, the following codes are used rather consistently:<br><br>* F: first class<br>* J: business class<br>* Y: economy class<br>* W: premium economy<br><br>Limitations:<br><br>* minLength: 1<br>* maxLength: 1 |
| `airlineLegDateOfTravel` | `string \| undefined` | Optional | Date and time of travel. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-compliant.<br><br>* Format: `yyyy-MM-dd HH:mm`<br>* minLength: 16<br>* maxLength: 16 |
| `airlineLegDepartAirport` | `string \| undefined` | Optional | Alphabetical identifier of the departure airport.<br>This field is required if the airline data includes leg details.<br><br>* Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code.<br>* Example: Amsterdam = AMS<br>* minLength: 3<br>* maxLength: 3 |
| `airlineLegDepartTax` | `string \| undefined` | Optional | [Departure tax](https://en.wikipedia.org/wiki/Departure_tax). Amount charged by a country to an individual upon their leaving. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).<br><br>* minLength: 1<br>* maxLength: 12 |
| `airlineLegDestinationCode` | `string \| undefined` | Optional | Alphabetical identifier of the destination/arrival airport.<br>This field is required/mandatory if the airline data includes leg details.<br><br>* Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code.<br>* Example: Amsterdam = AMS<br>* minLength: 3<br>* maxLength: 3 |
| `airlineLegFareBaseCode` | `string \| undefined` | Optional | [Fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code); alphanumeric.<br><br>* minLength: 1<br>* maxLength: 7 |
| `airlineLegFlightNumber` | `string \| undefined` | Optional | The flight identifier.<br><br>* minLength: 1<br>* maxLength: 5 |
| `airlineLegStopOverCode` | `string \| undefined` | Optional | 1-letter code that indicates whether the passenger is entitled to make a stopover. Only two types of characters are allowed:<br><br>* O: Stopover allowed<br>* X: Stopover not allowed<br><br>Limitations:<br><br>* minLength: 1<br>* maxLength: 1 |
| `airlinePassengerDateOfBirth` | `string \| undefined` | Optional | Date of birth of the passenger.<br><br>Date format: `yyyy-MM-dd`<br><br>* minLength: 10<br>* maxLength: 10 |
| `airlinePassengerFirstName` | `string \| undefined` | Optional | Passenger first name/given name.<br><br>> This field is required/mandatory if the airline data includes passenger details or leg details. |
| `airlinePassengerLastName` | `string \| undefined` | Optional | Passenger last name/family name.<br><br>> This field is required/mandatory if the airline data includes passenger details or leg details. |
| `airlinePassengerTelephoneNumber` | `string \| undefined` | Optional | Telephone number of the passenger, including country code. This is an alphanumeric field that can include the '+' and '-' signs.<br><br>* minLength: 3<br>* maxLength: 30 |
| `airlinePassengerTravellerType` | `string \| undefined` | Optional | Passenger type code (PTC). IATA PTC values are 3-letter alphabetical. Example: ADT, SRC, CNN, INS.<br><br>However, several carriers use non-standard codes that can be up to 5 alphanumeric characters.<br><br>* minLength: 3<br>* maxLength: 6 |
| `airlinePassengerName` | `string` | Required | Passenger name, initials, and a title.<br><br>* Format: last name + first name or initials + title.<br>* Example: *FLYER / MARY MS*.<br>* minLength: 1<br>* maxLength: 49 |
| `airlineTicketIssueAddress` | `string \| undefined` | Optional | Address of the place/agency that issued the ticket.<br><br>* minLength: 0<br>* maxLength: 16 |
| `airlineTicketNumber` | `string \| undefined` | Optional | The ticket's unique identifier.<br><br>* minLength: 1<br>* maxLength: 150 |
| `airlineTravelAgencyCode` | `string \| undefined` | Optional | IATA number, also ARC number or ARC/IATA number. Unique identifier number for travel agencies.<br><br>* minLength: 1<br>* maxLength: 8 |
| `airlineTravelAgencyName` | `string \| undefined` | Optional | The name of the travel agency.<br><br>* minLength: 1<br>* maxLength: 25 |

## Example (as JSON)

```json
{
  "airline.agency_invoice_number": null,
  "airline.agency_plan_name": null,
  "airline.airline_code": null,
  "airline.airline_designator_code": null,
  "airline.boarding_fee": null,
  "airline.computerized_reservation_system": null,
  "airline.customer_reference_number": null,
  "airline.document_type": null,
  "airline.flight_date": null,
  "airline.leg.carrier_code": null,
  "airline.leg.class_of_travel": null,
  "airline.leg.date_of_travel": null,
  "airline.leg.depart_airport": null,
  "airline.leg.depart_tax": null,
  "airline.leg.destination_code": null,
  "airline.leg.fare_base_code": null,
  "airline.leg.flight_number": null,
  "airline.leg.stop_over_code": null,
  "airline.passenger.date_of_birth": null,
  "airline.passenger.first_name": null,
  "airline.passenger.last_name": null,
  "airline.passenger.telephone_number": null,
  "airline.passenger.traveller_type": null,
  "airline.passenger_name": "airline.passenger_name8",
  "airline.ticket_issue_address": null,
  "airline.ticket_number": null,
  "airline.travel_agency_code": null,
  "airline.travel_agency_name": null
}
```

