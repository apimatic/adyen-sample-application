
# Attempt Authentication Enum

Indicates when 3D Secure authentication should be attempted. This overrides all other rules, including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).

Possible values:

* **always**: Perform 3D Secure authentication.
* **never**: Don't perform 3D Secure authentication. If PSD2 SCA or other national regulations require authentication, the transaction gets declined.
* **preferNo**: Do not perform 3D Secure authentication if not required by PSD2 SCA or other national regulations.

## Enumeration

`AttemptAuthenticationEnum`

## Fields

| Name |
|  --- |
| `always` |
| `never` |
| `preferNo` |

