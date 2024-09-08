# MLBLeague

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** |  | 
**Name** | **string** |  | 
**Link** | Pointer to **string** |  | [optional] 
**Abbreviation** | Pointer to **string** |  | [optional] 
**NameShort** | Pointer to **string** |  | [optional] 
**SeasonState** | Pointer to **string** |  | [optional] 
**HasWildCard** | Pointer to **bool** |  | [optional] 
**HasSplitSeason** | Pointer to **bool** |  | [optional] 
**HasPlayoffPoints** | Pointer to **bool** |  | [optional] 
**SeasonDateInfo** | Pointer to [**MLBLeagueDates**](MLBLeagueDates.md) |  | [optional] 
**Season** | Pointer to **string** |  | [optional] 
**OrgCode** | Pointer to **string** |  | [optional] 
**ConferencesInUse** | Pointer to **bool** |  | [optional] 
**DivisionsInUse** | Pointer to **bool** |  | [optional] 
**SortOrder** | Pointer to **float32** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewMLBLeague

`func NewMLBLeague(id float32, name string, ) *MLBLeague`

NewMLBLeague instantiates a new MLBLeague object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBLeagueWithDefaults

`func NewMLBLeagueWithDefaults() *MLBLeague`

NewMLBLeagueWithDefaults instantiates a new MLBLeague object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MLBLeague) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MLBLeague) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MLBLeague) SetId(v float32)`

SetId sets Id field to given value.


### GetName

`func (o *MLBLeague) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MLBLeague) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MLBLeague) SetName(v string)`

SetName sets Name field to given value.


### GetLink

`func (o *MLBLeague) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *MLBLeague) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *MLBLeague) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *MLBLeague) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetAbbreviation

`func (o *MLBLeague) GetAbbreviation() string`

GetAbbreviation returns the Abbreviation field if non-nil, zero value otherwise.

### GetAbbreviationOk

`func (o *MLBLeague) GetAbbreviationOk() (*string, bool)`

GetAbbreviationOk returns a tuple with the Abbreviation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbbreviation

`func (o *MLBLeague) SetAbbreviation(v string)`

SetAbbreviation sets Abbreviation field to given value.

### HasAbbreviation

`func (o *MLBLeague) HasAbbreviation() bool`

HasAbbreviation returns a boolean if a field has been set.

### GetNameShort

`func (o *MLBLeague) GetNameShort() string`

GetNameShort returns the NameShort field if non-nil, zero value otherwise.

### GetNameShortOk

`func (o *MLBLeague) GetNameShortOk() (*string, bool)`

GetNameShortOk returns a tuple with the NameShort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameShort

`func (o *MLBLeague) SetNameShort(v string)`

SetNameShort sets NameShort field to given value.

### HasNameShort

`func (o *MLBLeague) HasNameShort() bool`

HasNameShort returns a boolean if a field has been set.

### GetSeasonState

`func (o *MLBLeague) GetSeasonState() string`

GetSeasonState returns the SeasonState field if non-nil, zero value otherwise.

### GetSeasonStateOk

`func (o *MLBLeague) GetSeasonStateOk() (*string, bool)`

GetSeasonStateOk returns a tuple with the SeasonState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonState

`func (o *MLBLeague) SetSeasonState(v string)`

SetSeasonState sets SeasonState field to given value.

### HasSeasonState

`func (o *MLBLeague) HasSeasonState() bool`

HasSeasonState returns a boolean if a field has been set.

### GetHasWildCard

`func (o *MLBLeague) GetHasWildCard() bool`

GetHasWildCard returns the HasWildCard field if non-nil, zero value otherwise.

### GetHasWildCardOk

`func (o *MLBLeague) GetHasWildCardOk() (*bool, bool)`

GetHasWildCardOk returns a tuple with the HasWildCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasWildCard

`func (o *MLBLeague) SetHasWildCard(v bool)`

SetHasWildCard sets HasWildCard field to given value.

### HasHasWildCard

`func (o *MLBLeague) HasHasWildCard() bool`

HasHasWildCard returns a boolean if a field has been set.

### GetHasSplitSeason

`func (o *MLBLeague) GetHasSplitSeason() bool`

GetHasSplitSeason returns the HasSplitSeason field if non-nil, zero value otherwise.

### GetHasSplitSeasonOk

`func (o *MLBLeague) GetHasSplitSeasonOk() (*bool, bool)`

GetHasSplitSeasonOk returns a tuple with the HasSplitSeason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasSplitSeason

`func (o *MLBLeague) SetHasSplitSeason(v bool)`

SetHasSplitSeason sets HasSplitSeason field to given value.

### HasHasSplitSeason

`func (o *MLBLeague) HasHasSplitSeason() bool`

HasHasSplitSeason returns a boolean if a field has been set.

### GetHasPlayoffPoints

`func (o *MLBLeague) GetHasPlayoffPoints() bool`

GetHasPlayoffPoints returns the HasPlayoffPoints field if non-nil, zero value otherwise.

### GetHasPlayoffPointsOk

`func (o *MLBLeague) GetHasPlayoffPointsOk() (*bool, bool)`

GetHasPlayoffPointsOk returns a tuple with the HasPlayoffPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPlayoffPoints

`func (o *MLBLeague) SetHasPlayoffPoints(v bool)`

SetHasPlayoffPoints sets HasPlayoffPoints field to given value.

### HasHasPlayoffPoints

`func (o *MLBLeague) HasHasPlayoffPoints() bool`

HasHasPlayoffPoints returns a boolean if a field has been set.

### GetSeasonDateInfo

`func (o *MLBLeague) GetSeasonDateInfo() MLBLeagueDates`

GetSeasonDateInfo returns the SeasonDateInfo field if non-nil, zero value otherwise.

### GetSeasonDateInfoOk

`func (o *MLBLeague) GetSeasonDateInfoOk() (*MLBLeagueDates, bool)`

GetSeasonDateInfoOk returns a tuple with the SeasonDateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonDateInfo

`func (o *MLBLeague) SetSeasonDateInfo(v MLBLeagueDates)`

SetSeasonDateInfo sets SeasonDateInfo field to given value.

### HasSeasonDateInfo

`func (o *MLBLeague) HasSeasonDateInfo() bool`

HasSeasonDateInfo returns a boolean if a field has been set.

### GetSeason

`func (o *MLBLeague) GetSeason() string`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBLeague) GetSeasonOk() (*string, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBLeague) SetSeason(v string)`

SetSeason sets Season field to given value.

### HasSeason

`func (o *MLBLeague) HasSeason() bool`

HasSeason returns a boolean if a field has been set.

### GetOrgCode

`func (o *MLBLeague) GetOrgCode() string`

GetOrgCode returns the OrgCode field if non-nil, zero value otherwise.

### GetOrgCodeOk

`func (o *MLBLeague) GetOrgCodeOk() (*string, bool)`

GetOrgCodeOk returns a tuple with the OrgCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgCode

`func (o *MLBLeague) SetOrgCode(v string)`

SetOrgCode sets OrgCode field to given value.

### HasOrgCode

`func (o *MLBLeague) HasOrgCode() bool`

HasOrgCode returns a boolean if a field has been set.

### GetConferencesInUse

`func (o *MLBLeague) GetConferencesInUse() bool`

GetConferencesInUse returns the ConferencesInUse field if non-nil, zero value otherwise.

### GetConferencesInUseOk

`func (o *MLBLeague) GetConferencesInUseOk() (*bool, bool)`

GetConferencesInUseOk returns a tuple with the ConferencesInUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConferencesInUse

`func (o *MLBLeague) SetConferencesInUse(v bool)`

SetConferencesInUse sets ConferencesInUse field to given value.

### HasConferencesInUse

`func (o *MLBLeague) HasConferencesInUse() bool`

HasConferencesInUse returns a boolean if a field has been set.

### GetDivisionsInUse

`func (o *MLBLeague) GetDivisionsInUse() bool`

GetDivisionsInUse returns the DivisionsInUse field if non-nil, zero value otherwise.

### GetDivisionsInUseOk

`func (o *MLBLeague) GetDivisionsInUseOk() (*bool, bool)`

GetDivisionsInUseOk returns a tuple with the DivisionsInUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionsInUse

`func (o *MLBLeague) SetDivisionsInUse(v bool)`

SetDivisionsInUse sets DivisionsInUse field to given value.

### HasDivisionsInUse

`func (o *MLBLeague) HasDivisionsInUse() bool`

HasDivisionsInUse returns a boolean if a field has been set.

### GetSortOrder

`func (o *MLBLeague) GetSortOrder() float32`

GetSortOrder returns the SortOrder field if non-nil, zero value otherwise.

### GetSortOrderOk

`func (o *MLBLeague) GetSortOrderOk() (*float32, bool)`

GetSortOrderOk returns a tuple with the SortOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortOrder

`func (o *MLBLeague) SetSortOrder(v float32)`

SetSortOrder sets SortOrder field to given value.

### HasSortOrder

`func (o *MLBLeague) HasSortOrder() bool`

HasSortOrder returns a boolean if a field has been set.

### GetActive

`func (o *MLBLeague) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MLBLeague) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MLBLeague) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *MLBLeague) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


