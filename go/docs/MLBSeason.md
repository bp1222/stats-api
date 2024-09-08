# MLBSeason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SeasonId** | **string** |  | 
**HasWildcard** | Pointer to **bool** |  | [optional] 
**PreSeasonStartDate** | Pointer to **string** |  | [optional] 
**PreSeasonEndDate** | Pointer to **string** |  | [optional] 
**SeasonStartDate** | **string** |  | 
**SeasonEndDate** | **string** |  | 
**SpringStartDate** | Pointer to **string** |  | [optional] 
**SpringEndDate** | Pointer to **string** |  | [optional] 
**RegularSeasonStartDate** | **string** |  | 
**LastDate1stHalf** | Pointer to **string** |  | [optional] 
**AllStartDate** | Pointer to **string** |  | [optional] 
**FirstDate2ndHalf** | Pointer to **string** |  | [optional] 
**RegularSeasonEndDate** | **string** |  | 
**PostSeasonStartDate** | Pointer to **string** |  | [optional] 
**PostSeasonEndDate** | Pointer to **string** |  | [optional] 
**OffSeasonStartDate** | Pointer to **string** |  | [optional] 
**OffSeasonEndDate** | Pointer to **string** |  | [optional] 
**SeasonLevelGamedayType** | Pointer to **string** |  | [optional] 
**GameLevelGamedayType** | Pointer to **string** |  | [optional] 
**QualifierPlateAppearances** | Pointer to **float32** |  | [optional] 
**QualifierOutsPitched** | Pointer to **float32** |  | [optional] 

## Methods

### NewMLBSeason

`func NewMLBSeason(seasonId string, seasonStartDate string, seasonEndDate string, regularSeasonStartDate string, regularSeasonEndDate string, ) *MLBSeason`

NewMLBSeason instantiates a new MLBSeason object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBSeasonWithDefaults

`func NewMLBSeasonWithDefaults() *MLBSeason`

NewMLBSeasonWithDefaults instantiates a new MLBSeason object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSeasonId

`func (o *MLBSeason) GetSeasonId() string`

GetSeasonId returns the SeasonId field if non-nil, zero value otherwise.

### GetSeasonIdOk

`func (o *MLBSeason) GetSeasonIdOk() (*string, bool)`

GetSeasonIdOk returns a tuple with the SeasonId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonId

`func (o *MLBSeason) SetSeasonId(v string)`

SetSeasonId sets SeasonId field to given value.


### GetHasWildcard

`func (o *MLBSeason) GetHasWildcard() bool`

GetHasWildcard returns the HasWildcard field if non-nil, zero value otherwise.

### GetHasWildcardOk

`func (o *MLBSeason) GetHasWildcardOk() (*bool, bool)`

GetHasWildcardOk returns a tuple with the HasWildcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasWildcard

`func (o *MLBSeason) SetHasWildcard(v bool)`

SetHasWildcard sets HasWildcard field to given value.

### HasHasWildcard

`func (o *MLBSeason) HasHasWildcard() bool`

HasHasWildcard returns a boolean if a field has been set.

### GetPreSeasonStartDate

`func (o *MLBSeason) GetPreSeasonStartDate() string`

GetPreSeasonStartDate returns the PreSeasonStartDate field if non-nil, zero value otherwise.

### GetPreSeasonStartDateOk

`func (o *MLBSeason) GetPreSeasonStartDateOk() (*string, bool)`

GetPreSeasonStartDateOk returns a tuple with the PreSeasonStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreSeasonStartDate

`func (o *MLBSeason) SetPreSeasonStartDate(v string)`

SetPreSeasonStartDate sets PreSeasonStartDate field to given value.

### HasPreSeasonStartDate

`func (o *MLBSeason) HasPreSeasonStartDate() bool`

HasPreSeasonStartDate returns a boolean if a field has been set.

### GetPreSeasonEndDate

`func (o *MLBSeason) GetPreSeasonEndDate() string`

GetPreSeasonEndDate returns the PreSeasonEndDate field if non-nil, zero value otherwise.

### GetPreSeasonEndDateOk

`func (o *MLBSeason) GetPreSeasonEndDateOk() (*string, bool)`

GetPreSeasonEndDateOk returns a tuple with the PreSeasonEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreSeasonEndDate

`func (o *MLBSeason) SetPreSeasonEndDate(v string)`

SetPreSeasonEndDate sets PreSeasonEndDate field to given value.

### HasPreSeasonEndDate

`func (o *MLBSeason) HasPreSeasonEndDate() bool`

HasPreSeasonEndDate returns a boolean if a field has been set.

### GetSeasonStartDate

`func (o *MLBSeason) GetSeasonStartDate() string`

GetSeasonStartDate returns the SeasonStartDate field if non-nil, zero value otherwise.

### GetSeasonStartDateOk

`func (o *MLBSeason) GetSeasonStartDateOk() (*string, bool)`

GetSeasonStartDateOk returns a tuple with the SeasonStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonStartDate

`func (o *MLBSeason) SetSeasonStartDate(v string)`

SetSeasonStartDate sets SeasonStartDate field to given value.


### GetSeasonEndDate

`func (o *MLBSeason) GetSeasonEndDate() string`

GetSeasonEndDate returns the SeasonEndDate field if non-nil, zero value otherwise.

### GetSeasonEndDateOk

`func (o *MLBSeason) GetSeasonEndDateOk() (*string, bool)`

GetSeasonEndDateOk returns a tuple with the SeasonEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonEndDate

`func (o *MLBSeason) SetSeasonEndDate(v string)`

SetSeasonEndDate sets SeasonEndDate field to given value.


### GetSpringStartDate

`func (o *MLBSeason) GetSpringStartDate() string`

GetSpringStartDate returns the SpringStartDate field if non-nil, zero value otherwise.

### GetSpringStartDateOk

`func (o *MLBSeason) GetSpringStartDateOk() (*string, bool)`

GetSpringStartDateOk returns a tuple with the SpringStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpringStartDate

`func (o *MLBSeason) SetSpringStartDate(v string)`

SetSpringStartDate sets SpringStartDate field to given value.

### HasSpringStartDate

`func (o *MLBSeason) HasSpringStartDate() bool`

HasSpringStartDate returns a boolean if a field has been set.

### GetSpringEndDate

`func (o *MLBSeason) GetSpringEndDate() string`

GetSpringEndDate returns the SpringEndDate field if non-nil, zero value otherwise.

### GetSpringEndDateOk

`func (o *MLBSeason) GetSpringEndDateOk() (*string, bool)`

GetSpringEndDateOk returns a tuple with the SpringEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpringEndDate

`func (o *MLBSeason) SetSpringEndDate(v string)`

SetSpringEndDate sets SpringEndDate field to given value.

### HasSpringEndDate

`func (o *MLBSeason) HasSpringEndDate() bool`

HasSpringEndDate returns a boolean if a field has been set.

### GetRegularSeasonStartDate

`func (o *MLBSeason) GetRegularSeasonStartDate() string`

GetRegularSeasonStartDate returns the RegularSeasonStartDate field if non-nil, zero value otherwise.

### GetRegularSeasonStartDateOk

`func (o *MLBSeason) GetRegularSeasonStartDateOk() (*string, bool)`

GetRegularSeasonStartDateOk returns a tuple with the RegularSeasonStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegularSeasonStartDate

`func (o *MLBSeason) SetRegularSeasonStartDate(v string)`

SetRegularSeasonStartDate sets RegularSeasonStartDate field to given value.


### GetLastDate1stHalf

`func (o *MLBSeason) GetLastDate1stHalf() string`

GetLastDate1stHalf returns the LastDate1stHalf field if non-nil, zero value otherwise.

### GetLastDate1stHalfOk

`func (o *MLBSeason) GetLastDate1stHalfOk() (*string, bool)`

GetLastDate1stHalfOk returns a tuple with the LastDate1stHalf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastDate1stHalf

`func (o *MLBSeason) SetLastDate1stHalf(v string)`

SetLastDate1stHalf sets LastDate1stHalf field to given value.

### HasLastDate1stHalf

`func (o *MLBSeason) HasLastDate1stHalf() bool`

HasLastDate1stHalf returns a boolean if a field has been set.

### GetAllStartDate

`func (o *MLBSeason) GetAllStartDate() string`

GetAllStartDate returns the AllStartDate field if non-nil, zero value otherwise.

### GetAllStartDateOk

`func (o *MLBSeason) GetAllStartDateOk() (*string, bool)`

GetAllStartDateOk returns a tuple with the AllStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllStartDate

`func (o *MLBSeason) SetAllStartDate(v string)`

SetAllStartDate sets AllStartDate field to given value.

### HasAllStartDate

`func (o *MLBSeason) HasAllStartDate() bool`

HasAllStartDate returns a boolean if a field has been set.

### GetFirstDate2ndHalf

`func (o *MLBSeason) GetFirstDate2ndHalf() string`

GetFirstDate2ndHalf returns the FirstDate2ndHalf field if non-nil, zero value otherwise.

### GetFirstDate2ndHalfOk

`func (o *MLBSeason) GetFirstDate2ndHalfOk() (*string, bool)`

GetFirstDate2ndHalfOk returns a tuple with the FirstDate2ndHalf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstDate2ndHalf

`func (o *MLBSeason) SetFirstDate2ndHalf(v string)`

SetFirstDate2ndHalf sets FirstDate2ndHalf field to given value.

### HasFirstDate2ndHalf

`func (o *MLBSeason) HasFirstDate2ndHalf() bool`

HasFirstDate2ndHalf returns a boolean if a field has been set.

### GetRegularSeasonEndDate

`func (o *MLBSeason) GetRegularSeasonEndDate() string`

GetRegularSeasonEndDate returns the RegularSeasonEndDate field if non-nil, zero value otherwise.

### GetRegularSeasonEndDateOk

`func (o *MLBSeason) GetRegularSeasonEndDateOk() (*string, bool)`

GetRegularSeasonEndDateOk returns a tuple with the RegularSeasonEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegularSeasonEndDate

`func (o *MLBSeason) SetRegularSeasonEndDate(v string)`

SetRegularSeasonEndDate sets RegularSeasonEndDate field to given value.


### GetPostSeasonStartDate

`func (o *MLBSeason) GetPostSeasonStartDate() string`

GetPostSeasonStartDate returns the PostSeasonStartDate field if non-nil, zero value otherwise.

### GetPostSeasonStartDateOk

`func (o *MLBSeason) GetPostSeasonStartDateOk() (*string, bool)`

GetPostSeasonStartDateOk returns a tuple with the PostSeasonStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostSeasonStartDate

`func (o *MLBSeason) SetPostSeasonStartDate(v string)`

SetPostSeasonStartDate sets PostSeasonStartDate field to given value.

### HasPostSeasonStartDate

`func (o *MLBSeason) HasPostSeasonStartDate() bool`

HasPostSeasonStartDate returns a boolean if a field has been set.

### GetPostSeasonEndDate

`func (o *MLBSeason) GetPostSeasonEndDate() string`

GetPostSeasonEndDate returns the PostSeasonEndDate field if non-nil, zero value otherwise.

### GetPostSeasonEndDateOk

`func (o *MLBSeason) GetPostSeasonEndDateOk() (*string, bool)`

GetPostSeasonEndDateOk returns a tuple with the PostSeasonEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostSeasonEndDate

`func (o *MLBSeason) SetPostSeasonEndDate(v string)`

SetPostSeasonEndDate sets PostSeasonEndDate field to given value.

### HasPostSeasonEndDate

`func (o *MLBSeason) HasPostSeasonEndDate() bool`

HasPostSeasonEndDate returns a boolean if a field has been set.

### GetOffSeasonStartDate

`func (o *MLBSeason) GetOffSeasonStartDate() string`

GetOffSeasonStartDate returns the OffSeasonStartDate field if non-nil, zero value otherwise.

### GetOffSeasonStartDateOk

`func (o *MLBSeason) GetOffSeasonStartDateOk() (*string, bool)`

GetOffSeasonStartDateOk returns a tuple with the OffSeasonStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffSeasonStartDate

`func (o *MLBSeason) SetOffSeasonStartDate(v string)`

SetOffSeasonStartDate sets OffSeasonStartDate field to given value.

### HasOffSeasonStartDate

`func (o *MLBSeason) HasOffSeasonStartDate() bool`

HasOffSeasonStartDate returns a boolean if a field has been set.

### GetOffSeasonEndDate

`func (o *MLBSeason) GetOffSeasonEndDate() string`

GetOffSeasonEndDate returns the OffSeasonEndDate field if non-nil, zero value otherwise.

### GetOffSeasonEndDateOk

`func (o *MLBSeason) GetOffSeasonEndDateOk() (*string, bool)`

GetOffSeasonEndDateOk returns a tuple with the OffSeasonEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffSeasonEndDate

`func (o *MLBSeason) SetOffSeasonEndDate(v string)`

SetOffSeasonEndDate sets OffSeasonEndDate field to given value.

### HasOffSeasonEndDate

`func (o *MLBSeason) HasOffSeasonEndDate() bool`

HasOffSeasonEndDate returns a boolean if a field has been set.

### GetSeasonLevelGamedayType

`func (o *MLBSeason) GetSeasonLevelGamedayType() string`

GetSeasonLevelGamedayType returns the SeasonLevelGamedayType field if non-nil, zero value otherwise.

### GetSeasonLevelGamedayTypeOk

`func (o *MLBSeason) GetSeasonLevelGamedayTypeOk() (*string, bool)`

GetSeasonLevelGamedayTypeOk returns a tuple with the SeasonLevelGamedayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonLevelGamedayType

`func (o *MLBSeason) SetSeasonLevelGamedayType(v string)`

SetSeasonLevelGamedayType sets SeasonLevelGamedayType field to given value.

### HasSeasonLevelGamedayType

`func (o *MLBSeason) HasSeasonLevelGamedayType() bool`

HasSeasonLevelGamedayType returns a boolean if a field has been set.

### GetGameLevelGamedayType

`func (o *MLBSeason) GetGameLevelGamedayType() string`

GetGameLevelGamedayType returns the GameLevelGamedayType field if non-nil, zero value otherwise.

### GetGameLevelGamedayTypeOk

`func (o *MLBSeason) GetGameLevelGamedayTypeOk() (*string, bool)`

GetGameLevelGamedayTypeOk returns a tuple with the GameLevelGamedayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameLevelGamedayType

`func (o *MLBSeason) SetGameLevelGamedayType(v string)`

SetGameLevelGamedayType sets GameLevelGamedayType field to given value.

### HasGameLevelGamedayType

`func (o *MLBSeason) HasGameLevelGamedayType() bool`

HasGameLevelGamedayType returns a boolean if a field has been set.

### GetQualifierPlateAppearances

`func (o *MLBSeason) GetQualifierPlateAppearances() float32`

GetQualifierPlateAppearances returns the QualifierPlateAppearances field if non-nil, zero value otherwise.

### GetQualifierPlateAppearancesOk

`func (o *MLBSeason) GetQualifierPlateAppearancesOk() (*float32, bool)`

GetQualifierPlateAppearancesOk returns a tuple with the QualifierPlateAppearances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifierPlateAppearances

`func (o *MLBSeason) SetQualifierPlateAppearances(v float32)`

SetQualifierPlateAppearances sets QualifierPlateAppearances field to given value.

### HasQualifierPlateAppearances

`func (o *MLBSeason) HasQualifierPlateAppearances() bool`

HasQualifierPlateAppearances returns a boolean if a field has been set.

### GetQualifierOutsPitched

`func (o *MLBSeason) GetQualifierOutsPitched() float32`

GetQualifierOutsPitched returns the QualifierOutsPitched field if non-nil, zero value otherwise.

### GetQualifierOutsPitchedOk

`func (o *MLBSeason) GetQualifierOutsPitchedOk() (*float32, bool)`

GetQualifierOutsPitchedOk returns a tuple with the QualifierOutsPitched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifierOutsPitched

`func (o *MLBSeason) SetQualifierOutsPitched(v float32)`

SetQualifierOutsPitched sets QualifierOutsPitched field to given value.

### HasQualifierOutsPitched

`func (o *MLBSeason) HasQualifierOutsPitched() bool`

HasQualifierOutsPitched returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


