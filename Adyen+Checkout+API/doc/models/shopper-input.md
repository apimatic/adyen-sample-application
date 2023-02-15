
# Shopper Input

## Structure

`ShopperInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | [`BillingAddressEnum \| undefined`](../../doc/models/billing-address-enum.md) | Optional | Specifies visibility of billing address fields.<br><br>Permitted values:<br><br>* editable<br>* hidden<br>* readOnly |
| `deliveryAddress` | [`DeliveryAddressEnum \| undefined`](../../doc/models/delivery-address-enum.md) | Optional | Specifies visibility of delivery address fields.<br><br>Permitted values:<br><br>* editable<br>* hidden<br>* readOnly |
| `personalDetails` | [`PersonalDetailsEnum \| undefined`](../../doc/models/personal-details-enum.md) | Optional | Specifies visibility of personal details.<br><br>Permitted values:<br><br>* editable<br>* hidden<br>* readOnly |

## Example (as JSON)

```json
{
  "billingAddress": null,
  "deliveryAddress": null,
  "personalDetails": null
}
```

