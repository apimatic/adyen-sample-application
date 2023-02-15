
# Response Additional Data Installments

## Structure

`ResponseAdditionalDataInstallments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installmentPaymentDataInstallmentType` | `string \| undefined` | Optional | Type of installment. The value of `installmentType` should be **IssuerFinanced**. |
| `installmentPaymentDataOptionItemNrAnnualPercentageRate` | `string \| undefined` | Optional | Annual interest rate. |
| `installmentPaymentDataOptionItemNrFirstInstallmentAmount` | `string \| undefined` | Optional | First Installment Amount in minor units. |
| `installmentPaymentDataOptionItemNrInstallmentFee` | `string \| undefined` | Optional | Installment fee amount in minor units. |
| `installmentPaymentDataOptionItemNrInterestRate` | `string \| undefined` | Optional | Interest rate for the installment period. |
| `installmentPaymentDataOptionItemNrMaximumNumberOfInstallments` | `string \| undefined` | Optional | Maximum number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrMinimumNumberOfInstallments` | `string \| undefined` | Optional | Minimum number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrNumberOfInstallments` | `string \| undefined` | Optional | Total number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrSubsequentInstallmentAmount` | `string \| undefined` | Optional | Subsequent Installment Amount in minor units. |
| `installmentPaymentDataOptionItemNrTotalAmountDue` | `string \| undefined` | Optional | Total amount in minor units. |
| `installmentPaymentDataPaymentOptions` | `string \| undefined` | Optional | Possible values:<br><br>* PayInInstallmentsOnly<br>* PayInFullOnly<br>* PayInFullOrInstallments |
| `installmentsValue` | `string \| undefined` | Optional | The number of installments that the payment amount should be charged with.<br><br>Example: 5<br><br>> Only relevant for card payments in countries that support installments. |

## Example (as JSON)

```json
{
  "installmentPaymentData.installmentType": null,
  "installmentPaymentData.option[itemNr].annualPercentageRate": null,
  "installmentPaymentData.option[itemNr].firstInstallmentAmount": null,
  "installmentPaymentData.option[itemNr].installmentFee": null,
  "installmentPaymentData.option[itemNr].interestRate": null,
  "installmentPaymentData.option[itemNr].maximumNumberOfInstallments": null,
  "installmentPaymentData.option[itemNr].minimumNumberOfInstallments": null,
  "installmentPaymentData.option[itemNr].numberOfInstallments": null,
  "installmentPaymentData.option[itemNr].subsequentInstallmentAmount": null,
  "installmentPaymentData.option[itemNr].totalAmountDue": null,
  "installmentPaymentData.paymentOptions": null,
  "installments.value": null
}
```

