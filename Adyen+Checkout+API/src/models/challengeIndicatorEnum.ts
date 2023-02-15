/**
 * Adyen Checkout APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChallengeIndicatorEnum
 */
export enum ChallengeIndicatorEnum {
  NoPreference = 'noPreference',
  RequestNoChallenge = 'requestNoChallenge',
  RequestChallenge = 'requestChallenge',
  RequestChallengeAsMandate = 'requestChallengeAsMandate',
}

/**
 * Schema for ChallengeIndicatorEnum
 */
export const challengeIndicatorEnumSchema: Schema<ChallengeIndicatorEnum> = stringEnum(ChallengeIndicatorEnum);