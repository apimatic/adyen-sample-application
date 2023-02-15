# Utility

```ts
const utilityController = new UtilityController(client);
```

## Class Name

`UtilityController`

## Methods

* [Post-Apple Pay-Sessions](../../doc/controllers/utility.md#post-apple-pay-sessions)
* [Post-Origin Keys](../../doc/controllers/utility.md#post-origin-keys)


# Post-Apple Pay-Sessions

You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate.

The endpoint returns the Apple Pay session data which you need to complete the [Apple Pay session validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).

```ts
async postApplePaySessions(
  idempotencyKey?: string,
  body?: CreateApplePaySessionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApplePaySessionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CreateApplePaySessionRequest \| undefined`](../../doc/models/create-apple-pay-session-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApplePaySessionResponse`](../../doc/models/apple-pay-session-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const body: CreateApplePaySessionRequest = {
  displayName: 'YOUR_MERCHANT_NAME',
  domainName: 'YOUR_DOMAIN_NAME',
  merchantIdentifier: 'YOUR_MERCHANT_ID',
};

try {
  const { result, ...httpResponse } = await utilityController.postApplePaySessions(idempotencyKey, body);
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
  "data": "eyJ2Z..."
}
```


# Post-Origin Keys

**This endpoint is deprecated.**

This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.

> If you're still using origin key for your Web Drop-in or Components integration, we recommend [switching to client key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key). This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form.

```ts
async postOriginKeys(
  idempotencyKey?: string,
  body?: CheckoutUtilityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutUtilityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `idempotencyKey` | `string \| undefined` | Header, Optional | A unique identifier for the message with a maximum of 64 characters (we recommend a UUID). |
| `body` | [`CheckoutUtilityRequest \| undefined`](../../doc/models/checkout-utility-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckoutUtilityResponse`](../../doc/models/checkout-utility-response.md)

## Example Usage

```ts
const contentType = null;
const idempotencyKey = '37ca9c97-d1d1-4c62-89e8-706891a563ed';
const bodyOriginDomains: string[] = ['https://www.your-domain1.com', 'https://www.your-domain2.com', 'https://www.your-domain3.com'];
const body: CheckoutUtilityRequest = {
  originDomains: bodyOriginDomains,
};

try {
  const { result, ...httpResponse } = await utilityController.postOriginKeys(idempotencyKey, body);
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
  "originKeys": {
    "https://www.your-domain1.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4xLmNvbQ.pvbYlrXz0ICP4kwMJXDGDLVMqALhwXr1MSRjT-fkhvw",
    "https://www.your-domain3.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4zLmNvbQ.FrTpVz7_RzAywKasM0kXCRoMfoMkKIKaxjFymRGORIc",
    "https://www.your-domain2.com": "pub.v2.8116178901076090.aHR0cHM6Ly93d3cueW91ci1kb21haW4yLmNvbQ.LdN9kvJ35fYFFiBSJA4idMnwwxJ5_yXpeNS__Ap5wkg"
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

