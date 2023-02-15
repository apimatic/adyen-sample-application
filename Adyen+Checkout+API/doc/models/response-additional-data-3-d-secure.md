
# Response Additional Data 3 D Secure

## Structure

`ResponseAdditionalData3DSecure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardHolderInfo` | `string \| undefined` | Optional | Information provided by the issuer to the cardholder. If this field is present, you need to display this information to the cardholder. |
| `cavv` | `string \| undefined` | Optional | The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication session, as a Base64-encoded 20-byte array. |
| `cavvAlgorithm` | `string \| undefined` | Optional | The CAVV algorithm used. |
| `scaExemptionRequested` | `string \| undefined` | Optional | Shows the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that Adyen requested for the payment.<br><br>Possible values:<br><br>* **lowValue**<br>* **secureCorporate**<br>* **trustedBeneficiary**<br>* **transactionRiskAnalysis** |
| `threeds2CardEnrolled` | `boolean \| undefined` | Optional | Indicates whether a card is enrolled for 3D Secure 2. |

## Example (as JSON)

```json
{
  "cardHolderInfo": null,
  "cavv": null,
  "cavvAlgorithm": null,
  "scaExemptionRequested": null,
  "threeds2.cardEnrolled": null
}
```

