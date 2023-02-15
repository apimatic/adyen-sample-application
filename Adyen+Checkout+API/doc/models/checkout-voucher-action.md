
# Checkout Voucher Action

## Structure

`CheckoutVoucherAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alternativeReference` | `string \| undefined` | Optional | The voucher alternative reference code. |
| `collectionInstitutionNumber` | `string \| undefined` | Optional | A collection institution number (store number) for Econtext Pay-Easy ATM. |
| `downloadUrl` | `string \| undefined` | Optional | The URL to download the voucher. |
| `entity` | `string \| undefined` | Optional | An entity number of Multibanco. |
| `expiresAt` | `string \| undefined` | Optional | The date time of the voucher expiry. |
| `initialAmount` | [`Amount15 \| undefined`](../../doc/models/amount-15.md) | Optional | The initial amount. |
| `instructionsUrl` | `string \| undefined` | Optional | The URL to the detailed instructions to make payment using the voucher. |
| `issuer` | `string \| undefined` | Optional | The issuer of the voucher. |
| `maskedTelephoneNumber` | `string \| undefined` | Optional | The shopper telephone number (partially masked). |
| `merchantName` | `string \| undefined` | Optional | The merchant name. |
| `merchantReference` | `string \| undefined` | Optional | The merchant reference. |
| `paymentData` | `string \| undefined` | Optional | A value that must be submitted to the `/payments/details` endpoint to verify this payment. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `reference` | `string \| undefined` | Optional | The voucher reference code. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper email. |
| `shopperName` | `string \| undefined` | Optional | The shopper name. |
| `surcharge` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | The surcharge amount. |
| `totalAmount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The total amount (initial plus surcharge amount). |
| `type` | `string` | Required, Constant | **voucher**<br>**Default**: `'voucher'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example (as JSON)

```json
{
  "type": "voucher"
}
```

