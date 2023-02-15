
# Stored Payment Method Resource

## Structure

`StoredPaymentMethodResource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The brand of the card. |
| `expiryMonth` | `string \| undefined` | Optional | The month the card expires. |
| `expiryYear` | `string \| undefined` | Optional | The last two digits of the year the card expires. For example, **22** for the year 2022. |
| `externalResponseCode` | `string \| undefined` | Optional | The response code returned by an external system (for example after a provisioning operation). |
| `externalTokenReference` | `string \| undefined` | Optional | The token reference of a linked token in an external system (for example a network token reference). |
| `holderName` | `string \| undefined` | Optional | The unique payment method code. |
| `iban` | `string \| undefined` | Optional | The IBAN of the bank account. |
| `id` | `string \| undefined` | Optional | A unique identifier of this stored payment method. |
| `issuerName` | `string \| undefined` | Optional | The name of the issuer of token or card. |
| `lastFour` | `string \| undefined` | Optional | The last four digits of the PAN. |
| `name` | `string \| undefined` | Optional | The display name of the stored payment method. |
| `networkTxReference` | `string \| undefined` | Optional | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID. |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account holder. |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `shopperReference` | `string \| undefined` | Optional | Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.<br><br>> Your reference must not include personally identifiable information (PII), for example name or email address. |
| `supportedRecurringProcessingModels` | `string[] \| undefined` | Optional | Defines a recurring payment type.<br>Allowed values:<br><br>* `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.<br>* `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.<br>* `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount. |
| `type` | `string \| undefined` | Optional | The type of payment method. |

## Example (as JSON)

```json
{
  "brand": null,
  "expiryMonth": null,
  "expiryYear": null,
  "externalResponseCode": null,
  "externalTokenReference": null,
  "holderName": null,
  "iban": null,
  "id": null,
  "issuerName": null,
  "lastFour": null,
  "name": null,
  "networkTxReference": null,
  "ownerName": null,
  "shopperEmail": null,
  "shopperReference": null,
  "supportedRecurringProcessingModels": null,
  "type": null
}
```

