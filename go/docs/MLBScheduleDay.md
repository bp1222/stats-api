# MLBScheduleDay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** |  | [optional] 
**TotalItems** | Pointer to **float32** |  | [optional] 
**TotalEvents** | Pointer to **float32** |  | [optional] 
**TotalGames** | Pointer to **float32** |  | [optional] 
**TotalGamesInProgress** | Pointer to **float32** |  | [optional] 
**Games** | [**[]MLBGame**](MLBGame.md) |  | 

## Methods

### NewMLBScheduleDay

`func NewMLBScheduleDay(games []MLBGame, ) *MLBScheduleDay`

NewMLBScheduleDay instantiates a new MLBScheduleDay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBScheduleDayWithDefaults

`func NewMLBScheduleDayWithDefaults() *MLBScheduleDay`

NewMLBScheduleDayWithDefaults instantiates a new MLBScheduleDay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *MLBScheduleDay) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *MLBScheduleDay) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *MLBScheduleDay) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *MLBScheduleDay) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetTotalItems

`func (o *MLBScheduleDay) GetTotalItems() float32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *MLBScheduleDay) GetTotalItemsOk() (*float32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *MLBScheduleDay) SetTotalItems(v float32)`

SetTotalItems sets TotalItems field to given value.

### HasTotalItems

`func (o *MLBScheduleDay) HasTotalItems() bool`

HasTotalItems returns a boolean if a field has been set.

### GetTotalEvents

`func (o *MLBScheduleDay) GetTotalEvents() float32`

GetTotalEvents returns the TotalEvents field if non-nil, zero value otherwise.

### GetTotalEventsOk

`func (o *MLBScheduleDay) GetTotalEventsOk() (*float32, bool)`

GetTotalEventsOk returns a tuple with the TotalEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEvents

`func (o *MLBScheduleDay) SetTotalEvents(v float32)`

SetTotalEvents sets TotalEvents field to given value.

### HasTotalEvents

`func (o *MLBScheduleDay) HasTotalEvents() bool`

HasTotalEvents returns a boolean if a field has been set.

### GetTotalGames

`func (o *MLBScheduleDay) GetTotalGames() float32`

GetTotalGames returns the TotalGames field if non-nil, zero value otherwise.

### GetTotalGamesOk

`func (o *MLBScheduleDay) GetTotalGamesOk() (*float32, bool)`

GetTotalGamesOk returns a tuple with the TotalGames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalGames

`func (o *MLBScheduleDay) SetTotalGames(v float32)`

SetTotalGames sets TotalGames field to given value.

### HasTotalGames

`func (o *MLBScheduleDay) HasTotalGames() bool`

HasTotalGames returns a boolean if a field has been set.

### GetTotalGamesInProgress

`func (o *MLBScheduleDay) GetTotalGamesInProgress() float32`

GetTotalGamesInProgress returns the TotalGamesInProgress field if non-nil, zero value otherwise.

### GetTotalGamesInProgressOk

`func (o *MLBScheduleDay) GetTotalGamesInProgressOk() (*float32, bool)`

GetTotalGamesInProgressOk returns a tuple with the TotalGamesInProgress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalGamesInProgress

`func (o *MLBScheduleDay) SetTotalGamesInProgress(v float32)`

SetTotalGamesInProgress sets TotalGamesInProgress field to given value.

### HasTotalGamesInProgress

`func (o *MLBScheduleDay) HasTotalGamesInProgress() bool`

HasTotalGamesInProgress returns a boolean if a field has been set.

### GetGames

`func (o *MLBScheduleDay) GetGames() []MLBGame`

GetGames returns the Games field if non-nil, zero value otherwise.

### GetGamesOk

`func (o *MLBScheduleDay) GetGamesOk() (*[]MLBGame, bool)`

GetGamesOk returns a tuple with the Games field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGames

`func (o *MLBScheduleDay) SetGames(v []MLBGame)`

SetGames sets Games field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


