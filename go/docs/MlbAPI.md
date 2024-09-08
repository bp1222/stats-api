# \MlbAPI

All URIs are relative to *https://statsapi.mlb.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllSeasons**](MlbAPI.md#GetAllSeasons) | **Get** /v1/seasons/all | Retrieves All Seasons over time
[**GetSchedule**](MlbAPI.md#GetSchedule) | **Get** /v1/schedule | Retrieves schedule
[**GetSeason**](MlbAPI.md#GetSeason) | **Get** /v1/seasons | Retrieves season
[**GetStandings**](MlbAPI.md#GetStandings) | **Get** /v1/standings | Retrieves Standings
[**GetTeams**](MlbAPI.md#GetTeams) | **Get** /v1/teams | Retrieves Teams



## GetAllSeasons

> MLBSeasons GetAllSeasons(ctx).SportId(sportId).Execute()

Retrieves All Seasons over time



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/bp1222/stats-api/go"
)

func main() {
	sportId := float32(8.14) // float32 |  (default to 1)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MlbAPI.GetAllSeasons(context.Background()).SportId(sportId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MlbAPI.GetAllSeasons``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllSeasons`: MLBSeasons
	fmt.Fprintf(os.Stdout, "Response from `MlbAPI.GetAllSeasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllSeasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sportId** | **float32** |  | [default to 1]

### Return type

[**MLBSeasons**](MLBSeasons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSchedule

> MLBSchedule GetSchedule(ctx).SportId(sportId).TeamId(teamId).StartDate(startDate).EndDate(endDate).Execute()

Retrieves schedule



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/bp1222/stats-api/go"
)

func main() {
	sportId := float32(8.14) // float32 |  (default to 1)
	teamId := float32(8.14) // float32 |  (optional)
	startDate := "startDate_example" // string |  (optional)
	endDate := "endDate_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MlbAPI.GetSchedule(context.Background()).SportId(sportId).TeamId(teamId).StartDate(startDate).EndDate(endDate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MlbAPI.GetSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSchedule`: MLBSchedule
	fmt.Fprintf(os.Stdout, "Response from `MlbAPI.GetSchedule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sportId** | **float32** |  | [default to 1]
 **teamId** | **float32** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 

### Return type

[**MLBSchedule**](MLBSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSeason

> MLBSeasons GetSeason(ctx).SportId(sportId).Season(season).Execute()

Retrieves season



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/bp1222/stats-api/go"
)

func main() {
	sportId := float32(8.14) // float32 |  (default to 1)
	season := "season_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MlbAPI.GetSeason(context.Background()).SportId(sportId).Season(season).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MlbAPI.GetSeason``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSeason`: MLBSeasons
	fmt.Fprintf(os.Stdout, "Response from `MlbAPI.GetSeason`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSeasonRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sportId** | **float32** |  | [default to 1]
 **season** | **string** |  | 

### Return type

[**MLBSeasons**](MLBSeasons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStandings

> MLBStandingsList GetStandings(ctx).LeagueId(leagueId).Season(season).Date(date).Fields(fields).Hydrate(hydrate).Execute()

Retrieves Standings



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/bp1222/stats-api/go"
)

func main() {
	leagueId := float32(8.14) // float32 | 
	season := "season_example" // string | 
	date := "date_example" // string |  (optional)
	fields := []string{"Inner_example"} // []string |  (optional)
	hydrate := "hydrate_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MlbAPI.GetStandings(context.Background()).LeagueId(leagueId).Season(season).Date(date).Fields(fields).Hydrate(hydrate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MlbAPI.GetStandings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStandings`: MLBStandingsList
	fmt.Fprintf(os.Stdout, "Response from `MlbAPI.GetStandings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStandingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leagueId** | **float32** |  | 
 **season** | **string** |  | 
 **date** | **string** |  | 
 **fields** | **[]string** |  | 
 **hydrate** | **string** |  | 

### Return type

[**MLBStandingsList**](MLBStandingsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeams

> MLBTeams GetTeams(ctx).SportId(sportId).Season(season).LeagueIds(leagueIds).Execute()

Retrieves Teams



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/bp1222/stats-api/go"
)

func main() {
	sportId := float32(8.14) // float32 |  (default to 1)
	season := "season_example" // string | 
	leagueIds := []float32{float32(123)} // []float32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MlbAPI.GetTeams(context.Background()).SportId(sportId).Season(season).LeagueIds(leagueIds).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MlbAPI.GetTeams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTeams`: MLBTeams
	fmt.Fprintf(os.Stdout, "Response from `MlbAPI.GetTeams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sportId** | **float32** |  | [default to 1]
 **season** | **string** |  | 
 **leagueIds** | **[]float32** |  | 

### Return type

[**MLBTeams**](MLBTeams.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

