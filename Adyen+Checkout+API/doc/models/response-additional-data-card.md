
# Response Additional Data Card

## Structure

`ResponseAdditionalDataCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBin` | `string \| undefined` | Optional | The first six digits of the card number.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.<br><br>Example: 521234 |
| `cardHolderName` | `string \| undefined` | Optional | The cardholder name passed in the payment request. |
| `cardIssuingBank` | `string \| undefined` | Optional | The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available. |
| `cardIssuingCountry` | `string \| undefined` | Optional | The country where the card was issued.<br><br>Example: US |
| `cardIssuingCurrency` | `string \| undefined` | Optional | The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard.<br><br>Example: USD |
| `cardPaymentMethod` | `string \| undefined` | Optional | The card payment method used for the transaction.<br><br>Example: amex |
| `cardSummary` | `string \| undefined` | Optional | The last four digits of a card number.<br><br>> Returned only in case of a card payment. |
| `issuerBin` | `string \| undefined` | Optional | The first eight digits of the card number. Only returned if the card number is 16 digits or more.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.<br><br>Example: 52123423 |

## Example (as JSON)

```json
{
  "cardBin": null,
  "cardHolderName": null,
  "cardIssuingBank": null,
  "cardIssuingCountry": null,
  "cardIssuingCurrency": null,
  "cardPaymentMethod": null,
  "cardSummary": null,
  "issuerBin": null
}
```

