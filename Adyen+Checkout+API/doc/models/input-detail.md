
# Input Detail

## Structure

`InputDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configuration` | `Record<string, string> \| undefined` | Optional | Configuration parameters for the required input. |
| `details` | [`SubInputDetail[] \| undefined`](../../doc/models/sub-input-detail.md) | Optional | Input details can also be provided recursively. |
| `inputDetails` | [`SubInputDetail[] \| undefined`](../../doc/models/sub-input-detail.md) | Optional | Input details can also be provided recursively (deprecated). |
| `itemSearchUrl` | `string \| undefined` | Optional | In case of a select, the URL from which to query the items. |
| `items` | [`Item[] \| undefined`](../../doc/models/item.md) | Optional | In case of a select, the items to choose from. |
| `key` | `string \| undefined` | Optional | The value to provide in the result. |
| `optional` | `boolean \| undefined` | Optional | True if this input value is optional. |
| `type` | `string \| undefined` | Optional | The type of the required input. |
| `value` | `string \| undefined` | Optional | The value can be pre-filled, if available. |

## Example (as JSON)

```json
{
  "configuration": null,
  "details": null,
  "inputDetails": null,
  "itemSearchUrl": null,
  "items": null,
  "key": null,
  "optional": null,
  "type": null,
  "value": null
}
```

