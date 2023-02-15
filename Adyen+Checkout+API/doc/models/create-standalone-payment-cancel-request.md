
# Create Standalone Payment Cancel Request

## Structure

`CreateStandalonePaymentCancelRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `paymentReference` | `string` | Required | The [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference) of the payment that you want to cancel. |
| `reference` | `string \| undefined` | Optional | Your reference for the cancel request. Maximum length: 80 characters. |

## Example (as JSON)

```json
{
  "merchantAccount": "merchantAccount8",
  "paymentReference": "paymentReference0",
  "reference": null
}
```

