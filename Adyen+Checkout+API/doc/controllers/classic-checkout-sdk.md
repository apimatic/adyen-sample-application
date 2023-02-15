# Classic Checkout SDK

```ts
const classicCheckoutSDKController = new ClassicCheckoutSDKController(client);
```

## Class Name

`ClassicCheckoutSDKController`

## Methods

* [Post-Payment Session](../../doc/controllers/classic-checkout-sdk.md#post-payment-session)
* [Post-Payments-Result](../../doc/controllers/classic-checkout-sdk.md#post-payments-result)


# Post-Payment Session

Provides the data object that can be used to start the Checkout SDK. To set up the payment, pass its amount, currency, and other required parameters. We use this to optimise the payment flow and perform better risk assessment of the transaction.

For more information, refer to [How it works](https://docs.adyen.com/online-payments#howitworks).

```ts
async postPaymentSession(
  idempotencyKey?: string,
  body?: PaymentSetupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentSetupResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`PaymentSetupRequest \| undefined`](../../doc/models/payment-setup-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentSetupResponse`](../../doc/models/payment-setup-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const bodyAmount: Amount2 = {
  currency: 'EUR',
  value: BigInt(17408),
};

const body: PaymentSetupRequest = {
  amount: bodyAmount,
  countryCode: 'NL',
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'Your order number',
  returnUrl: 'app://',
};
body.channel = 'Android';
body.sessionValidity = '2017-04-06T13:09:13Z';
body.shopperLocale = 'nl_NL';
body.shopperReference = 'YOUR_UNIQUE_SHOPPER_ID';
body.token = 'TOKEN_YOU_GET_FROM_CHECKOUT_SDK';

try {
  const { result, ...httpResponse } = await classicCheckoutSDKController.postPaymentSession(idempotencyKey, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "paymentSession": "eyJjaGVja291dHNob3BwZXJCYXN..."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Payments-Result

Verifies the payment result using the payload returned from the Checkout SDK.

For more information, refer to [How it works](https://docs.adyen.com/online-payments#howitworks).

```ts
async postPaymentsResult(
  idempotencyKey?: string,
  body?: PaymentVerificationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentVerificationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`PaymentVerificationRequest \| undefined`](../../doc/models/payment-verification-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentVerificationResponse`](../../doc/models/payment-verification-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const body: PaymentVerificationRequest = {
  payload: 'VALUE_YOU_GET_FROM_CHECKOUT_SDK',
};

try {
  const { result, ...httpResponse } = await classicCheckoutSDKController.postPaymentsResult(idempotencyKey, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |

