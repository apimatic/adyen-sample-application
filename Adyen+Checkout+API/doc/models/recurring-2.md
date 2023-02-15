
# Recurring 2

The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).

## Structure

`Recurring2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contract` | [`ContractEnum \| undefined`](../../doc/models/contract-enum.md) | Optional | The type of recurring contract to be used.<br>Possible values:<br><br>* `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).<br>* `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).<br>* `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.<br>* `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts). |
| `recurringDetailName` | `string \| undefined` | Optional | A descriptive name for this detail. |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Only for 3D Secure 2. |
| `recurringFrequency` | `string \| undefined` | Optional | Minimum number of days between authorisations. Only for 3D Secure 2. |
| `tokenService` | [`TokenServiceEnum \| undefined`](../../doc/models/token-service-enum.md) | Optional | The name of the token service. |

## Example (as JSON)

```json
{
  "contract": null,
  "recurringDetailName": null,
  "recurringExpiry": null,
  "recurringFrequency": null,
  "tokenService": null
}
```

