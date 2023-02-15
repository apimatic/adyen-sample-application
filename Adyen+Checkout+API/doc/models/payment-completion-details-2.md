
# Payment Completion Details 2

Use this collection to submit the details that were returned as a result of the `/payments` call.

## Structure

`PaymentCompletionDetails2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mD` | `string \| undefined` | Optional | A payment session identifier returned by the card issuer.<br>**Constraints**: *Maximum Length*: `20000` |
| `paReq` | `string \| undefined` | Optional | (3D) Payment Authentication Request data for the card issuer. |
| `paRes` | `string \| undefined` | Optional | (3D) Payment Authentication Response data by the card issuer.<br>**Constraints**: *Maximum Length*: `20000` |
| `billingToken` | `string \| undefined` | Optional | PayPal-generated token for recurring payments. |
| `cupsecureplusSmscode` | `string \| undefined` | Optional | The SMS verification code collected from the shopper. |
| `facilitatorAccessToken` | `string \| undefined` | Optional | PayPal-generated third party access token. |
| `oneTimePasscode` | `string \| undefined` | Optional | A random number sent to the mobile phone number of the shopper to verify the payment. |
| `orderID` | `string \| undefined` | Optional | PayPal-assigned ID for the order. |
| `payerID` | `string \| undefined` | Optional | PayPal-assigned ID for the payer (shopper). |
| `payload` | `string \| undefined` | Optional | Payload appended to the `returnURL` as a result of the redirect.<br>**Constraints**: *Maximum Length*: `20000` |
| `paymentID` | `string \| undefined` | Optional | PayPal-generated ID for the payment. |
| `paymentStatus` | `string \| undefined` | Optional | Value passed from the WeChat MiniProgram `wx.requestPayment` **complete** callback. Possible values: any value starting with `requestPayment:`. |
| `redirectResult` | `string \| undefined` | Optional | The result of the redirect as appended to the `returnURL`.<br>**Constraints**: *Maximum Length*: `20000` |
| `resultCode` | `string \| undefined` | Optional | Value you received from the WeChat Pay SDK. |
| `threeDSResult` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameters: `transStatus`, `authorisationToken`.<br>**Constraints**: *Maximum Length*: `50000` |
| `threeds2ChallengeResult` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `transStatus`.<br>**Constraints**: *Maximum Length*: `50000` |
| `threeds2Fingerprint` | `string \| undefined` | Optional | Base64-encoded string returned by the Component after the challenge flow. It contains the following parameter: `threeDSCompInd`.<br>**Constraints**: *Maximum Length*: `100000` |

## Example (as JSON)

```json
{
  "MD": null,
  "PaReq": null,
  "PaRes": null,
  "billingToken": null,
  "cupsecureplus.smscode": null,
  "facilitatorAccessToken": null,
  "oneTimePasscode": null,
  "orderID": null,
  "payerID": null,
  "payload": null,
  "paymentID": null,
  "paymentStatus": null,
  "redirectResult": null,
  "resultCode": null,
  "threeDSResult": null,
  "threeds2.challengeResult": null,
  "threeds2.fingerprint": null
}
```

