
# Details Request Authentication Data 2

Data for 3DS authentication.

## Structure

`DetailsRequestAuthenticationData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br>Default: *false**.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "authenticationOnly": null
}
```

