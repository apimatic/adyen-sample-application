
# Create Payment Amount Update Request

## Structure

`CreatePaymentAmountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount22`](../../doc/models/amount-22.md) | Required | The updated amount. The `currency` must match the currency used in authorisation. |
| `industryUsage` | [`IndustryUsage1Enum \| undefined`](../../doc/models/industry-usage-1-enum.md) | Optional | The reason for the amount update. Possible values:<br><br>* **delayedCharge**<br>* **noShow**<br>* **installment** |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `reference` | `string \| undefined` | Optional | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). |

## Example (as JSON)

```json
{
  "amount": {
    "currency": "currency2",
    "value": 110
  },
  "industryUsage": null,
  "merchantAccount": "merchantAccount8",
  "reference": null,
  "splits": null
}
```

