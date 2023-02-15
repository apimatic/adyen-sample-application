
# Phone 1

The mobile phone number provided by the Cardholder.

## Structure

`Phone1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cc` | `string \| undefined` | Optional | Country code. Length: 1–3 characters.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `subscriber` | `string \| undefined` | Optional | Subscriber number. Maximum length: 15 characters.<br>**Constraints**: *Maximum Length*: `15` |

## Example (as JSON)

```json
{
  "cc": null,
  "subscriber": null
}
```

