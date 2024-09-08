# MLBSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalItems** | **float32** |  | 
**TotalEvents** | **float32** |  | 
**TotalGames** | **float32** |  | 
**TotalGamesInProgress** | **float32** |  | 
**Dates** | [**[]MLBScheduleDay**](MLBScheduleDay.md) |  | 

## Methods

### NewMLBSchedule

`func NewMLBSchedule(totalItems float32, totalEvents float32, totalGames float32, totalGamesInProgress float32, dates []MLBScheduleDay, ) *MLBSchedule`

NewMLBSchedule instantiates a new MLBSchedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBScheduleWithDefaults

`func NewMLBScheduleWithDefaults() *MLBSchedule`

NewMLBScheduleWithDefaults instantiates a new MLBSchedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalItems

`func (o *MLBSchedule) GetTotalItems() float32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *MLBSchedule) GetTotalItemsOk() (*float32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *MLBSchedule) SetTotalItems(v float32)`

SetTotalItems sets TotalItems field to given value.


### GetTotalEvents

`func (o *MLBSchedule) GetTotalEvents() float32`

GetTotalEvents returns the TotalEvents field if non-nil, zero value otherwise.

### GetTotalEventsOk

`func (o *MLBSchedule) GetTotalEventsOk() (*float32, bool)`

GetTotalEventsOk returns a tuple with the TotalEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEvents

`func (o *MLBSchedule) SetTotalEvents(v float32)`

SetTotalEvents sets TotalEvents field to given value.


### GetTotalGames

`func (o *MLBSchedule) GetTotalGames() float32`

GetTotalGames returns the TotalGames field if non-nil, zero value otherwise.

### GetTotalGamesOk

`func (o *MLBSchedule) GetTotalGamesOk() (*float32, bool)`

GetTotalGamesOk returns a tuple with the TotalGames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalGames

`func (o *MLBSchedule) SetTotalGames(v float32)`

SetTotalGames sets TotalGames field to given value.


### GetTotalGamesInProgress

`func (o *MLBSchedule) GetTotalGamesInProgress() float32`

GetTotalGamesInProgress returns the TotalGamesInProgress field if non-nil, zero value otherwise.

### GetTotalGamesInProgressOk

`func (o *MLBSchedule) GetTotalGamesInProgressOk() (*float32, bool)`

GetTotalGamesInProgressOk returns a tuple with the TotalGamesInProgress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalGamesInProgress

`func (o *MLBSchedule) SetTotalGamesInProgress(v float32)`

SetTotalGamesInProgress sets TotalGamesInProgress field to given value.


### GetDates

`func (o *MLBSchedule) GetDates() []MLBScheduleDay`

GetDates returns the Dates field if non-nil, zero value otherwise.

### GetDatesOk

`func (o *MLBSchedule) GetDatesOk() (*[]MLBScheduleDay, bool)`

GetDatesOk returns a tuple with the Dates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDates

`func (o *MLBSchedule) SetDates(v []MLBScheduleDay)`

SetDates sets Dates field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


