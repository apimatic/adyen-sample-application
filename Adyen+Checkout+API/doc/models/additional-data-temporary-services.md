
# Additional Data Temporary Services

## Structure

`AdditionalDataTemporaryServices`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enhancedSchemeDataCustomerReference` | `string \| undefined` | Optional | Customer code, if supplied by a customer.<br><br>* Encoding: ASCII<br>* maxLength: 25 |
| `enhancedSchemeDataEmployeeName` | `string \| undefined` | Optional | Name or ID associated with the individual working in a temporary capacity.<br><br>* maxLength: 40 |
| `enhancedSchemeDataJobDescription` | `string \| undefined` | Optional | Description of the job or task of the individual working in a temporary capacity.<br><br>* maxLength: 40 |
| `enhancedSchemeDataRegularHoursRate` | `string \| undefined` | Optional | Amount paid per regular hours worked, minor units.<br><br>* maxLength: 7 |
| `enhancedSchemeDataRegularHoursWorked` | `string \| undefined` | Optional | Amount of time worked during a normal operation for the task or job.<br><br>* maxLength: 7 |
| `enhancedSchemeDataRequestName` | `string \| undefined` | Optional | Name of the individual requesting temporary services.<br><br>* maxLength: 40 |
| `enhancedSchemeDataTempStartDate` | `string \| undefined` | Optional | Date for the beginning of the pay period.<br><br>* Format: ddMMyy<br>* maxLength: 6 |
| `enhancedSchemeDataTempWeekEnding` | `string \| undefined` | Optional | Date of the end of the billing cycle.<br><br>* Format: ddMMyy<br>* maxLength: 6 |
| `enhancedSchemeDataTotalTaxAmount` | `string \| undefined` | Optional | Total tax amount, in minor units. For example, 2000 means USD 20.00<br><br>* maxLength: 12 |

## Example (as JSON)

```json
{
  "enhancedSchemeData.customerReference": null,
  "enhancedSchemeData.employeeName": null,
  "enhancedSchemeData.jobDescription": null,
  "enhancedSchemeData.regularHoursRate": null,
  "enhancedSchemeData.regularHoursWorked": null,
  "enhancedSchemeData.requestName": null,
  "enhancedSchemeData.tempStartDate": null,
  "enhancedSchemeData.tempWeekEnding": null,
  "enhancedSchemeData.totalTaxAmount": null
}
```

