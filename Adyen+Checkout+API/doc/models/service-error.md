
# Service Error

## Structure

`ServiceError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**. |
| `errorCode` | `string \| undefined` | Optional | The error code mapped to the error message. |
| `errorType` | `string \| undefined` | Optional | The category of the error. |
| `message` | `string \| undefined` | Optional | A short explanation of the issue. |
| `pspReference` | `string \| undefined` | Optional | The PSP reference of the payment. |
| `status` | `number \| undefined` | Optional | The HTTP response status. |

## Example (as JSON)

```json
{
  "additionalData": null,
  "errorCode": null,
  "errorType": null,
  "message": null,
  "pspReference": null,
  "status": null
}
```

