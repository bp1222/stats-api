# MLBDivision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** |  | 
**Name** | **string** |  | 
**Season** | Pointer to **string** |  | [optional] 
**NameShort** | Pointer to **string** |  | [optional] 
**Link** | Pointer to **string** |  | [optional] 
**Abbreviation** | Pointer to **string** |  | [optional] 
**League** | Pointer to [**MLBLeague**](MLBLeague.md) |  | [optional] 
**Sport** | Pointer to [**MLBSport**](MLBSport.md) |  | [optional] 
**HasWildcard** | Pointer to **bool** |  | [optional] 
**SortOrder** | Pointer to **float32** |  | [optional] 
**NumPlayoffTeams** | Pointer to **float32** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewMLBDivision

`func NewMLBDivision(id float32, name string, ) *MLBDivision`

NewMLBDivision instantiates a new MLBDivision object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBDivisionWithDefaults

`func NewMLBDivisionWithDefaults() *MLBDivision`

NewMLBDivisionWithDefaults instantiates a new MLBDivision object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MLBDivision) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MLBDivision) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MLBDivision) SetId(v float32)`

SetId sets Id field to given value.


### GetName

`func (o *MLBDivision) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MLBDivision) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MLBDivision) SetName(v string)`

SetName sets Name field to given value.


### GetSeason

`func (o *MLBDivision) GetSeason() string`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBDivision) GetSeasonOk() (*string, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBDivision) SetSeason(v string)`

SetSeason sets Season field to given value.

### HasSeason

`func (o *MLBDivision) HasSeason() bool`

HasSeason returns a boolean if a field has been set.

### GetNameShort

`func (o *MLBDivision) GetNameShort() string`

GetNameShort returns the NameShort field if non-nil, zero value otherwise.

### GetNameShortOk

`func (o *MLBDivision) GetNameShortOk() (*string, bool)`

GetNameShortOk returns a tuple with the NameShort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameShort

`func (o *MLBDivision) SetNameShort(v string)`

SetNameShort sets NameShort field to given value.

### HasNameShort

`func (o *MLBDivision) HasNameShort() bool`

HasNameShort returns a boolean if a field has been set.

### GetLink

`func (o *MLBDivision) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *MLBDivision) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *MLBDivision) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *MLBDivision) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetAbbreviation

`func (o *MLBDivision) GetAbbreviation() string`

GetAbbreviation returns the Abbreviation field if non-nil, zero value otherwise.

### GetAbbreviationOk

`func (o *MLBDivision) GetAbbreviationOk() (*string, bool)`

GetAbbreviationOk returns a tuple with the Abbreviation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbbreviation

`func (o *MLBDivision) SetAbbreviation(v string)`

SetAbbreviation sets Abbreviation field to given value.

### HasAbbreviation

`func (o *MLBDivision) HasAbbreviation() bool`

HasAbbreviation returns a boolean if a field has been set.

### GetLeague

`func (o *MLBDivision) GetLeague() MLBLeague`

GetLeague returns the League field if non-nil, zero value otherwise.

### GetLeagueOk

`func (o *MLBDivision) GetLeagueOk() (*MLBLeague, bool)`

GetLeagueOk returns a tuple with the League field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeague

`func (o *MLBDivision) SetLeague(v MLBLeague)`

SetLeague sets League field to given value.

### HasLeague

`func (o *MLBDivision) HasLeague() bool`

HasLeague returns a boolean if a field has been set.

### GetSport

`func (o *MLBDivision) GetSport() MLBSport`

GetSport returns the Sport field if non-nil, zero value otherwise.

### GetSportOk

`func (o *MLBDivision) GetSportOk() (*MLBSport, bool)`

GetSportOk returns a tuple with the Sport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSport

`func (o *MLBDivision) SetSport(v MLBSport)`

SetSport sets Sport field to given value.

### HasSport

`func (o *MLBDivision) HasSport() bool`

HasSport returns a boolean if a field has been set.

### GetHasWildcard

`func (o *MLBDivision) GetHasWildcard() bool`

GetHasWildcard returns the HasWildcard field if non-nil, zero value otherwise.

### GetHasWildcardOk

`func (o *MLBDivision) GetHasWildcardOk() (*bool, bool)`

GetHasWildcardOk returns a tuple with the HasWildcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasWildcard

`func (o *MLBDivision) SetHasWildcard(v bool)`

SetHasWildcard sets HasWildcard field to given value.

### HasHasWildcard

`func (o *MLBDivision) HasHasWildcard() bool`

HasHasWildcard returns a boolean if a field has been set.

### GetSortOrder

`func (o *MLBDivision) GetSortOrder() float32`

GetSortOrder returns the SortOrder field if non-nil, zero value otherwise.

### GetSortOrderOk

`func (o *MLBDivision) GetSortOrderOk() (*float32, bool)`

GetSortOrderOk returns a tuple with the SortOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortOrder

`func (o *MLBDivision) SetSortOrder(v float32)`

SetSortOrder sets SortOrder field to given value.

### HasSortOrder

`func (o *MLBDivision) HasSortOrder() bool`

HasSortOrder returns a boolean if a field has been set.

### GetNumPlayoffTeams

`func (o *MLBDivision) GetNumPlayoffTeams() float32`

GetNumPlayoffTeams returns the NumPlayoffTeams field if non-nil, zero value otherwise.

### GetNumPlayoffTeamsOk

`func (o *MLBDivision) GetNumPlayoffTeamsOk() (*float32, bool)`

GetNumPlayoffTeamsOk returns a tuple with the NumPlayoffTeams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumPlayoffTeams

`func (o *MLBDivision) SetNumPlayoffTeams(v float32)`

SetNumPlayoffTeams sets NumPlayoffTeams field to given value.

### HasNumPlayoffTeams

`func (o *MLBDivision) HasNumPlayoffTeams() bool`

HasNumPlayoffTeams returns a boolean if a field has been set.

### GetActive

`func (o *MLBDivision) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MLBDivision) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MLBDivision) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *MLBDivision) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


