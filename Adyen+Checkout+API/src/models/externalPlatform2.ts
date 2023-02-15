/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc. */
export interface ExternalPlatform2 {
  /** External platform integrator. */
  integrator?: string;
  /** Name of the field. For example, Name of External Platform. */
  name?: string;
  /** Version of the field. For example, Version of External Platform. */
  version?: string;
}

export const externalPlatform2Schema: Schema<ExternalPlatform2> = object({
  integrator: ['integrator', optional(string())],
  name: ['name', optional(string())],
  version: ['version', optional(string())],
});