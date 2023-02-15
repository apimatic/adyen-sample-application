
# Configuration

## Structure

`Configuration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `avs` | [`Avs1 \| undefined`](../../doc/models/avs-1.md) | Optional | Describes the configuration for AVS ([Address Verification System](https://en.wikipedia.org/wiki/Address_Verification_System)). |
| `cardHolderName` | [`CardHolderNameEnum \| undefined`](../../doc/models/card-holder-name-enum.md) | Optional | Determines whether the cardholder name should be provided or not.<br><br>Permitted values:<br><br>* NONE<br>* OPTIONAL<br>* REQUIRED |
| `installments` | [`InstallmentsNumber2 \| undefined`](../../doc/models/installments-number-2.md) | Optional | Describes the configuration for [installment payments](https://docs.adyen.com/payment-methods/cards/credit-card-installments). |
| `shopperInput` | [`ShopperInput2 \| undefined`](../../doc/models/shopper-input-2.md) | Optional | Determines how to display the details fields. |

## Example (as JSON)

```json
{
  "avs": null,
  "cardHolderName": null,
  "installments": null,
  "shopperInput": null
}
```

