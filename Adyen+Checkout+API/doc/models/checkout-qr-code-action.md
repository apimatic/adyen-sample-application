
# Checkout Qr Code Action

## Structure

`CheckoutQrCodeAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Expiry time of the QR code. |
| `paymentData` | `string \| undefined` | Optional | A value that must be submitted to the `/payments/details` endpoint to verify this payment. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `qrCodeData` | `string \| undefined` | Optional | The contents of the QR code as a UTF8 string. |
| `type` | `string` | Required, Constant | **qrCode**<br>**Default**: `'qrCode'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example (as JSON)

```json
{
  "type": "qrCode"
}
```

