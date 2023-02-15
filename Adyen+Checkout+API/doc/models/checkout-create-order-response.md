
# Checkout Create Order Response

## Structure

`CheckoutCreateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `amount` | [`Amount11`](../../doc/models/amount-11.md) | Required | The initial amount of the order. |
| `expiresAt` | `string` | Required | The date that the order will expire. |
| `fraudResult` | [`FraudResult1 \| undefined`](../../doc/models/fraud-result-1.md) | Optional | The fraud result properties of the payment. |
| `orderData` | `string` | Required | The encrypted data that will be used by merchant for adding payments to the order. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `reference` | `string \| undefined` | Optional | The reference provided by merchant for creating the order. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `remainingAmount` | [`Amount12`](../../doc/models/amount-12.md) | Required | The remaining amount in the order. |
| `resultCode` | `string` | Required, Constant | The result of the order creation request.<br>The value is always **Success**.<br>**Default**: `'Success'` |

## Example (as JSON)

```json
{
  "amount": null,
  "expiresAt": null,
  "orderData": null,
  "remainingAmount": null,
  "resultCode": "Success"
}
```

