
# Three DS Req Auth Method Enum

Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values:

* **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest).
* **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials.
* **03** — Login to the cardholder account at the 3DS Requestor system using federated ID.
* **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials.
* **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication.
* **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator.

## Enumeration

`ThreeDSReqAuthMethodEnum`

## Fields

| Name |
|  --- |
| `enum01` |
| `enum02` |
| `enum03` |
| `enum04` |
| `enum05` |
| `enum06` |

