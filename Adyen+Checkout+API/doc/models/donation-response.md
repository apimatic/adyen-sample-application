
# Donation Response

## Structure

`DonationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount26 \| undefined`](../../doc/models/amount-26.md) | Optional | Authorised amount in the transaction. |
| `donationAccount` | `string \| undefined` | Optional | The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding). |
| `id` | `string \| undefined` | Optional | Your unique resource identifier. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account identifier, with which you want to process the transaction. |
| `payment` | [`PaymentResponse5 \| undefined`](../../doc/models/payment-response-5.md) | Optional | Action to be taken for completing the payment. |
| `reference` | `string \| undefined` | Optional | The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens ("-"). Maximum length: 80 characters. |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | The status of the donation transaction.<br><br>Possible values:<br><br>* **completed**<br>* **pending**<br>* **refused** |

## Example (as JSON)

```json
{
  "amount": null,
  "donationAccount": null,
  "id": null,
  "merchantAccount": null,
  "payment": null,
  "reference": null,
  "status": null
}
```

