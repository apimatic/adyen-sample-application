
# Three DS2 Result 1

Result of the 3D Secure 2 authentication.

## Structure

`ThreeDS2Result1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationValue` | `string \| undefined` | Optional | The `authenticationValue` value as defined in the 3D Secure 2 specification. |
| `cavvAlgorithm` | `string \| undefined` | Optional | The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations. |
| `challengeCancel` | [`ChallengeCancelEnum \| undefined`](../../doc/models/challenge-cancel-enum.md) | Optional | Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata). |
| `challengeIndicator` | [`ChallengeIndicator1Enum \| undefined`](../../doc/models/challenge-indicator-1-enum.md) | Optional | Specifies a preference for receiving a challenge from the issuer.<br>Allowed values:<br><br>* `noPreference`<br>* `requestNoChallenge`<br>* `requestChallenge`<br>* `requestChallengeAsMandate` |
| `dsTransID` | `string \| undefined` | Optional | The `dsTransID` value as defined in the 3D Secure 2 specification. |
| `eci` | `string \| undefined` | Optional | The `eci` value as defined in the 3D Secure 2 specification. |
| `exemptionIndicator` | [`ExemptionIndicatorEnum \| undefined`](../../doc/models/exemption-indicator-enum.md) | Optional | Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied.<br>Allowed values:<br><br>* `lowValue`<br>* `secureCorporate`<br>* `trustedBeneficiary`<br>* `transactionRiskAnalysis` |
| `messageVersion` | `string \| undefined` | Optional | The `messageVersion` value as defined in the 3D Secure 2 specification. |
| `riskScore` | `string \| undefined` | Optional | Risk score calculated by Cartes Bancaires Directory Server (DS). |
| `threeDSServerTransID` | `string \| undefined` | Optional | The `threeDSServerTransID` value as defined in the 3D Secure 2 specification. |
| `timestamp` | `string \| undefined` | Optional | The `timestamp` value of the 3D Secure 2 authentication. |
| `transStatus` | `string \| undefined` | Optional | The `transStatus` value as defined in the 3D Secure 2 specification. |
| `transStatusReason` | `string \| undefined` | Optional | Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values). |
| `whiteListStatus` | `string \| undefined` | Optional | The `whiteListStatus` value as defined in the 3D Secure 2 specification. |

## Example (as JSON)

```json
{
  "authenticationValue": null,
  "cavvAlgorithm": null,
  "challengeCancel": null,
  "challengeIndicator": null,
  "dsTransID": null,
  "eci": null,
  "exemptionIndicator": null,
  "messageVersion": null,
  "riskScore": null,
  "threeDSServerTransID": null,
  "timestamp": null,
  "transStatus": null,
  "transStatusReason": null,
  "whiteListStatus": null
}
```

