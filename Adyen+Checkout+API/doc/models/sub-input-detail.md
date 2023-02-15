
# Sub Input Detail

## Structure

`SubInputDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configuration` | `Record<string, string> \| undefined` | Optional | Configuration parameters for the required input. |
| `items` | [`Item[] \| undefined`](../../doc/models/item.md) | Optional | In case of a select, the items to choose from. |
| `key` | `string \| undefined` | Optional | The value to provide in the result. |
| `optional` | `boolean \| undefined` | Optional | True if this input is optional to provide. |
| `type` | `string \| undefined` | Optional | The type of the required input. |
| `value` | `string \| undefined` | Optional | The value can be pre-filled, if available. |

## Example (as JSON)

```json
{
  "configuration": null,
  "items": null,
  "key": null,
  "optional": null,
  "type": null,
  "value": null
}
```

