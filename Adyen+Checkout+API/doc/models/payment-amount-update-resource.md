
# Payment Amount Update Resource

## Structure

`PaymentAmountUpdateResource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount28`](../../doc/models/amount-28.md) | Required | The updated amount. |
| `industryUsage` | [`IndustryUsage1Enum \| undefined`](../../doc/models/industry-usage-1-enum.md) | Optional | The reason for the amount update. Possible values:<br><br>* **delayedCharge**<br>* **noShow**<br>* **installment** |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to update. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the amount update request. |
| `reference` | `string` | Required | Your reference for the amount update request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information). |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br>**Default**: `'received'` |

## Example (as JSON)

```json
{
  "amount": null,
  "merchantAccount": null,
  "paymentPspReference": null,
  "pspReference": null,
  "reference": null,
  "status": "received"
}
```

