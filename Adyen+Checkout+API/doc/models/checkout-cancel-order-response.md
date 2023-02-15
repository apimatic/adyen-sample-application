
# Checkout Cancel Order Response

## Structure

`CheckoutCancelOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string` | Required | A unique reference of the cancellation request. |
| `resultCode` | `string` | Required, Constant | The result of the cancellation request.<br><br>Possible values:<br><br>* **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.<br>**Default**: `'Received'` |

## Example (as JSON)

```json
{
  "pspReference": null,
  "resultCode": "Received"
}
```

