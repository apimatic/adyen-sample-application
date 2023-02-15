/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChannelEnum
 */
export enum ChannelEnum {
  IOS = 'iOS',
  Android = 'Android',
  Web = 'Web',
}

/**
 * Schema for ChannelEnum
 */
export const channelEnumSchema: Schema<ChannelEnum> = stringEnum(ChannelEnum);