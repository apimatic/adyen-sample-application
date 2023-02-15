
# Details Request

## Structure

`DetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationData` | [`DetailsRequestAuthenticationData2 \| undefined`](../../doc/models/details-request-authentication-data-2.md) | Optional | Data for 3DS authentication. |
| `details` | [`PaymentCompletionDetails2`](../../doc/models/payment-completion-details-2.md) | Required | Use this collection to submit the details that were returned as a result of the `/payments` call. |
| `paymentData` | `string \| undefined` | Optional | The `paymentData` value from the `/payments` response. Required if the `/payments` response returns this value.<br>**Constraints**: *Maximum Length*: `100000` |
| `threeDSAuthenticationOnly` | `boolean \| undefined` | Optional | Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously. |

## Example (as JSON)

```json
{
  "authenticationData": null,
  "details": {
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
  },
  "paymentData": null,
  "threeDSAuthenticationOnly": null
}
```

