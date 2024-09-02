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
/**
 * Venue
 * 
 * @export
 * @interface Venue
 */
export interface Venue {
    /**
     * 
     * @type {number}
     * @memberof Venue
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Venue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Venue
     */
    link?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Venue
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Venue
     */
    season?: string;
}

/**
 * Check if a given object implements the Venue interface.
 */
export function instanceOfVenue(value: object): value is Venue {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function VenueFromJSON(json: any): Venue {
    return VenueFromJSONTyped(json, false);
}

export function VenueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Venue {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'link': json['link'] == null ? undefined : json['link'],
        'active': json['active'] == null ? undefined : json['active'],
        'season': json['season'] == null ? undefined : json['season'],
    };
}

export function VenueToJSON(value?: Venue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'link': value['link'],
        'active': value['active'],
        'season': value['season'],
    };
}

