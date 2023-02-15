
# Create Apple Pay Session Request

## Structure

`CreateApplePaySessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | This is the name that your shoppers will see in the Apple Pay interface.<br><br>The value returned as `configuration.merchantName` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response. |
| `domainName` | `string` | Required | The domain name you provided when you added Apple Pay in your Customer Area.<br><br>This must match the `window.location.hostname` of the web shop. |
| `merchantIdentifier` | `string` | Required | Your merchant identifier registered with Apple Pay.<br><br>Use the value of the `configuration.merchantId` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response. |

## Example (as JSON)

```json
{
  "displayName": "displayName2",
  "domainName": "domainName4",
  "merchantIdentifier": "merchantIdentifier4"
}
```

