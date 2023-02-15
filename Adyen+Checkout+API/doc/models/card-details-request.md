
# Card Details Request

## Structure

`CardDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | A minimum of the first 8 digits of the card number and a maximum of the full card number. 11 digits gives the best result.<br><br>You must be [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide) to collect raw card data. |
| `countryCode` | `string \| undefined` | Optional | The shopper country.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE |
| `encryptedCardNumber` | `string \| undefined` | Optional | The encrypted card number. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `supportedBrands` | `string[] \| undefined` | Optional | The card brands you support. This is the [`brands`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods__resParam_paymentMethods-brands) array from your [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.<br><br>If not included, our API uses the ones configured for your merchant account and, if provided, the country code. |

## Example (as JSON)

```json
{
  "cardNumber": "cardNumber6",
  "countryCode": null,
  "encryptedCardNumber": null,
  "merchantAccount": "merchantAccount8",
  "supportedBrands": null
}
```

