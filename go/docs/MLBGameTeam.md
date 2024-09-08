# MLBGameTeam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeagueRecord** | Pointer to [**MLBLeagueRecord**](MLBLeagueRecord.md) |  | [optional] 
**Score** | **float32** |  | 
**Team** | [**MLBTeam**](MLBTeam.md) |  | 
**IsWinner** | **bool** |  | 
**SplitSquad** | Pointer to **bool** |  | [optional] 
**SeriesNumber** | Pointer to **float32** |  | [optional] 

## Methods

### NewMLBGameTeam

`func NewMLBGameTeam(score float32, team MLBTeam, isWinner bool, ) *MLBGameTeam`

NewMLBGameTeam instantiates a new MLBGameTeam object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBGameTeamWithDefaults

`func NewMLBGameTeamWithDefaults() *MLBGameTeam`

NewMLBGameTeamWithDefaults instantiates a new MLBGameTeam object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeagueRecord

`func (o *MLBGameTeam) GetLeagueRecord() MLBLeagueRecord`

GetLeagueRecord returns the LeagueRecord field if non-nil, zero value otherwise.

### GetLeagueRecordOk

`func (o *MLBGameTeam) GetLeagueRecordOk() (*MLBLeagueRecord, bool)`

GetLeagueRecordOk returns a tuple with the LeagueRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeagueRecord

`func (o *MLBGameTeam) SetLeagueRecord(v MLBLeagueRecord)`

SetLeagueRecord sets LeagueRecord field to given value.

### HasLeagueRecord

`func (o *MLBGameTeam) HasLeagueRecord() bool`

HasLeagueRecord returns a boolean if a field has been set.

### GetScore

`func (o *MLBGameTeam) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *MLBGameTeam) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *MLBGameTeam) SetScore(v float32)`

SetScore sets Score field to given value.


### GetTeam

`func (o *MLBGameTeam) GetTeam() MLBTeam`

GetTeam returns the Team field if non-nil, zero value otherwise.

### GetTeamOk

`func (o *MLBGameTeam) GetTeamOk() (*MLBTeam, bool)`

GetTeamOk returns a tuple with the Team field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeam

`func (o *MLBGameTeam) SetTeam(v MLBTeam)`

SetTeam sets Team field to given value.


### GetIsWinner

`func (o *MLBGameTeam) GetIsWinner() bool`

GetIsWinner returns the IsWinner field if non-nil, zero value otherwise.

### GetIsWinnerOk

`func (o *MLBGameTeam) GetIsWinnerOk() (*bool, bool)`

GetIsWinnerOk returns a tuple with the IsWinner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsWinner

`func (o *MLBGameTeam) SetIsWinner(v bool)`

SetIsWinner sets IsWinner field to given value.


### GetSplitSquad

`func (o *MLBGameTeam) GetSplitSquad() bool`

GetSplitSquad returns the SplitSquad field if non-nil, zero value otherwise.

### GetSplitSquadOk

`func (o *MLBGameTeam) GetSplitSquadOk() (*bool, bool)`

GetSplitSquadOk returns a tuple with the SplitSquad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitSquad

`func (o *MLBGameTeam) SetSplitSquad(v bool)`

SetSplitSquad sets SplitSquad field to given value.

### HasSplitSquad

`func (o *MLBGameTeam) HasSplitSquad() bool`

HasSplitSquad returns a boolean if a field has been set.

### GetSeriesNumber

`func (o *MLBGameTeam) GetSeriesNumber() float32`

GetSeriesNumber returns the SeriesNumber field if non-nil, zero value otherwise.

### GetSeriesNumberOk

`func (o *MLBGameTeam) GetSeriesNumberOk() (*float32, bool)`

GetSeriesNumberOk returns a tuple with the SeriesNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeriesNumber

`func (o *MLBGameTeam) SetSeriesNumber(v float32)`

SetSeriesNumber sets SeriesNumber field to given value.

### HasSeriesNumber

`func (o *MLBGameTeam) HasSeriesNumber() bool`

HasSeriesNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


