
# Split Amount 2

The amount of this split.

## Structure

`SplitAmount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).<br><br>If this value is not provided, the currency in which the payment is made will be used.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `value` | `bigint` | Required | The amount in [minor units](https://docs.adyen.com/development-resources/currency-codes). |

## Example (as JSON)

```json
{
  "currency": null,
  "value": 64
}
```

