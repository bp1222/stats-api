# MLBVenue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **float32** |  | 
**Name** | **string** |  | 
**Link** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**Season** | Pointer to **string** |  | [optional] 

## Methods

### NewMLBVenue

`func NewMLBVenue(id float32, name string, ) *MLBVenue`

NewMLBVenue instantiates a new MLBVenue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBVenueWithDefaults

`func NewMLBVenueWithDefaults() *MLBVenue`

NewMLBVenueWithDefaults instantiates a new MLBVenue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MLBVenue) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MLBVenue) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MLBVenue) SetId(v float32)`

SetId sets Id field to given value.


### GetName

`func (o *MLBVenue) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MLBVenue) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MLBVenue) SetName(v string)`

SetName sets Name field to given value.


### GetLink

`func (o *MLBVenue) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *MLBVenue) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *MLBVenue) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *MLBVenue) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetActive

`func (o *MLBVenue) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MLBVenue) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MLBVenue) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *MLBVenue) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetSeason

`func (o *MLBVenue) GetSeason() string`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBVenue) GetSeasonOk() (*string, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBVenue) SetSeason(v string)`

SetSeason sets Season field to given value.

### HasSeason

`func (o *MLBVenue) HasSeason() bool`

HasSeason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


