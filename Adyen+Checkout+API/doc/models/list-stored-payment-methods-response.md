
# List Stored Payment Methods Response

## Structure

`ListStoredPaymentMethodsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string \| undefined` | Optional | Your merchant account. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `storedPaymentMethods` | [`StoredPaymentMethodResource[] \| undefined`](../../doc/models/stored-payment-method-resource.md) | Optional | List of all stored payment methods. |

## Example (as JSON)

```json
{
  "merchantAccount": null,
  "shopperReference": null,
  "storedPaymentMethods": null
}
```

