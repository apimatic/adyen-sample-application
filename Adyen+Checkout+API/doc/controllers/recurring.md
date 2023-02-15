# Recurring

```ts
const recurringController = new RecurringController(client);
```

## Class Name

`RecurringController`

## Methods

* [Get-Stored Payment Methods](../../doc/controllers/recurring.md#get-stored-payment-methods)
* [Delete-Stored Payment Methods-Recurring Id](../../doc/controllers/recurring.md#delete-stored-payment-methods-recurring-id)


# Get-Stored Payment Methods

Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.

```ts
async getStoredPaymentMethods(
  shopperReference?: string,
  merchantAccount?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListStoredPaymentMethodsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shopperReference` | `string \| undefined` | Query, Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `merchantAccount` | `string \| undefined` | Query, Optional | Your merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListStoredPaymentMethodsResponse`](../../doc/models/list-stored-payment-methods-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await recurringController.getStoredPaymentMethods();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete-Stored Payment Methods-Recurring Id

Deletes the token identified in the path. The token can no longer be used with payment requests.

```ts
async deleteStoredPaymentMethodsRecurringId(
  recurringId: string,
  shopperReference?: string,
  merchantAccount?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredPaymentMethodResource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recurringId` | `string` | Template, Required | The unique identifier of the token. |
| `shopperReference` | `string \| undefined` | Query, Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `merchantAccount` | `string \| undefined` | Query, Optional | Your merchant account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StoredPaymentMethodResource`](../../doc/models/stored-payment-method-resource.md)

## Example Usage

```ts
const recurringId = 'recurringId0';
try {
  const { result, ...httpResponse } = await recurringController.deleteStoredPaymentMethodsRecurringId(recurringId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

