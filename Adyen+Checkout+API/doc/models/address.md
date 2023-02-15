
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string` | Required | The name of the city. Maximum length: 3000 characters.<br>**Constraints**: *Maximum Length*: `3000` |
| `country` | `string` | Required | The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br><br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`. |
| `houseNumberOrName` | `string` | Required | The number or name of the house. Maximum length: 3000 characters.<br>**Constraints**: *Maximum Length*: `3000` |
| `postalCode` | `string` | Required | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries. |
| `stateOrProvince` | `string \| undefined` | Optional | The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>> Required for the US and Canada. |
| `street` | `string` | Required | The name of the street. Maximum length: 3000 characters.<br><br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.<br>**Constraints**: *Maximum Length*: `3000` |

## Example (as JSON)

```json
{
  "city": "city0",
  "country": "country4",
  "houseNumberOrName": "houseNumberOrName8",
  "postalCode": "postalCode8",
  "stateOrProvince": null,
  "street": "street0"
}
```

