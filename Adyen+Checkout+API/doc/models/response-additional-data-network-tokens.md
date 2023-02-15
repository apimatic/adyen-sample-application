
# Response Additional Data Network Tokens

## Structure

`ResponseAdditionalDataNetworkTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkTokenAvailable` | `string \| undefined` | Optional | Indicates whether a network token is available for the specified card. |
| `networkTokenBin` | `string \| undefined` | Optional | The Bank Identification Number of a tokenized card, which is the first six digits of a card number. |
| `networkTokenTokenSummary` | `string \| undefined` | Optional | The last four digits of a network token. |

## Example (as JSON)

```json
{
  "networkToken.available": null,
  "networkToken.bin": null,
  "networkToken.tokenSummary": null
}
```

