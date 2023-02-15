
# Payment Reversal Resource

## Structure

`PaymentReversalResource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentPspReference` | `string` | Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to reverse. |
| `pspReference` | `string` | Required | Adyen's 16-character reference associated with the reversal request. |
| `reference` | `string \| undefined` | Optional | Your reference for the reversal request. |
| `status` | `string` | Required, Constant | The status of your request. This will always have the value **received**.<br>**Default**: `'received'` |

## Example (as JSON)

```json
{
  "merchantAccount": null,
  "paymentPspReference": null,
  "pspReference": null,
  "status": "received"
}
```

