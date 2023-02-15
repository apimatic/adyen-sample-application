
# Card 2

the used paymentMetohd

## Structure

`Card2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | Secondary brand of the card. For example: **plastix**, **hmclub**. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `cupsecureplusSmscode` | `string \| undefined` | Optional | - |
| `cvc` | `string \| undefined` | Optional | The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `encryptedCardNumber` | `string` | Required | The encrypted card number.<br>**Constraints**: *Maximum Length*: `10000` |
| `encryptedExpiryMonth` | `string` | Required | The encrypted card expiry month.<br>**Constraints**: *Maximum Length*: `10000` |
| `encryptedExpiryYear` | `string` | Required | The encrypted card expiry year.<br>**Constraints**: *Maximum Length*: `10000` |
| `encryptedSecurityCode` | `string \| undefined` | Optional | The encrypted card verification code.<br>**Constraints**: *Maximum Length*: `10000` |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `holderName` | `string \| undefined` | Optional | The name of the card holder. |
| `networkPaymentReference` | `string \| undefined` | Optional | The network token reference. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment. |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `threeDS2SdkVersion` | `string \| undefined` | Optional | Version of the 3D Secure 2 mobile SDK.<br>**Constraints**: *Maximum Length*: `12` |
| `type` | [`Type8Enum \| undefined`](../../doc/models/type-8-enum.md) | Optional | Default payment method details. Common for scheme payment methods, and for simple payment method details.<br>**Default**: `Type8Enum.Scheme` |

## Example (as JSON)

```json
{
  "brand": null,
  "checkoutAttemptId": null,
  "cupsecureplus.smscode": null,
  "cvc": null,
  "encryptedCardNumber": "encryptedCardNumber2",
  "encryptedExpiryMonth": "encryptedExpiryMonth4",
  "encryptedExpiryYear": "encryptedExpiryYear0",
  "encryptedSecurityCode": null,
  "expiryMonth": null,
  "expiryYear": null,
  "fundingSource": null,
  "holderName": null,
  "networkPaymentReference": null,
  "number": null,
  "recurringDetailReference": null,
  "shopperNotificationReference": null,
  "storedPaymentMethodId": null,
  "threeDS2SdkVersion": null,
  "type": null
}
```

