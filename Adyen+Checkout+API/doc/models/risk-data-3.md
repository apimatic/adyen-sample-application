
# Risk Data 3

Contains risk data, such as client-side data, used to identify risk for a transaction.

## Structure

`RiskData3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientData` | `string \| undefined` | Optional | Contains client-side data, like the device fingerprint, cookies, and specific browser settings. |
| `customFields` | `Record<string, string> \| undefined` | Optional | Any custom fields used as part of the input to configured risk rules. |
| `fraudOffset` | `number \| undefined` | Optional | An integer value that is added to the normal fraud score. The value can be either positive or negative. |
| `profileReference` | `string \| undefined` | Optional | The risk profile to assign to this payment. When left empty, the merchant-level account's default risk profile will be applied. |

## Example (as JSON)

```json
{
  "clientData": null,
  "customFields": null,
  "fraudOffset": null,
  "profileReference": null
}
```

