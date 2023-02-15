# Orders

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Post-Orders](../../doc/controllers/orders.md#post-orders)
* [Post-Orders-Cancel](../../doc/controllers/orders.md#post-orders-cancel)
* [Post-Payment Methods-Balance](../../doc/controllers/orders.md#post-payment-methods-balance)


# Post-Orders

Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.

```ts
async postOrders(
  idempotencyKey?: string,
  body?: CheckoutCreateOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutCreateOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CheckoutCreateOrderRequest \| undefined`](../../doc/models/checkout-create-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckoutCreateOrderResponse`](../../doc/models/checkout-create-order-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const bodyAmount: Amount10 = {
  currency: 'EUR',
  value: BigInt(2500),
};

const body: CheckoutCreateOrderRequest = {
  amount: bodyAmount,
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'YOUR_ORDER_REFERENCE',
};

try {
  const { result, ...httpResponse } = await ordersController.postOrders(idempotencyKey, body);
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


# Post-Orders-Cancel

Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.

```ts
async postOrdersCancel(
  idempotencyKey?: string,
  body?: CheckoutCancelOrderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutCancelOrderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CheckoutCancelOrderRequest \| undefined`](../../doc/models/checkout-cancel-order-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckoutCancelOrderResponse`](../../doc/models/checkout-cancel-order-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const bodyOrder: CheckoutOrder5 = {
  orderData: '823fh892f8f18f4...148f13f9f3f',
  pspReference: '8815517812932012',
};

const body: CheckoutCancelOrderRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  order: bodyOrder,
};

try {
  const { result, ...httpResponse } = await ordersController.postOrdersCancel(idempotencyKey, body);
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
  "pspReference": "8816178914079738",
  "resultCode": "Received"
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


# Post-Payment Methods-Balance

Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.

```ts
async postPaymentMethodsBalance(
  idempotencyKey?: string,
  body?: CheckoutBalanceCheckRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutBalanceCheckResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CheckoutBalanceCheckRequest \| undefined`](../../doc/models/checkout-balance-check-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckoutBalanceCheckResponse`](../../doc/models/checkout-balance-check-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
try {
  const { result, ...httpResponse } = await ordersController.postPaymentMethodsBalance(idempotencyKey);
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
  "additionalData": {
    "nonScheme.transactionLimit": "5000",
    "nonScheme.transactionLimitCcy": "EUR"
  },
  "pspReference": "851617891188737F",
  "resultCode": "Success",
  "balance": {
    "currency": "EUR",
    "value": 888
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

