# Paymentlinks

```ts
const paymentlinksController = new PaymentlinksController(client);
```

## Class Name

`PaymentlinksController`

## Methods

* [Post-Payment Links](../../doc/controllers/paymentlinks.md#post-payment-links)
* [Get-Payment Links-Link Id](../../doc/controllers/paymentlinks.md#get-payment-links-link-id)
* [Patch-Payment Links-Link Id](../../doc/controllers/paymentlinks.md#patch-payment-links-link-id)


# Post-Payment Links

Creates a payment link to our hosted payment form where shoppers can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request.

For more information, refer to [Pay by Link documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).

```ts
async postPaymentLinks(
  idempotencyKey?: string,
  body?: CreatePaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreatePaymentLinkRequest \| undefined`](../../doc/models/create-payment-link-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentLinkResponse`](../../doc/models/payment-link-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const bodyAmount: Amount24 = {
  currency: 'BRL',
  value: BigInt(1250),
};

const bodyBillingAddress: Address3 = {
  city: 'São Paulo',
  country: 'BR',
  houseNumberOrName: '999',
  postalCode: '59000060',
  street: 'Roque Petroni Jr',
};
bodyBillingAddress.stateOrProvince = 'SP';

const bodyDeliveryAddress: Address2 = {
  city: 'São Paulo',
  country: 'BR',
  houseNumberOrName: '999',
  postalCode: '59000060',
  street: 'Roque Petroni Jr',
};
bodyDeliveryAddress.stateOrProvince = 'SP';

const body: CreatePaymentLinkRequest = {
  amount: bodyAmount,
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'YOUR_ORDER_NUMBER',
};
body.billingAddress = bodyBillingAddress;
body.countryCode = 'BR';
body.deliveryAddress = bodyDeliveryAddress;
body.shopperEmail = 'test@email.com';
body.shopperLocale = 'pt-BR';
body.shopperReference = 'YOUR_UNIQUE_SHOPPER_ID';

try {
  const { result, ...httpResponse } = await paymentLinksController.postPaymentLinks(idempotencyKey, body);
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
  "amount": {
    "currency": "BRL",
    "value": 1250
  },
  "billingAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "countryCode": "BR",
  "deliveryAddress": {
    "city": "São Paulo",
    "country": "BR",
    "houseNumberOrName": "999",
    "postalCode": "59000060",
    "stateOrProvince": "SP",
    "street": "Roque Petroni Jr"
  },
  "expiresAt": "2022-10-28T09:16:22Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "YOUR_ORDER_NUMBER",
  "reusable": false,
  "shopperEmail": "test@email.com",
  "shopperLocale": "pt-BR",
  "shopperReference": "YOUR_UNIQUE_SHOPPER_ID",
  "id": "PLE83C39B0A0DE0C1E",
  "status": "active",
  "url": "https://test.adyen.link/PLE83C39B0A0DE0C1E"
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


# Get-Payment Links-Link Id

Retrieves the payment link details using the payment link `id`.

```ts
async getPaymentLinksLinkId(
  linkId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `string` | Template, Required | Unique identifier of the payment link. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentLinkResponse`](../../doc/models/payment-link-response.md)

## Example Usage

```ts
const linkId = 'linkId6';
try {
  const { result, ...httpResponse } = await paymentLinksController.getPaymentLinksLinkId(linkId);
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
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "active",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
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


# Patch-Payment Links-Link Id

Updates the status of a payment link. Use this endpoint to [force the expiry of a payment link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).

```ts
async patchPaymentLinksLinkId(
  linkId: string,
  body?: UpdatePaymentLinkRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentLinkResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `string` | Template, Required | Unique identifier of the payment link. |
| `body` | [`UpdatePaymentLinkRequest \| undefined`](../../doc/models/update-payment-link-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentLinkResponse`](../../doc/models/payment-link-response.md)

## Example Usage

```ts
const linkId = 'linkId6';
const contentType = null;
const body: UpdatePaymentLinkRequest = {
  status: 'expired',
};

try {
  const { result, ...httpResponse } = await paymentLinksController.patchPaymentLinksLinkId(linkId, body);
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
  "amount": {
    "currency": "EUR",
    "value": 8700
  },
  "countryCode": "NL",
  "expiresAt": "2021-04-08T14:06:39Z",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "reference": "shopper-reference-ekvL83",
  "shopperLocale": "hu-HU",
  "shopperReference": "shopper-reference-LZfdWZ",
  "status": "expired",
  "url": "https://test.adyen.link/PL61C53A8B97E6915A",
  "id": "PL61C53A8B97E6915A"
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

