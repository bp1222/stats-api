/*
MLB StatAPI

An spec API to consume the MLB Stat API 

API version: 0.0.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package go

import (
	"encoding/json"
)

// checks if the MLBStandingsList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MLBStandingsList{}

// MLBStandingsList struct for MLBStandingsList
type MLBStandingsList struct {
	Records []MLBStandings `json:"records,omitempty"`
}

// NewMLBStandingsList instantiates a new MLBStandingsList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMLBStandingsList() *MLBStandingsList {
	this := MLBStandingsList{}
	return &this
}

// NewMLBStandingsListWithDefaults instantiates a new MLBStandingsList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMLBStandingsListWithDefaults() *MLBStandingsList {
	this := MLBStandingsList{}
	return &this
}

// GetRecords returns the Records field value if set, zero value otherwise.
func (o *MLBStandingsList) GetRecords() []MLBStandings {
	if o == nil || IsNil(o.Records) {
		var ret []MLBStandings
		return ret
	}
	return o.Records
}

// GetRecordsOk returns a tuple with the Records field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBStandingsList) GetRecordsOk() ([]MLBStandings, bool) {
	if o == nil || IsNil(o.Records) {
		return nil, false
	}
	return o.Records, true
}

// HasRecords returns a boolean if a field has been set.
func (o *MLBStandingsList) HasRecords() bool {
	if o != nil && !IsNil(o.Records) {
		return true
	}

	return false
}

// SetRecords gets a reference to the given []MLBStandings and assigns it to the Records field.
func (o *MLBStandingsList) SetRecords(v []MLBStandings) {
	o.Records = v
}

func (o MLBStandingsList) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MLBStandingsList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Records) {
		toSerialize["records"] = o.Records
	}
	return toSerialize, nil
}

type NullableMLBStandingsList struct {
	value *MLBStandingsList
	isSet bool
}

func (v NullableMLBStandingsList) Get() *MLBStandingsList {
	return v.value
}

func (v *NullableMLBStandingsList) Set(val *MLBStandingsList) {
	v.value = val
	v.isSet = true
}

func (v NullableMLBStandingsList) IsSet() bool {
	return v.isSet
}

func (v *NullableMLBStandingsList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMLBStandingsList(val *MLBStandingsList) *NullableMLBStandingsList {
	return &NullableMLBStandingsList{value: val, isSet: true}
}

func (v NullableMLBStandingsList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMLBStandingsList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


