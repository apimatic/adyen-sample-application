
# Application Info

## Structure

`ApplicationInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenLibrary` | [`CommonField4 \| undefined`](../../doc/models/common-field-4.md) | Optional | Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc. |
| `adyenPaymentSource` | [`CommonField1 \| undefined`](../../doc/models/common-field-1.md) | Optional | Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc. |
| `externalPlatform` | [`ExternalPlatform2 \| undefined`](../../doc/models/external-platform-2.md) | Optional | Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc. |
| `merchantApplication` | [`CommonField2 \| undefined`](../../doc/models/common-field-2.md) | Optional | Merchant developed software, such as cashier application, used to interact with the Adyen API. |
| `merchantDevice` | [`MerchantDevice2 \| undefined`](../../doc/models/merchant-device-2.md) | Optional | Merchant device information. |
| `shopperInteractionDevice` | [`ShopperInteractionDevice2 \| undefined`](../../doc/models/shopper-interaction-device-2.md) | Optional | Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests. |

## Example (as JSON)

```json
{
  "adyenLibrary": null,
  "adyenPaymentSource": null,
  "externalPlatform": null,
  "merchantApplication": null,
  "merchantDevice": null,
  "shopperInteractionDevice": null
}
```

