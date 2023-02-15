
# Response Additional Data Billing Address

## Structure

`ResponseAdditionalDataBillingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddressCity` | `string \| undefined` | Optional | The billing address city passed in the payment request. |
| `billingAddressCountry` | `string \| undefined` | Optional | The billing address country passed in the payment request.<br><br>Example: NL |
| `billingAddressHouseNumberOrName` | `string \| undefined` | Optional | The billing address house number or name passed in the payment request. |
| `billingAddressPostalCode` | `string \| undefined` | Optional | The billing address postal code passed in the payment request.<br><br>Example: 1011 DJ |
| `billingAddressStateOrProvince` | `string \| undefined` | Optional | The billing address state or province passed in the payment request.<br><br>Example: NH |
| `billingAddressStreet` | `string \| undefined` | Optional | The billing address street passed in the payment request. |

## Example (as JSON)

```json
{
  "billingAddress.city": null,
  "billingAddress.country": null,
  "billingAddress.houseNumberOrName": null,
  "billingAddress.postalCode": null,
  "billingAddress.stateOrProvince": null,
  "billingAddress.street": null
}
```

