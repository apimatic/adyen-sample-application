
# Fund Recipient

## Structure

`FundRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | The address where to send the invoice. |
| `paymentMethod` | [`Card2 \| undefined`](../../doc/models/card-2.md) | Optional | the used paymentMetohd |
| `shopperEmail` | `string \| undefined` | Optional | the email address of the person |
| `shopperName` | [`Name2 \| undefined`](../../doc/models/name-2.md) | Optional | the name of the person |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `subMerchant` | [`SubMerchant2 \| undefined`](../../doc/models/sub-merchant-2.md) | Optional | Required for Back-to-Back/ purchase driven load in Wallet transactions.<br>Contains the final merchant who will be receiving the money, also known as subMerchant, information. |
| `telephoneNumber` | `string \| undefined` | Optional | the telephone number of the person |
| `walletIdentifier` | `string \| undefined` | Optional | indicates where the money is going |
| `walletOwnerTaxId` | `string \| undefined` | Optional | indicates the tax identifier of the fund recepient |

## Example (as JSON)

```json
{
  "billingAddress": null,
  "paymentMethod": null,
  "shopperEmail": null,
  "shopperName": null,
  "shopperReference": null,
  "storedPaymentMethodId": null,
  "subMerchant": null,
  "telephoneNumber": null,
  "walletIdentifier": null,
  "walletOwnerTaxId": null
}
```

