
# Payment Methods Response

## Structure

`PaymentMethodsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethods` | [`PaymentMethod[] \| undefined`](../../doc/models/payment-method.md) | Optional | Detailed list of payment methods required to generate payment forms. |
| `storedPaymentMethods` | [`StoredPaymentMethod2[] \| undefined`](../../doc/models/stored-payment-method-2.md) | Optional | List of all stored payment methods. |

## Example (as JSON)

```json
{
  "paymentMethods": null,
  "storedPaymentMethods": null
}
```

