# MLBGameStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AbstractGameState** | Pointer to **string** |  | [optional] 
**CodedGameState** | Pointer to **string** | Coded Game State   * &#x60;F&#x60; - Final   * &#x60;D&#x60; - Delayed/Postponed   * &#x60;S&#x60; - Scheduled   * &#x60;I&#x60; - In Progress   * &#x60;P&#x60; - Pregame   * &#x60;O&#x60; - Game Over  | [optional] 
**DetailedState** | Pointer to **string** |  | [optional] 
**StatusCode** | Pointer to **string** |  | [optional] 
**StartTimeTBD** | Pointer to **bool** |  | [optional] 
**AbstractGameCode** | Pointer to **string** |  | [optional] 

## Methods

### NewMLBGameStatus

`func NewMLBGameStatus() *MLBGameStatus`

NewMLBGameStatus instantiates a new MLBGameStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBGameStatusWithDefaults

`func NewMLBGameStatusWithDefaults() *MLBGameStatus`

NewMLBGameStatusWithDefaults instantiates a new MLBGameStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAbstractGameState

`func (o *MLBGameStatus) GetAbstractGameState() string`

GetAbstractGameState returns the AbstractGameState field if non-nil, zero value otherwise.

### GetAbstractGameStateOk

`func (o *MLBGameStatus) GetAbstractGameStateOk() (*string, bool)`

GetAbstractGameStateOk returns a tuple with the AbstractGameState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbstractGameState

`func (o *MLBGameStatus) SetAbstractGameState(v string)`

SetAbstractGameState sets AbstractGameState field to given value.

### HasAbstractGameState

`func (o *MLBGameStatus) HasAbstractGameState() bool`

HasAbstractGameState returns a boolean if a field has been set.

### GetCodedGameState

`func (o *MLBGameStatus) GetCodedGameState() string`

GetCodedGameState returns the CodedGameState field if non-nil, zero value otherwise.

### GetCodedGameStateOk

`func (o *MLBGameStatus) GetCodedGameStateOk() (*string, bool)`

GetCodedGameStateOk returns a tuple with the CodedGameState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodedGameState

`func (o *MLBGameStatus) SetCodedGameState(v string)`

SetCodedGameState sets CodedGameState field to given value.

### HasCodedGameState

`func (o *MLBGameStatus) HasCodedGameState() bool`

HasCodedGameState returns a boolean if a field has been set.

### GetDetailedState

`func (o *MLBGameStatus) GetDetailedState() string`

GetDetailedState returns the DetailedState field if non-nil, zero value otherwise.

### GetDetailedStateOk

`func (o *MLBGameStatus) GetDetailedStateOk() (*string, bool)`

GetDetailedStateOk returns a tuple with the DetailedState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailedState

`func (o *MLBGameStatus) SetDetailedState(v string)`

SetDetailedState sets DetailedState field to given value.

### HasDetailedState

`func (o *MLBGameStatus) HasDetailedState() bool`

HasDetailedState returns a boolean if a field has been set.

### GetStatusCode

`func (o *MLBGameStatus) GetStatusCode() string`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *MLBGameStatus) GetStatusCodeOk() (*string, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *MLBGameStatus) SetStatusCode(v string)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *MLBGameStatus) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetStartTimeTBD

`func (o *MLBGameStatus) GetStartTimeTBD() bool`

GetStartTimeTBD returns the StartTimeTBD field if non-nil, zero value otherwise.

### GetStartTimeTBDOk

`func (o *MLBGameStatus) GetStartTimeTBDOk() (*bool, bool)`

GetStartTimeTBDOk returns a tuple with the StartTimeTBD field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTimeTBD

`func (o *MLBGameStatus) SetStartTimeTBD(v bool)`

SetStartTimeTBD sets StartTimeTBD field to given value.

### HasStartTimeTBD

`func (o *MLBGameStatus) HasStartTimeTBD() bool`

HasStartTimeTBD returns a boolean if a field has been set.

### GetAbstractGameCode

`func (o *MLBGameStatus) GetAbstractGameCode() string`

GetAbstractGameCode returns the AbstractGameCode field if non-nil, zero value otherwise.

### GetAbstractGameCodeOk

`func (o *MLBGameStatus) GetAbstractGameCodeOk() (*string, bool)`

GetAbstractGameCodeOk returns a tuple with the AbstractGameCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbstractGameCode

`func (o *MLBGameStatus) SetAbstractGameCode(v string)`

SetAbstractGameCode sets AbstractGameCode field to given value.

### HasAbstractGameCode

`func (o *MLBGameStatus) HasAbstractGameCode() bool`

HasAbstractGameCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


