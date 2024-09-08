/*
MLB StatAPI

An spec API to consume the MLB Stat API 

API version: 0.0.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package go

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/url"
	"reflect"
)


// MlbAPIService MlbAPI service
type MlbAPIService service

type ApiGetAllSeasonsRequest struct {
	ctx context.Context
	ApiService *MlbAPIService
	sportId *float32
}

func (r ApiGetAllSeasonsRequest) SportId(sportId float32) ApiGetAllSeasonsRequest {
	r.sportId = &sportId
	return r
}

func (r ApiGetAllSeasonsRequest) Execute() (*MLBSeasons, *http.Response, error) {
	return r.ApiService.GetAllSeasonsExecute(r)
}

/*
GetAllSeasons Retrieves All Seasons over time

Returns All Seasons


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ApiGetAllSeasonsRequest
*/
func (a *MlbAPIService) GetAllSeasons(ctx context.Context) ApiGetAllSeasonsRequest {
	return ApiGetAllSeasonsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return MLBSeasons
func (a *MlbAPIService) GetAllSeasonsExecute(r ApiGetAllSeasonsRequest) (*MLBSeasons, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MLBSeasons
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "MlbAPIService.GetAllSeasons")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/v1/seasons/all"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.sportId == nil {
		return localVarReturnValue, nil, reportError("sportId is required and must be specified")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "sportId", r.sportId, "form", "")
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGetScheduleRequest struct {
	ctx context.Context
	ApiService *MlbAPIService
	sportId *float32
	teamId *float32
	startDate *string
	endDate *string
}

func (r ApiGetScheduleRequest) SportId(sportId float32) ApiGetScheduleRequest {
	r.sportId = &sportId
	return r
}

func (r ApiGetScheduleRequest) TeamId(teamId float32) ApiGetScheduleRequest {
	r.teamId = &teamId
	return r
}

func (r ApiGetScheduleRequest) StartDate(startDate string) ApiGetScheduleRequest {
	r.startDate = &startDate
	return r
}

func (r ApiGetScheduleRequest) EndDate(endDate string) ApiGetScheduleRequest {
	r.endDate = &endDate
	return r
}

func (r ApiGetScheduleRequest) Execute() (*MLBSchedule, *http.Response, error) {
	return r.ApiService.GetScheduleExecute(r)
}

/*
GetSchedule Retrieves schedule

Returns Schedule


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ApiGetScheduleRequest
*/
func (a *MlbAPIService) GetSchedule(ctx context.Context) ApiGetScheduleRequest {
	return ApiGetScheduleRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return MLBSchedule
func (a *MlbAPIService) GetScheduleExecute(r ApiGetScheduleRequest) (*MLBSchedule, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MLBSchedule
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "MlbAPIService.GetSchedule")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/v1/schedule"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.sportId == nil {
		return localVarReturnValue, nil, reportError("sportId is required and must be specified")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "sportId", r.sportId, "form", "")
	if r.teamId != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "teamId", r.teamId, "form", "")
	}
	if r.startDate != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "startDate", r.startDate, "form", "")
	}
	if r.endDate != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "endDate", r.endDate, "form", "")
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGetSeasonRequest struct {
	ctx context.Context
	ApiService *MlbAPIService
	sportId *float32
	season *string
}

func (r ApiGetSeasonRequest) SportId(sportId float32) ApiGetSeasonRequest {
	r.sportId = &sportId
	return r
}

func (r ApiGetSeasonRequest) Season(season string) ApiGetSeasonRequest {
	r.season = &season
	return r
}

func (r ApiGetSeasonRequest) Execute() (*MLBSeasons, *http.Response, error) {
	return r.ApiService.GetSeasonExecute(r)
}

/*
GetSeason Retrieves season

Returns Season


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ApiGetSeasonRequest
*/
func (a *MlbAPIService) GetSeason(ctx context.Context) ApiGetSeasonRequest {
	return ApiGetSeasonRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return MLBSeasons
func (a *MlbAPIService) GetSeasonExecute(r ApiGetSeasonRequest) (*MLBSeasons, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MLBSeasons
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "MlbAPIService.GetSeason")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/v1/seasons"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.sportId == nil {
		return localVarReturnValue, nil, reportError("sportId is required and must be specified")
	}
	if r.season == nil {
		return localVarReturnValue, nil, reportError("season is required and must be specified")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "sportId", r.sportId, "form", "")
	parameterAddToHeaderOrQuery(localVarQueryParams, "season", r.season, "form", "")
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGetStandingsRequest struct {
	ctx context.Context
	ApiService *MlbAPIService
	leagueId *float32
	season *string
	date *string
	fields *[]string
	hydrate *string
}

func (r ApiGetStandingsRequest) LeagueId(leagueId float32) ApiGetStandingsRequest {
	r.leagueId = &leagueId
	return r
}

func (r ApiGetStandingsRequest) Season(season string) ApiGetStandingsRequest {
	r.season = &season
	return r
}

func (r ApiGetStandingsRequest) Date(date string) ApiGetStandingsRequest {
	r.date = &date
	return r
}

func (r ApiGetStandingsRequest) Fields(fields []string) ApiGetStandingsRequest {
	r.fields = &fields
	return r
}

func (r ApiGetStandingsRequest) Hydrate(hydrate string) ApiGetStandingsRequest {
	r.hydrate = &hydrate
	return r
}

func (r ApiGetStandingsRequest) Execute() (*MLBStandingsList, *http.Response, error) {
	return r.ApiService.GetStandingsExecute(r)
}

/*
GetStandings Retrieves Standings

Returns Standing


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ApiGetStandingsRequest
*/
func (a *MlbAPIService) GetStandings(ctx context.Context) ApiGetStandingsRequest {
	return ApiGetStandingsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return MLBStandingsList
func (a *MlbAPIService) GetStandingsExecute(r ApiGetStandingsRequest) (*MLBStandingsList, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MLBStandingsList
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "MlbAPIService.GetStandings")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/v1/standings"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.leagueId == nil {
		return localVarReturnValue, nil, reportError("leagueId is required and must be specified")
	}
	if r.season == nil {
		return localVarReturnValue, nil, reportError("season is required and must be specified")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "leagueId", r.leagueId, "form", "")
	parameterAddToHeaderOrQuery(localVarQueryParams, "season", r.season, "form", "")
	if r.date != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "date", r.date, "form", "")
	}
	if r.fields != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "fields", r.fields, "form", "csv")
	}
	if r.hydrate != nil {
		parameterAddToHeaderOrQuery(localVarQueryParams, "hydrate", r.hydrate, "form", "")
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGetTeamsRequest struct {
	ctx context.Context
	ApiService *MlbAPIService
	sportId *float32
	season *string
	leagueIds *[]float32
}

func (r ApiGetTeamsRequest) SportId(sportId float32) ApiGetTeamsRequest {
	r.sportId = &sportId
	return r
}

func (r ApiGetTeamsRequest) Season(season string) ApiGetTeamsRequest {
	r.season = &season
	return r
}

func (r ApiGetTeamsRequest) LeagueIds(leagueIds []float32) ApiGetTeamsRequest {
	r.leagueIds = &leagueIds
	return r
}

func (r ApiGetTeamsRequest) Execute() (*MLBTeams, *http.Response, error) {
	return r.ApiService.GetTeamsExecute(r)
}

/*
GetTeams Retrieves Teams

Returns Teams


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @return ApiGetTeamsRequest
*/
func (a *MlbAPIService) GetTeams(ctx context.Context) ApiGetTeamsRequest {
	return ApiGetTeamsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

// Execute executes the request
//  @return MLBTeams
func (a *MlbAPIService) GetTeamsExecute(r ApiGetTeamsRequest) (*MLBTeams, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *MLBTeams
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "MlbAPIService.GetTeams")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/v1/teams"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.sportId == nil {
		return localVarReturnValue, nil, reportError("sportId is required and must be specified")
	}
	if r.season == nil {
		return localVarReturnValue, nil, reportError("season is required and must be specified")
	}

	parameterAddToHeaderOrQuery(localVarQueryParams, "sportId", r.sportId, "form", "")
	parameterAddToHeaderOrQuery(localVarQueryParams, "season", r.season, "form", "")
	if r.leagueIds != nil {
		t := *r.leagueIds
		if reflect.TypeOf(t).Kind() == reflect.Slice {
			s := reflect.ValueOf(t)
			for i := 0; i < s.Len(); i++ {
				parameterAddToHeaderOrQuery(localVarQueryParams, "leagueIds", s.Index(i).Interface(), "form", "multi")
			}
		} else {
			parameterAddToHeaderOrQuery(localVarQueryParams, "leagueIds", t, "form", "multi")
		}
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := io.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = io.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}
