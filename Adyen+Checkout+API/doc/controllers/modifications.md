# Modifications

```ts
const modificationsController = new ModificationsController(client);
```

## Class Name

`ModificationsController`

## Methods

* [Post-Cancels](../../doc/controllers/modifications.md#post-cancels)
* [Post-Payments-Payment Psp Reference-Amount Updates](../../doc/controllers/modifications.md#post-payments-payment-psp-reference-amount-updates)
* [Post-Payments-Payment Psp Reference-Cancels](../../doc/controllers/modifications.md#post-payments-payment-psp-reference-cancels)
* [Post-Payments-Payment Psp Reference-Captures](../../doc/controllers/modifications.md#post-payments-payment-psp-reference-captures)
* [Post-Payments-Payment Psp Reference-Refunds](../../doc/controllers/modifications.md#post-payments-payment-psp-reference-refunds)
* [Post-Payments-Payment Psp Reference-Reversals](../../doc/controllers/modifications.md#post-payments-payment-psp-reference-reversals)


# Post-Cancels

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**TECHNICAL_CANCEL** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment using the [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference), use the [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

```ts
async postCancels(
  idempotencyKey?: string,
  body?: CreateStandalonePaymentCancelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StandalonePaymentCancelResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreateStandalonePaymentCancelRequest \| undefined`](../../doc/models/create-standalone-payment-cancel-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StandalonePaymentCancelResource`](../../doc/models/standalone-payment-cancel-resource.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postCancels(idempotencyKey);
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


# Post-Payments-Payment Psp Reference-Amount Updates

Increases or decreases the authorised payment amount and returns a unique reference for this request. You get the outcome of the request asynchronously, in an [**AUTHORISATION_ADJUSTMENT** webhook](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes).

You can only update authorised amounts that have not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).

The amount you specify in the request is the updated amount, which is larger or smaller than the initial authorised amount.

For more information, refer to [Authorisation adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).

```ts
async postPaymentsPaymentPspReferenceAmountUpdates(
  paymentPspReference: string,
  idempotencyKey?: string,
  body?: CreatePaymentAmountUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentAmountUpdateResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentPspReference` | `string` | Template, Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentAmountUpdateRequest \| undefined`](../../doc/models/create-payment-amount-update-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentAmountUpdateResource`](../../doc/models/payment-amount-update-resource.md)

## Example Usage

```ts
const paymentPspReference = 'paymentPspReference2';
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postPaymentsPaymentPspReferenceAmountUpdates(paymentPspReference, idempotencyKey);
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


# Post-Payments-Payment Psp Reference-Cancels

Cancels the authorisation on a payment that has not yet been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/paymentPspReference/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCELLATION** webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).

If you want to cancel a payment but don't have the [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference), use the [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels) endpoint instead.

If you want to cancel a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).

```ts
async postPaymentsPaymentPspReferenceCancels(
  paymentPspReference: string,
  idempotencyKey?: string,
  body?: CreatePaymentCancelRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentCancelResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentPspReference` | `string` | Template, Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to cancel. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentCancelRequest \| undefined`](../../doc/models/create-payment-cancel-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentCancelResource`](../../doc/models/payment-cancel-resource.md)

## Example Usage

```ts
const paymentPspReference = 'paymentPspReference2';
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postPaymentsPaymentPspReferenceCancels(paymentPspReference, idempotencyKey);
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


# Post-Payments-Payment Psp Reference-Captures

Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CAPTURE** webhook](https://docs.adyen.com/online-payments/capture#capture-notification).

You can capture either the full authorised amount or a part of the authorised amount. By default, any unclaimed amount after a partial capture gets cancelled. This does not apply if you enabled multiple partial captures on your account and the payment method supports multiple partial captures.

[Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture) is the default setting for most payment methods. In these cases, you don't need to make capture requests. However, making capture requests for payments that are captured automatically does not result in double charges.

For more information, refer to [Capture](https://docs.adyen.com/online-payments/capture).

```ts
async postPaymentsPaymentPspReferenceCaptures(
  paymentPspReference: string,
  idempotencyKey?: string,
  body?: CreatePaymentCaptureRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentCaptureResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentPspReference` | `string` | Template, Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to capture. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentCaptureRequest \| undefined`](../../doc/models/create-payment-capture-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentCaptureResource`](../../doc/models/payment-capture-resource.md)

## Example Usage

```ts
const paymentPspReference = 'paymentPspReference2';
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postPaymentsPaymentPspReferenceCaptures(paymentPspReference, idempotencyKey);
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


# Post-Payments-Payment Psp Reference-Refunds

Refunds a payment that has been [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures), and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**REFUND** webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).

You can refund either the full captured amount or a part of the captured amount. You can also perform multiple partial refunds, as long as their sum doesn't exceed the captured amount.

> Some payment methods do not support partial refunds. To learn if a payment method supports partial refunds, refer to the payment method page such as [cards](https://docs.adyen.com/payment-methods/cards#supported-cards), [iDEAL](https://docs.adyen.com/payment-methods/ideal), or [Klarna](https://docs.adyen.com/payment-methods/klarna).

If you want to refund a payment but are not sure whether it has been captured, use the [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals) endpoint instead.

For more information, refer to [Refund](https://docs.adyen.com/online-payments/refund).

```ts
async postPaymentsPaymentPspReferenceRefunds(
  paymentPspReference: string,
  idempotencyKey?: string,
  body?: CreatePaymentRefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentRefundResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentPspReference` | `string` | Template, Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to refund. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentRefundRequest \| undefined`](../../doc/models/create-payment-refund-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentRefundResource`](../../doc/models/payment-refund-resource.md)

## Example Usage

```ts
const paymentPspReference = 'paymentPspReference2';
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postPaymentsPaymentPspReferenceRefunds(paymentPspReference, idempotencyKey);
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


# Post-Payments-Payment Psp Reference-Reversals

[Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds) a payment if it has already been captured, and [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels) a payment if it has not yet been captured. Returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CANCEL_OR_REFUND** webhook](https://docs.adyen.com/online-payments/reverse#cancel-or-refund-webhook).

The reversed amount is always the full payment amount.

> Do not use this request for payments that involve multiple partial captures.

For more information, refer to [Reversal](https://docs.adyen.com/online-payments/reversal).

```ts
async postPaymentsPaymentPspReferenceReversals(
  paymentPspReference: string,
  idempotencyKey?: string,
  body?: CreatePaymentReversalRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentReversalResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentPspReference` | `string` | Template, Required | The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to reverse. |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentReversalRequest \| undefined`](../../doc/models/create-payment-reversal-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentReversalResource`](../../doc/models/payment-reversal-resource.md)

## Example Usage

```ts
const paymentPspReference = 'paymentPspReference2';
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await modificationsController.postPaymentsPaymentPspReferenceReversals(paymentPspReference, idempotencyKey);
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

