# MLBLeagueRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Wins** | **float32** |  | 
**Losses** | **float32** |  | 
**Ties** | Pointer to **float32** |  | [optional] 
**Pct** | **string** |  | 

## Methods

### NewMLBLeagueRecord

`func NewMLBLeagueRecord(wins float32, losses float32, pct string, ) *MLBLeagueRecord`

NewMLBLeagueRecord instantiates a new MLBLeagueRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBLeagueRecordWithDefaults

`func NewMLBLeagueRecordWithDefaults() *MLBLeagueRecord`

NewMLBLeagueRecordWithDefaults instantiates a new MLBLeagueRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWins

`func (o *MLBLeagueRecord) GetWins() float32`

GetWins returns the Wins field if non-nil, zero value otherwise.

### GetWinsOk

`func (o *MLBLeagueRecord) GetWinsOk() (*float32, bool)`

GetWinsOk returns a tuple with the Wins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWins

`func (o *MLBLeagueRecord) SetWins(v float32)`

SetWins sets Wins field to given value.


### GetLosses

`func (o *MLBLeagueRecord) GetLosses() float32`

GetLosses returns the Losses field if non-nil, zero value otherwise.

### GetLossesOk

`func (o *MLBLeagueRecord) GetLossesOk() (*float32, bool)`

GetLossesOk returns a tuple with the Losses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLosses

`func (o *MLBLeagueRecord) SetLosses(v float32)`

SetLosses sets Losses field to given value.


### GetTies

`func (o *MLBLeagueRecord) GetTies() float32`

GetTies returns the Ties field if non-nil, zero value otherwise.

### GetTiesOk

`func (o *MLBLeagueRecord) GetTiesOk() (*float32, bool)`

GetTiesOk returns a tuple with the Ties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTies

`func (o *MLBLeagueRecord) SetTies(v float32)`

SetTies sets Ties field to given value.

### HasTies

`func (o *MLBLeagueRecord) HasTies() bool`

HasTies returns a boolean if a field has been set.

### GetPct

`func (o *MLBLeagueRecord) GetPct() string`

GetPct returns the Pct field if non-nil, zero value otherwise.

### GetPctOk

`func (o *MLBLeagueRecord) GetPctOk() (*string, bool)`

GetPctOk returns a tuple with the Pct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPct

`func (o *MLBLeagueRecord) SetPct(v string)`

SetPct sets Pct field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


