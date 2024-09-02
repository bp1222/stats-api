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


import * as runtime from '../runtime';
import type {
  MLBSchedule,
  MLBSeason,
  MLBSeasons,
  MLBStandingsList,
  MLBTeams,
} from '../models/index';
import {
    MLBScheduleFromJSON,
    MLBScheduleToJSON,
    MLBSeasonFromJSON,
    MLBSeasonToJSON,
    MLBSeasonsFromJSON,
    MLBSeasonsToJSON,
    MLBStandingsListFromJSON,
    MLBStandingsListToJSON,
    MLBTeamsFromJSON,
    MLBTeamsToJSON,
} from '../models/index';

export interface GetAllSeasonsRequest {
    sportId: number;
}

export interface GetScheduleRequest {
    sportId: number;
    teamId?: number;
    startDate?: string;
    endDate?: string;
}

export interface GetSeasonRequest {
    sportId: number;
    season: string;
}

export interface GetStandingsRequest {
    leagueId: number;
    season: string;
    date?: string;
    fields?: Array<string>;
    hydrate?: string;
}

export interface GetTeamsRequest {
    sportId: number;
    season: string;
    leagueIds?: Array<number>;
}

/**
 * MlbApi - interface
 * 
 * @export
 * @interface MlbApiInterface
 */
export interface MlbApiInterface {
    /**
     * Returns All Seasons 
     * @summary Retrieves All Seasons over time
     * @param {number} sportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MlbApiInterface
     */
    getAllSeasonsRaw(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSeasons>>;

    /**
     * Returns All Seasons 
     * Retrieves All Seasons over time
     */
    getAllSeasons(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSeasons>;

    /**
     * Returns Schedule 
     * @summary Retrieves schedule
     * @param {number} sportId 
     * @param {number} [teamId] 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MlbApiInterface
     */
    getScheduleRaw(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSchedule>>;

    /**
     * Returns Schedule 
     * Retrieves schedule
     */
    getSchedule(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSchedule>;

    /**
     * Returns Season 
     * @summary Retrieves season
     * @param {number} sportId 
     * @param {string} season 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MlbApiInterface
     */
    getSeasonRaw(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSeason>>;

    /**
     * Returns Season 
     * Retrieves season
     */
    getSeason(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSeason>;

    /**
     * Returns Standing 
     * @summary Retrieves Standings
     * @param {number} leagueId 
     * @param {string} season 
     * @param {string} [date] 
     * @param {Array<string>} [fields] 
     * @param {string} [hydrate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MlbApiInterface
     */
    getStandingsRaw(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBStandingsList>>;

    /**
     * Returns Standing 
     * Retrieves Standings
     */
    getStandings(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBStandingsList>;

    /**
     * Returns Teams 
     * @summary Retrieves Teams
     * @param {number} sportId 
     * @param {string} season 
     * @param {Array<number>} [leagueIds] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MlbApiInterface
     */
    getTeamsRaw(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBTeams>>;

    /**
     * Returns Teams 
     * Retrieves Teams
     */
    getTeams(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBTeams>;

}

/**
 * 
 */
export class MlbApi extends runtime.BaseAPI implements MlbApiInterface {

    /**
     * Returns All Seasons 
     * Retrieves All Seasons over time
     */
    async getAllSeasonsRaw(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSeasons>> {
        if (requestParameters['sportId'] == null) {
            throw new runtime.RequiredError(
                'sportId',
                'Required parameter "sportId" was null or undefined when calling getAllSeasons().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sportId'] != null) {
            queryParameters['sportId'] = requestParameters['sportId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/seasons/all`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MLBSeasonsFromJSON(jsonValue));
    }

    /**
     * Returns All Seasons 
     * Retrieves All Seasons over time
     */
    async getAllSeasons(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSeasons> {
        const response = await this.getAllSeasonsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns Schedule 
     * Retrieves schedule
     */
    async getScheduleRaw(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSchedule>> {
        if (requestParameters['sportId'] == null) {
            throw new runtime.RequiredError(
                'sportId',
                'Required parameter "sportId" was null or undefined when calling getSchedule().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sportId'] != null) {
            queryParameters['sportId'] = requestParameters['sportId'];
        }

        if (requestParameters['teamId'] != null) {
            queryParameters['teamId'] = requestParameters['teamId'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['startDate'] = requestParameters['startDate'];
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['endDate'] = requestParameters['endDate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/schedule`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MLBScheduleFromJSON(jsonValue));
    }

    /**
     * Returns Schedule 
     * Retrieves schedule
     */
    async getSchedule(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSchedule> {
        const response = await this.getScheduleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns Season 
     * Retrieves season
     */
    async getSeasonRaw(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBSeason>> {
        if (requestParameters['sportId'] == null) {
            throw new runtime.RequiredError(
                'sportId',
                'Required parameter "sportId" was null or undefined when calling getSeason().'
            );
        }

        if (requestParameters['season'] == null) {
            throw new runtime.RequiredError(
                'season',
                'Required parameter "season" was null or undefined when calling getSeason().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sportId'] != null) {
            queryParameters['sportId'] = requestParameters['sportId'];
        }

        if (requestParameters['season'] != null) {
            queryParameters['season'] = requestParameters['season'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/seasons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MLBSeasonFromJSON(jsonValue));
    }

    /**
     * Returns Season 
     * Retrieves season
     */
    async getSeason(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBSeason> {
        const response = await this.getSeasonRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns Standing 
     * Retrieves Standings
     */
    async getStandingsRaw(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBStandingsList>> {
        if (requestParameters['leagueId'] == null) {
            throw new runtime.RequiredError(
                'leagueId',
                'Required parameter "leagueId" was null or undefined when calling getStandings().'
            );
        }

        if (requestParameters['season'] == null) {
            throw new runtime.RequiredError(
                'season',
                'Required parameter "season" was null or undefined when calling getStandings().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['leagueId'] != null) {
            queryParameters['leagueId'] = requestParameters['leagueId'];
        }

        if (requestParameters['season'] != null) {
            queryParameters['season'] = requestParameters['season'];
        }

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['hydrate'] != null) {
            queryParameters['hydrate'] = requestParameters['hydrate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/standings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MLBStandingsListFromJSON(jsonValue));
    }

    /**
     * Returns Standing 
     * Retrieves Standings
     */
    async getStandings(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBStandingsList> {
        const response = await this.getStandingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns Teams 
     * Retrieves Teams
     */
    async getTeamsRaw(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MLBTeams>> {
        if (requestParameters['sportId'] == null) {
            throw new runtime.RequiredError(
                'sportId',
                'Required parameter "sportId" was null or undefined when calling getTeams().'
            );
        }

        if (requestParameters['season'] == null) {
            throw new runtime.RequiredError(
                'season',
                'Required parameter "season" was null or undefined when calling getTeams().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sportId'] != null) {
            queryParameters['sportId'] = requestParameters['sportId'];
        }

        if (requestParameters['season'] != null) {
            queryParameters['season'] = requestParameters['season'];
        }

        if (requestParameters['leagueIds'] != null) {
            queryParameters['leagueIds'] = requestParameters['leagueIds'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/teams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MLBTeamsFromJSON(jsonValue));
    }

    /**
     * Returns Teams 
     * Retrieves Teams
     */
    async getTeams(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MLBTeams> {
        const response = await this.getTeamsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
