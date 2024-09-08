# MLBStandings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StandingsType** | Pointer to **string** |  | [optional] 
**League** | [**MLBLeague**](MLBLeague.md) |  | 
**Division** | [**MLBDivision**](MLBDivision.md) |  | 
**Sport** | [**MLBSport**](MLBSport.md) |  | 
**LastUpdated** | Pointer to **string** |  | [optional] 
**TeamRecords** | [**[]MLBRecord**](MLBRecord.md) |  | 

## Methods

### NewMLBStandings

`func NewMLBStandings(league MLBLeague, division MLBDivision, sport MLBSport, teamRecords []MLBRecord, ) *MLBStandings`

NewMLBStandings instantiates a new MLBStandings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBStandingsWithDefaults

`func NewMLBStandingsWithDefaults() *MLBStandings`

NewMLBStandingsWithDefaults instantiates a new MLBStandings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStandingsType

`func (o *MLBStandings) GetStandingsType() string`

GetStandingsType returns the StandingsType field if non-nil, zero value otherwise.

### GetStandingsTypeOk

`func (o *MLBStandings) GetStandingsTypeOk() (*string, bool)`

GetStandingsTypeOk returns a tuple with the StandingsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandingsType

`func (o *MLBStandings) SetStandingsType(v string)`

SetStandingsType sets StandingsType field to given value.

### HasStandingsType

`func (o *MLBStandings) HasStandingsType() bool`

HasStandingsType returns a boolean if a field has been set.

### GetLeague

`func (o *MLBStandings) GetLeague() MLBLeague`

GetLeague returns the League field if non-nil, zero value otherwise.

### GetLeagueOk

`func (o *MLBStandings) GetLeagueOk() (*MLBLeague, bool)`

GetLeagueOk returns a tuple with the League field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeague

`func (o *MLBStandings) SetLeague(v MLBLeague)`

SetLeague sets League field to given value.


### GetDivision

`func (o *MLBStandings) GetDivision() MLBDivision`

GetDivision returns the Division field if non-nil, zero value otherwise.

### GetDivisionOk

`func (o *MLBStandings) GetDivisionOk() (*MLBDivision, bool)`

GetDivisionOk returns a tuple with the Division field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivision

`func (o *MLBStandings) SetDivision(v MLBDivision)`

SetDivision sets Division field to given value.


### GetSport

`func (o *MLBStandings) GetSport() MLBSport`

GetSport returns the Sport field if non-nil, zero value otherwise.

### GetSportOk

`func (o *MLBStandings) GetSportOk() (*MLBSport, bool)`

GetSportOk returns a tuple with the Sport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSport

`func (o *MLBStandings) SetSport(v MLBSport)`

SetSport sets Sport field to given value.


### GetLastUpdated

`func (o *MLBStandings) GetLastUpdated() string`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *MLBStandings) GetLastUpdatedOk() (*string, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *MLBStandings) SetLastUpdated(v string)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *MLBStandings) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetTeamRecords

`func (o *MLBStandings) GetTeamRecords() []MLBRecord`

GetTeamRecords returns the TeamRecords field if non-nil, zero value otherwise.

### GetTeamRecordsOk

`func (o *MLBStandings) GetTeamRecordsOk() (*[]MLBRecord, bool)`

GetTeamRecordsOk returns a tuple with the TeamRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamRecords

`func (o *MLBStandings) SetTeamRecords(v []MLBRecord)`

SetTeamRecords sets TeamRecords field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


