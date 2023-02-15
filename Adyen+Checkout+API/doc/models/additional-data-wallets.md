
# Additional Data Wallets

## Structure

`AdditionalDataWallets`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `androidpayToken` | `string \| undefined` | Optional | The Android Pay token retrieved from the SDK. |
| `masterpassTransactionId` | `string \| undefined` | Optional | The Mastercard Masterpass Transaction ID retrieved from the SDK. |
| `paymentToken` | `string \| undefined` | Optional | The Apple Pay token retrieved from the SDK. |
| `paywithgoogleToken` | `string \| undefined` | Optional | The Google Pay token retrieved from the SDK. |
| `samsungpayToken` | `string \| undefined` | Optional | The Samsung Pay token retrieved from the SDK. |
| `visacheckoutCallId` | `string \| undefined` | Optional | The Visa Checkout Call ID retrieved from the SDK. |

## Example (as JSON)

```json
{
  "androidpay.token": null,
  "masterpass.transactionId": null,
  "payment.token": null,
  "paywithgoogle.token": null,
  "samsungpay.token": null,
  "visacheckout.callId": null
}
```

