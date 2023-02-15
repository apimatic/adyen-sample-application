
# Three DS2 Request Data

## Structure

`ThreeDS2RequestData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acctInfo` | [`AcctInfo1 \| undefined`](../../doc/models/acct-info-1.md) | Optional | Additional information about the Cardholder’s account provided by the 3DS Requestor. |
| `acctType` | [`AcctTypeEnum \| undefined`](../../doc/models/acct-type-enum.md) | Optional | Indicates the type of account. For example, for a multi-account card product. Length: 2 characters. Allowed values:<br><br>* **01** — Not applicable<br>* **02** — Credit<br>* **03** — Debit<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `acquirerBIN` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform. |
| `acquirerMerchantID` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform. |
| `addrMatch` | [`AddrMatchEnum \| undefined`](../../doc/models/addr-match-enum.md) | Optional | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Allowed values:<br><br>* **Y** — Shipping Address matches Billing Address.<br>* **N** — Shipping Address does not match Billing Address.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `authenticationOnly` | `boolean \| undefined` | Optional | If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.<br>**Default**: `false` |
| `challengeIndicator` | [`ChallengeIndicatorEnum \| undefined`](../../doc/models/challenge-indicator-enum.md) | Optional | Possibility to specify a preference for receiving a challenge from the issuer.<br>Allowed values:<br><br>* `noPreference`<br>* `requestNoChallenge`<br>* `requestChallenge`<br>* `requestChallengeAsMandate` |
| `deviceChannel` | `string` | Required | The environment of the shopper.<br>Allowed values:<br><br>* `app`<br>* `browser` |
| `deviceRenderOptions` | [`DeviceRenderOptions2 \| undefined`](../../doc/models/device-render-options-2.md) | Optional | Display options for the 3D Secure 2 SDK.<br>Optional and only for `deviceChannel` **app**. |
| `homePhone` | [`Phone4 \| undefined`](../../doc/models/phone-4.md) | Optional | The home phone number provided by the Cardholder. |
| `mcc` | `string \| undefined` | Optional | Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme. |
| `merchantName` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.<br><br>> Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account. |
| `messageVersion` | `string \| undefined` | Optional | The `messageVersion` value indicating the 3D Secure 2 protocol version.<br>**Default**: `'2.1.0'` |
| `mobilePhone` | [`Phone1 \| undefined`](../../doc/models/phone-1.md) | Optional | The mobile phone number provided by the Cardholder. |
| `notificationURL` | `string \| undefined` | Optional | URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**. |
| `payTokenInd` | `boolean \| undefined` | Optional | Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS. |
| `paymentAuthenticationUseCase` | `string \| undefined` | Optional | Indicates the type of payment for which an authentication is requested (message extension) |
| `purchaseInstalData` | `string \| undefined` | Optional | Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Format: YYYYMMDD |
| `recurringFrequency` | `string \| undefined` | Optional | Indicates the minimum number of days between authorisations. Maximum length: 4 characters.<br>**Constraints**: *Maximum Length*: `4` |
| `sdkAppID` | `string \| undefined` | Optional | The `sdkAppID` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**. |
| `sdkEncData` | `string \| undefined` | Optional | The `sdkEncData` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**. |
| `sdkEphemPubKey` | [`SDKEphemPubKey2 \| undefined`](../../doc/models/sdk-ephem-pub-key-2.md) | Optional | The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.<br>Required for `deviceChannel` set to **app**. |
| `sdkMaxTimeout` | `number \| undefined` | Optional | The maximum amount of time in minutes for the 3D Secure 2 authentication process.<br>Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.<br>**Default**: `60` |
| `sdkReferenceNumber` | `string \| undefined` | Optional | The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**. |
| `sdkTransID` | `string \| undefined` | Optional | The `sdkTransID` value as received from the 3D Secure 2 SDK.<br>Only for `deviceChannel` set to **app**. |
| `sdkVersion` | `string \| undefined` | Optional | Version of the 3D Secure 2 mobile SDK.<br>Only for `deviceChannel` set to **app**. |
| `threeDSCompInd` | `string \| undefined` | Optional | Completion indicator for the device fingerprinting. |
| `threeDSRequestorAuthenticationInd` | `string \| undefined` | Optional | Indicates the type of Authentication request. |
| `threeDSRequestorAuthenticationInfo` | [`ThreeDSRequestorAuthenticationInfo2 \| undefined`](../../doc/models/three-ds-requestor-authentication-info-2.md) | Optional | Information about how the 3DS Requestor authenticated the cardholder before or during the transaction |
| `threeDSRequestorChallengeInd` | [`ThreeDSRequestorChallengeIndEnum \| undefined`](../../doc/models/three-ds-requestor-challenge-ind-enum.md) | Optional | Indicates whether a challenge is requested for this transaction. Possible values:<br><br>* **01** — No preference<br>* **02** — No challenge requested<br>* **03** — Challenge requested (3DS Requestor preference)<br>* **04** — Challenge requested (Mandate)<br>* **05** — No challenge (transactional risk analysis is already performed)<br>* **06** — Data Only |
| `threeDSRequestorID` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2. |
| `threeDSRequestorName` | `string \| undefined` | Optional | Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2. |
| `threeDSRequestorPriorAuthenticationInfo` | [`ThreeDSRequestorPriorAuthenticationInfo2 \| undefined`](../../doc/models/three-ds-requestor-prior-authentication-info-2.md) | Optional | Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction. |
| `threeDSRequestorURL` | `string \| undefined` | Optional | URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process. |
| `transType` | [`TransTypeEnum \| undefined`](../../doc/models/trans-type-enum.md) | Optional | Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:<br><br>* **01** — Goods/Service Purchase<br>* **03** — Check Acceptance<br>* **10** — Account Funding<br>* **11** — Quasi-Cash Transaction<br>* **28** — Prepaid Activation and Load<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `transactionType` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | Identify the type of the transaction being authenticated. |
| `whiteListStatus` | `string \| undefined` | Optional | The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0. |
| `workPhone` | [`Phone2 \| undefined`](../../doc/models/phone-2.md) | Optional | The work phone number provided by the Cardholder. |

## Example (as JSON)

```json
{
  "acctInfo": null,
  "acctType": null,
  "acquirerBIN": null,
  "acquirerMerchantID": null,
  "addrMatch": null,
  "authenticationOnly": null,
  "challengeIndicator": null,
  "deviceChannel": "deviceChannel0",
  "deviceRenderOptions": null,
  "homePhone": null,
  "mcc": null,
  "merchantName": null,
  "messageVersion": null,
  "mobilePhone": null,
  "notificationURL": null,
  "payTokenInd": null,
  "paymentAuthenticationUseCase": null,
  "purchaseInstalData": null,
  "recurringExpiry": null,
  "recurringFrequency": null,
  "sdkAppID": null,
  "sdkEncData": null,
  "sdkEphemPubKey": null,
  "sdkMaxTimeout": null,
  "sdkReferenceNumber": null,
  "sdkTransID": null,
  "sdkVersion": null,
  "threeDSCompInd": null,
  "threeDSRequestorAuthenticationInd": null,
  "threeDSRequestorAuthenticationInfo": null,
  "threeDSRequestorChallengeInd": null,
  "threeDSRequestorID": null,
  "threeDSRequestorName": null,
  "threeDSRequestorPriorAuthenticationInfo": null,
  "threeDSRequestorURL": null,
  "transType": null,
  "transactionType": null,
  "whiteListStatus": null,
  "workPhone": null
}
```

