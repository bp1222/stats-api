# MLBTeam

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** |  | 
**Name** | **string** |  | 
**Link** | Pointer to **string** |  | [optional] 
**AllStarStatus** | Pointer to **string** |  | [optional] 
**Season** | Pointer to **float32** |  | [optional] 
**Venue** | Pointer to [**MLBVenue**](MLBVenue.md) |  | [optional] 
**SpringVenue** | Pointer to [**MLBVenue**](MLBVenue.md) |  | [optional] 
**TeamCode** | Pointer to **string** |  | [optional] 
**FileCode** | Pointer to **string** |  | [optional] 
**Abbreviation** | Pointer to **string** |  | [optional] 
**TeamName** | Pointer to **string** |  | [optional] 
**LocationName** | Pointer to **string** |  | [optional] 
**FirstYearOfPlay** | Pointer to **string** |  | [optional] 
**League** | Pointer to [**MLBLeague**](MLBLeague.md) |  | [optional] 
**SpringLeague** | Pointer to [**MLBLeague**](MLBLeague.md) |  | [optional] 
**Division** | Pointer to [**MLBDivision**](MLBDivision.md) |  | [optional] 
**Sport** | Pointer to [**MLBSport**](MLBSport.md) |  | [optional] 
**ShortName** | Pointer to **string** |  | [optional] 
**FranchiseName** | Pointer to **string** |  | [optional] 
**ClubName** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewMLBTeam

`func NewMLBTeam(id float32, name string, ) *MLBTeam`

NewMLBTeam instantiates a new MLBTeam object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBTeamWithDefaults

`func NewMLBTeamWithDefaults() *MLBTeam`

NewMLBTeamWithDefaults instantiates a new MLBTeam object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MLBTeam) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MLBTeam) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MLBTeam) SetId(v float32)`

SetId sets Id field to given value.


### GetName

`func (o *MLBTeam) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MLBTeam) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MLBTeam) SetName(v string)`

SetName sets Name field to given value.


### GetLink

`func (o *MLBTeam) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *MLBTeam) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *MLBTeam) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *MLBTeam) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetAllStarStatus

`func (o *MLBTeam) GetAllStarStatus() string`

GetAllStarStatus returns the AllStarStatus field if non-nil, zero value otherwise.

### GetAllStarStatusOk

`func (o *MLBTeam) GetAllStarStatusOk() (*string, bool)`

GetAllStarStatusOk returns a tuple with the AllStarStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllStarStatus

`func (o *MLBTeam) SetAllStarStatus(v string)`

SetAllStarStatus sets AllStarStatus field to given value.

### HasAllStarStatus

`func (o *MLBTeam) HasAllStarStatus() bool`

HasAllStarStatus returns a boolean if a field has been set.

### GetSeason

`func (o *MLBTeam) GetSeason() float32`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBTeam) GetSeasonOk() (*float32, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBTeam) SetSeason(v float32)`

SetSeason sets Season field to given value.

### HasSeason

`func (o *MLBTeam) HasSeason() bool`

HasSeason returns a boolean if a field has been set.

### GetVenue

`func (o *MLBTeam) GetVenue() MLBVenue`

GetVenue returns the Venue field if non-nil, zero value otherwise.

### GetVenueOk

`func (o *MLBTeam) GetVenueOk() (*MLBVenue, bool)`

GetVenueOk returns a tuple with the Venue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVenue

`func (o *MLBTeam) SetVenue(v MLBVenue)`

SetVenue sets Venue field to given value.

### HasVenue

`func (o *MLBTeam) HasVenue() bool`

HasVenue returns a boolean if a field has been set.

### GetSpringVenue

`func (o *MLBTeam) GetSpringVenue() MLBVenue`

GetSpringVenue returns the SpringVenue field if non-nil, zero value otherwise.

### GetSpringVenueOk

`func (o *MLBTeam) GetSpringVenueOk() (*MLBVenue, bool)`

GetSpringVenueOk returns a tuple with the SpringVenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpringVenue

`func (o *MLBTeam) SetSpringVenue(v MLBVenue)`

SetSpringVenue sets SpringVenue field to given value.

### HasSpringVenue

`func (o *MLBTeam) HasSpringVenue() bool`

HasSpringVenue returns a boolean if a field has been set.

### GetTeamCode

`func (o *MLBTeam) GetTeamCode() string`

GetTeamCode returns the TeamCode field if non-nil, zero value otherwise.

### GetTeamCodeOk

`func (o *MLBTeam) GetTeamCodeOk() (*string, bool)`

GetTeamCodeOk returns a tuple with the TeamCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamCode

`func (o *MLBTeam) SetTeamCode(v string)`

SetTeamCode sets TeamCode field to given value.

### HasTeamCode

`func (o *MLBTeam) HasTeamCode() bool`

HasTeamCode returns a boolean if a field has been set.

### GetFileCode

`func (o *MLBTeam) GetFileCode() string`

GetFileCode returns the FileCode field if non-nil, zero value otherwise.

### GetFileCodeOk

`func (o *MLBTeam) GetFileCodeOk() (*string, bool)`

GetFileCodeOk returns a tuple with the FileCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileCode

`func (o *MLBTeam) SetFileCode(v string)`

SetFileCode sets FileCode field to given value.

### HasFileCode

`func (o *MLBTeam) HasFileCode() bool`

HasFileCode returns a boolean if a field has been set.

### GetAbbreviation

`func (o *MLBTeam) GetAbbreviation() string`

GetAbbreviation returns the Abbreviation field if non-nil, zero value otherwise.

### GetAbbreviationOk

`func (o *MLBTeam) GetAbbreviationOk() (*string, bool)`

GetAbbreviationOk returns a tuple with the Abbreviation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbbreviation

`func (o *MLBTeam) SetAbbreviation(v string)`

SetAbbreviation sets Abbreviation field to given value.

### HasAbbreviation

`func (o *MLBTeam) HasAbbreviation() bool`

HasAbbreviation returns a boolean if a field has been set.

### GetTeamName

`func (o *MLBTeam) GetTeamName() string`

GetTeamName returns the TeamName field if non-nil, zero value otherwise.

### GetTeamNameOk

`func (o *MLBTeam) GetTeamNameOk() (*string, bool)`

GetTeamNameOk returns a tuple with the TeamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamName

`func (o *MLBTeam) SetTeamName(v string)`

SetTeamName sets TeamName field to given value.

### HasTeamName

`func (o *MLBTeam) HasTeamName() bool`

HasTeamName returns a boolean if a field has been set.

### GetLocationName

`func (o *MLBTeam) GetLocationName() string`

GetLocationName returns the LocationName field if non-nil, zero value otherwise.

### GetLocationNameOk

`func (o *MLBTeam) GetLocationNameOk() (*string, bool)`

GetLocationNameOk returns a tuple with the LocationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocationName

`func (o *MLBTeam) SetLocationName(v string)`

SetLocationName sets LocationName field to given value.

### HasLocationName

`func (o *MLBTeam) HasLocationName() bool`

HasLocationName returns a boolean if a field has been set.

### GetFirstYearOfPlay

`func (o *MLBTeam) GetFirstYearOfPlay() string`

GetFirstYearOfPlay returns the FirstYearOfPlay field if non-nil, zero value otherwise.

### GetFirstYearOfPlayOk

`func (o *MLBTeam) GetFirstYearOfPlayOk() (*string, bool)`

GetFirstYearOfPlayOk returns a tuple with the FirstYearOfPlay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstYearOfPlay

`func (o *MLBTeam) SetFirstYearOfPlay(v string)`

SetFirstYearOfPlay sets FirstYearOfPlay field to given value.

### HasFirstYearOfPlay

`func (o *MLBTeam) HasFirstYearOfPlay() bool`

HasFirstYearOfPlay returns a boolean if a field has been set.

### GetLeague

`func (o *MLBTeam) GetLeague() MLBLeague`

GetLeague returns the League field if non-nil, zero value otherwise.

### GetLeagueOk

`func (o *MLBTeam) GetLeagueOk() (*MLBLeague, bool)`

GetLeagueOk returns a tuple with the League field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeague

`func (o *MLBTeam) SetLeague(v MLBLeague)`

SetLeague sets League field to given value.

### HasLeague

`func (o *MLBTeam) HasLeague() bool`

HasLeague returns a boolean if a field has been set.

### GetSpringLeague

`func (o *MLBTeam) GetSpringLeague() MLBLeague`

GetSpringLeague returns the SpringLeague field if non-nil, zero value otherwise.

### GetSpringLeagueOk

`func (o *MLBTeam) GetSpringLeagueOk() (*MLBLeague, bool)`

GetSpringLeagueOk returns a tuple with the SpringLeague field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpringLeague

`func (o *MLBTeam) SetSpringLeague(v MLBLeague)`

SetSpringLeague sets SpringLeague field to given value.

### HasSpringLeague

`func (o *MLBTeam) HasSpringLeague() bool`

HasSpringLeague returns a boolean if a field has been set.

### GetDivision

`func (o *MLBTeam) GetDivision() MLBDivision`

GetDivision returns the Division field if non-nil, zero value otherwise.

### GetDivisionOk

`func (o *MLBTeam) GetDivisionOk() (*MLBDivision, bool)`

GetDivisionOk returns a tuple with the Division field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivision

`func (o *MLBTeam) SetDivision(v MLBDivision)`

SetDivision sets Division field to given value.

### HasDivision

`func (o *MLBTeam) HasDivision() bool`

HasDivision returns a boolean if a field has been set.

### GetSport

`func (o *MLBTeam) GetSport() MLBSport`

GetSport returns the Sport field if non-nil, zero value otherwise.

### GetSportOk

`func (o *MLBTeam) GetSportOk() (*MLBSport, bool)`

GetSportOk returns a tuple with the Sport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSport

`func (o *MLBTeam) SetSport(v MLBSport)`

SetSport sets Sport field to given value.

### HasSport

`func (o *MLBTeam) HasSport() bool`

HasSport returns a boolean if a field has been set.

### GetShortName

`func (o *MLBTeam) GetShortName() string`

GetShortName returns the ShortName field if non-nil, zero value otherwise.

### GetShortNameOk

`func (o *MLBTeam) GetShortNameOk() (*string, bool)`

GetShortNameOk returns a tuple with the ShortName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortName

`func (o *MLBTeam) SetShortName(v string)`

SetShortName sets ShortName field to given value.

### HasShortName

`func (o *MLBTeam) HasShortName() bool`

HasShortName returns a boolean if a field has been set.

### GetFranchiseName

`func (o *MLBTeam) GetFranchiseName() string`

GetFranchiseName returns the FranchiseName field if non-nil, zero value otherwise.

### GetFranchiseNameOk

`func (o *MLBTeam) GetFranchiseNameOk() (*string, bool)`

GetFranchiseNameOk returns a tuple with the FranchiseName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFranchiseName

`func (o *MLBTeam) SetFranchiseName(v string)`

SetFranchiseName sets FranchiseName field to given value.

### HasFranchiseName

`func (o *MLBTeam) HasFranchiseName() bool`

HasFranchiseName returns a boolean if a field has been set.

### GetClubName

`func (o *MLBTeam) GetClubName() string`

GetClubName returns the ClubName field if non-nil, zero value otherwise.

### GetClubNameOk

`func (o *MLBTeam) GetClubNameOk() (*string, bool)`

GetClubNameOk returns a tuple with the ClubName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClubName

`func (o *MLBTeam) SetClubName(v string)`

SetClubName sets ClubName field to given value.

### HasClubName

`func (o *MLBTeam) HasClubName() bool`

HasClubName returns a boolean if a field has been set.

### GetActive

`func (o *MLBTeam) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MLBTeam) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MLBTeam) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *MLBTeam) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


