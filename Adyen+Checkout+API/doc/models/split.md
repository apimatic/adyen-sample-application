
# Split

## Structure

`Split`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string \| undefined` | Optional | Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**. |
| `amount` | [`SplitAmount2`](../../doc/models/split-amount-2.md) | Required | The amount of this split. |
| `description` | `string \| undefined` | Optional | A description of this split. |
| `reference` | `string \| undefined` | Optional | Your reference for the split, which you can use to link the split to other operations such as captures and refunds.<br><br>This is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms. |
| `type` | [`Type10Enum`](../../doc/models/type-10-enum.md) | Required | The type of split.<br>Possible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**. |

## Example (as JSON)

```json
{
  "account": null,
  "amount": {
    "currency": null,
    "value": 110
  },
  "description": null,
  "reference": null,
  "type": "BalanceAccount"
}
```

