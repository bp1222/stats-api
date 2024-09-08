# MLBStreak

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreakType** | Pointer to **string** | Streak Type:   * Losing Streak   * Winning Streak  | [optional] 

## Methods

### NewMLBStreak

`func NewMLBStreak() *MLBStreak`

NewMLBStreak instantiates a new MLBStreak object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBStreakWithDefaults

`func NewMLBStreakWithDefaults() *MLBStreak`

NewMLBStreakWithDefaults instantiates a new MLBStreak object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreakType

`func (o *MLBStreak) GetStreakType() string`

GetStreakType returns the StreakType field if non-nil, zero value otherwise.

### GetStreakTypeOk

`func (o *MLBStreak) GetStreakTypeOk() (*string, bool)`

GetStreakTypeOk returns a tuple with the StreakType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreakType

`func (o *MLBStreak) SetStreakType(v string)`

SetStreakType sets StreakType field to given value.

### HasStreakType

`func (o *MLBStreak) HasStreakType() bool`

HasStreakType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


