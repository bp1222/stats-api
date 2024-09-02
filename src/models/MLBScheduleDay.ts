/* tslint:disable */
/* eslint-disable */
/**
 * MLB StatAPI
 * An spec API to consume the MLB Stat API 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MLBGame } from './MLBGame';
import {
    MLBGameFromJSON,
    MLBGameFromJSONTyped,
    MLBGameToJSON,
} from './MLBGame';

/**
 * 
 * @export
 * @interface MLBScheduleDay
 */
export interface MLBScheduleDay {
    /**
     * 
     * @type {string}
     * @memberof MLBScheduleDay
     */
    date?: string;
    /**
     * 
     * @type {number}
     * @memberof MLBScheduleDay
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof MLBScheduleDay
     */
    totalEvents?: number;
    /**
     * 
     * @type {number}
     * @memberof MLBScheduleDay
     */
    totalGames?: number;
    /**
     * 
     * @type {number}
     * @memberof MLBScheduleDay
     */
    totalGamesInProgress?: number;
    /**
     * 
     * @type {Array<MLBGame>}
     * @memberof MLBScheduleDay
     */
    games: Array<MLBGame>;
}

/**
 * Check if a given object implements the MLBScheduleDay interface.
 */
export function instanceOfMLBScheduleDay(value: object): value is MLBScheduleDay {
    if (!('games' in value) || value['games'] === undefined) return false;
    return true;
}

export function MLBScheduleDayFromJSON(json: any): MLBScheduleDay {
    return MLBScheduleDayFromJSONTyped(json, false);
}

export function MLBScheduleDayFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBScheduleDay {
    if (json == null) {
        return json;
    }
    return {
        
        'date': json['date'] == null ? undefined : json['date'],
        'totalItems': json['totalItems'] == null ? undefined : json['totalItems'],
        'totalEvents': json['totalEvents'] == null ? undefined : json['totalEvents'],
        'totalGames': json['totalGames'] == null ? undefined : json['totalGames'],
        'totalGamesInProgress': json['totalGamesInProgress'] == null ? undefined : json['totalGamesInProgress'],
        'games': ((json['games'] as Array<any>).map(MLBGameFromJSON)),
    };
}

export function MLBScheduleDayToJSON(value?: MLBScheduleDay | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': value['date'],
        'totalItems': value['totalItems'],
        'totalEvents': value['totalEvents'],
        'totalGames': value['totalGames'],
        'totalGamesInProgress': value['totalGamesInProgress'],
        'games': ((value['games'] as Array<any>).map(MLBGameToJSON)),
    };
}

