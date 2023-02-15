
# Payment Verification Response

## Structure

`PaymentVerificationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `fraudResult` | [`FraudResult1 \| undefined`](../../doc/models/fraud-result-1.md) | Optional | The fraud result properties of the payment. |
| `merchantReference` | `string` | Required | A unique value that you provided in the initial `/paymentSession` request as a `reference` field. |
| `order` | [`CheckoutOrderResponse1 \| undefined`](../../doc/models/checkout-order-response-1.md) | Optional | Contains updated information regarding the order in case order information was provided in the request. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `refusalReasonCode` | `string \| undefined` | Optional | Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `resultCode` | [`ResultCode1Enum \| undefined`](../../doc/models/result-code-1-enum.md) | Optional | The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).<br><br>Possible values:<br><br>* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.<br>* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).<br>* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.<br>* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.<br>* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.<br>* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.<br>* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.<br>* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.<br>* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.<br>* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.<br>* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state. |
| `serviceError` | [`ServiceError22 \| undefined`](../../doc/models/service-error-22.md) | Optional | The type of the error. |
| `shopperLocale` | `string` | Required | The shopperLocale value provided in the payment request. |

## Example (as JSON)

```json
{
  "additionalData": null,
  "fraudResult": null,
  "merchantReference": "merchantReference6",
  "order": null,
  "pspReference": null,
  "refusalReason": null,
  "refusalReasonCode": null,
  "resultCode": null,
  "serviceError": null,
  "shopperLocale": "shopperLocale0"
}
```

