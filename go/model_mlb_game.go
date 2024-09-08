/*
MLB StatAPI

An spec API to consume the MLB Stat API 

API version: 0.0.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package go

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the MLBGame type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MLBGame{}

// MLBGame Game Thing 
type MLBGame struct {
	GamePk float32 `json:"gamePk"`
	GameGuid string `json:"gameGuid"`
	Link *string `json:"link,omitempty"`
	// Game Type:   * `E` - Exhibition   * `S` - Spring Training   * `R` - Regular Season   * `F` - Wild Card Series   * `D` - Division Series   * `L` - League Championship Series   * `W` - World Series 
	GameType string `json:"gameType"`
	Season float32 `json:"season"`
	GameDate string `json:"gameDate"`
	OfficialDate string `json:"officialDate"`
	RescheduledTo *float32 `json:"rescheduledTo,omitempty"`
	RescheduledToDate *string `json:"rescheduledToDate,omitempty"`
	RescheduledFrom *float32 `json:"rescheduledFrom,omitempty"`
	RescheduledFromDate *string `json:"rescheduledFromDate,omitempty"`
	Status MLBGameStatus `json:"status"`
	Teams MLBGameTeams `json:"teams"`
	Venue *MLBVenue `json:"venue,omitempty"`
	IsTie *bool `json:"isTie,omitempty"`
	GameNumber float32 `json:"gameNumber"`
	PublicFacing *bool `json:"publicFacing,omitempty"`
	DoubleHeader *string `json:"doubleHeader,omitempty"`
	GamedayType *string `json:"gamedayType,omitempty"`
	Tiebreaker *string `json:"tiebreaker,omitempty"`
	CalendarEventID *string `json:"calendarEventID,omitempty"`
	SeasonDisplay *string `json:"seasonDisplay,omitempty"`
	DayNight *string `json:"dayNight,omitempty"`
	Description *string `json:"description,omitempty"`
	ScheduledInnings *float32 `json:"scheduledInnings,omitempty"`
	ReverseHomeAwayStatus *bool `json:"reverseHomeAwayStatus,omitempty"`
	InningBreakLength *float32 `json:"inningBreakLength,omitempty"`
	GamesInSeries float32 `json:"gamesInSeries"`
	SeriesGameNumber float32 `json:"seriesGameNumber"`
	SeriesDescription *string `json:"seriesDescription,omitempty"`
	RecordSource *string `json:"recordSource,omitempty"`
	IfNecessary *string `json:"ifNecessary,omitempty"`
	IfNecessaryDescription *string `json:"ifNecessaryDescription,omitempty"`
}

type _MLBGame MLBGame

// NewMLBGame instantiates a new MLBGame object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMLBGame(gamePk float32, gameGuid string, gameType string, season float32, gameDate string, officialDate string, status MLBGameStatus, teams MLBGameTeams, gameNumber float32, gamesInSeries float32, seriesGameNumber float32) *MLBGame {
	this := MLBGame{}
	this.GamePk = gamePk
	this.GameGuid = gameGuid
	this.GameType = gameType
	this.Season = season
	this.GameDate = gameDate
	this.OfficialDate = officialDate
	this.Status = status
	this.Teams = teams
	this.GameNumber = gameNumber
	this.GamesInSeries = gamesInSeries
	this.SeriesGameNumber = seriesGameNumber
	return &this
}

// NewMLBGameWithDefaults instantiates a new MLBGame object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMLBGameWithDefaults() *MLBGame {
	this := MLBGame{}
	return &this
}

// GetGamePk returns the GamePk field value
func (o *MLBGame) GetGamePk() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.GamePk
}

// GetGamePkOk returns a tuple with the GamePk field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGamePkOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GamePk, true
}

// SetGamePk sets field value
func (o *MLBGame) SetGamePk(v float32) {
	o.GamePk = v
}

// GetGameGuid returns the GameGuid field value
func (o *MLBGame) GetGameGuid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GameGuid
}

// GetGameGuidOk returns a tuple with the GameGuid field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGameGuidOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GameGuid, true
}

// SetGameGuid sets field value
func (o *MLBGame) SetGameGuid(v string) {
	o.GameGuid = v
}

// GetLink returns the Link field value if set, zero value otherwise.
func (o *MLBGame) GetLink() string {
	if o == nil || IsNil(o.Link) {
		var ret string
		return ret
	}
	return *o.Link
}

// GetLinkOk returns a tuple with the Link field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetLinkOk() (*string, bool) {
	if o == nil || IsNil(o.Link) {
		return nil, false
	}
	return o.Link, true
}

// HasLink returns a boolean if a field has been set.
func (o *MLBGame) HasLink() bool {
	if o != nil && !IsNil(o.Link) {
		return true
	}

	return false
}

// SetLink gets a reference to the given string and assigns it to the Link field.
func (o *MLBGame) SetLink(v string) {
	o.Link = &v
}

// GetGameType returns the GameType field value
func (o *MLBGame) GetGameType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GameType
}

// GetGameTypeOk returns a tuple with the GameType field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGameTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GameType, true
}

// SetGameType sets field value
func (o *MLBGame) SetGameType(v string) {
	o.GameType = v
}

// GetSeason returns the Season field value
func (o *MLBGame) GetSeason() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Season
}

// GetSeasonOk returns a tuple with the Season field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetSeasonOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Season, true
}

// SetSeason sets field value
func (o *MLBGame) SetSeason(v float32) {
	o.Season = v
}

// GetGameDate returns the GameDate field value
func (o *MLBGame) GetGameDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GameDate
}

// GetGameDateOk returns a tuple with the GameDate field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGameDateOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GameDate, true
}

// SetGameDate sets field value
func (o *MLBGame) SetGameDate(v string) {
	o.GameDate = v
}

// GetOfficialDate returns the OfficialDate field value
func (o *MLBGame) GetOfficialDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.OfficialDate
}

// GetOfficialDateOk returns a tuple with the OfficialDate field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetOfficialDateOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.OfficialDate, true
}

// SetOfficialDate sets field value
func (o *MLBGame) SetOfficialDate(v string) {
	o.OfficialDate = v
}

// GetRescheduledTo returns the RescheduledTo field value if set, zero value otherwise.
func (o *MLBGame) GetRescheduledTo() float32 {
	if o == nil || IsNil(o.RescheduledTo) {
		var ret float32
		return ret
	}
	return *o.RescheduledTo
}

// GetRescheduledToOk returns a tuple with the RescheduledTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetRescheduledToOk() (*float32, bool) {
	if o == nil || IsNil(o.RescheduledTo) {
		return nil, false
	}
	return o.RescheduledTo, true
}

// HasRescheduledTo returns a boolean if a field has been set.
func (o *MLBGame) HasRescheduledTo() bool {
	if o != nil && !IsNil(o.RescheduledTo) {
		return true
	}

	return false
}

// SetRescheduledTo gets a reference to the given float32 and assigns it to the RescheduledTo field.
func (o *MLBGame) SetRescheduledTo(v float32) {
	o.RescheduledTo = &v
}

// GetRescheduledToDate returns the RescheduledToDate field value if set, zero value otherwise.
func (o *MLBGame) GetRescheduledToDate() string {
	if o == nil || IsNil(o.RescheduledToDate) {
		var ret string
		return ret
	}
	return *o.RescheduledToDate
}

// GetRescheduledToDateOk returns a tuple with the RescheduledToDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetRescheduledToDateOk() (*string, bool) {
	if o == nil || IsNil(o.RescheduledToDate) {
		return nil, false
	}
	return o.RescheduledToDate, true
}

// HasRescheduledToDate returns a boolean if a field has been set.
func (o *MLBGame) HasRescheduledToDate() bool {
	if o != nil && !IsNil(o.RescheduledToDate) {
		return true
	}

	return false
}

// SetRescheduledToDate gets a reference to the given string and assigns it to the RescheduledToDate field.
func (o *MLBGame) SetRescheduledToDate(v string) {
	o.RescheduledToDate = &v
}

// GetRescheduledFrom returns the RescheduledFrom field value if set, zero value otherwise.
func (o *MLBGame) GetRescheduledFrom() float32 {
	if o == nil || IsNil(o.RescheduledFrom) {
		var ret float32
		return ret
	}
	return *o.RescheduledFrom
}

// GetRescheduledFromOk returns a tuple with the RescheduledFrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetRescheduledFromOk() (*float32, bool) {
	if o == nil || IsNil(o.RescheduledFrom) {
		return nil, false
	}
	return o.RescheduledFrom, true
}

// HasRescheduledFrom returns a boolean if a field has been set.
func (o *MLBGame) HasRescheduledFrom() bool {
	if o != nil && !IsNil(o.RescheduledFrom) {
		return true
	}

	return false
}

// SetRescheduledFrom gets a reference to the given float32 and assigns it to the RescheduledFrom field.
func (o *MLBGame) SetRescheduledFrom(v float32) {
	o.RescheduledFrom = &v
}

// GetRescheduledFromDate returns the RescheduledFromDate field value if set, zero value otherwise.
func (o *MLBGame) GetRescheduledFromDate() string {
	if o == nil || IsNil(o.RescheduledFromDate) {
		var ret string
		return ret
	}
	return *o.RescheduledFromDate
}

// GetRescheduledFromDateOk returns a tuple with the RescheduledFromDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetRescheduledFromDateOk() (*string, bool) {
	if o == nil || IsNil(o.RescheduledFromDate) {
		return nil, false
	}
	return o.RescheduledFromDate, true
}

// HasRescheduledFromDate returns a boolean if a field has been set.
func (o *MLBGame) HasRescheduledFromDate() bool {
	if o != nil && !IsNil(o.RescheduledFromDate) {
		return true
	}

	return false
}

// SetRescheduledFromDate gets a reference to the given string and assigns it to the RescheduledFromDate field.
func (o *MLBGame) SetRescheduledFromDate(v string) {
	o.RescheduledFromDate = &v
}

// GetStatus returns the Status field value
func (o *MLBGame) GetStatus() MLBGameStatus {
	if o == nil {
		var ret MLBGameStatus
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetStatusOk() (*MLBGameStatus, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *MLBGame) SetStatus(v MLBGameStatus) {
	o.Status = v
}

// GetTeams returns the Teams field value
func (o *MLBGame) GetTeams() MLBGameTeams {
	if o == nil {
		var ret MLBGameTeams
		return ret
	}

	return o.Teams
}

// GetTeamsOk returns a tuple with the Teams field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetTeamsOk() (*MLBGameTeams, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Teams, true
}

// SetTeams sets field value
func (o *MLBGame) SetTeams(v MLBGameTeams) {
	o.Teams = v
}

// GetVenue returns the Venue field value if set, zero value otherwise.
func (o *MLBGame) GetVenue() MLBVenue {
	if o == nil || IsNil(o.Venue) {
		var ret MLBVenue
		return ret
	}
	return *o.Venue
}

// GetVenueOk returns a tuple with the Venue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetVenueOk() (*MLBVenue, bool) {
	if o == nil || IsNil(o.Venue) {
		return nil, false
	}
	return o.Venue, true
}

// HasVenue returns a boolean if a field has been set.
func (o *MLBGame) HasVenue() bool {
	if o != nil && !IsNil(o.Venue) {
		return true
	}

	return false
}

// SetVenue gets a reference to the given MLBVenue and assigns it to the Venue field.
func (o *MLBGame) SetVenue(v MLBVenue) {
	o.Venue = &v
}

// GetIsTie returns the IsTie field value if set, zero value otherwise.
func (o *MLBGame) GetIsTie() bool {
	if o == nil || IsNil(o.IsTie) {
		var ret bool
		return ret
	}
	return *o.IsTie
}

// GetIsTieOk returns a tuple with the IsTie field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetIsTieOk() (*bool, bool) {
	if o == nil || IsNil(o.IsTie) {
		return nil, false
	}
	return o.IsTie, true
}

// HasIsTie returns a boolean if a field has been set.
func (o *MLBGame) HasIsTie() bool {
	if o != nil && !IsNil(o.IsTie) {
		return true
	}

	return false
}

// SetIsTie gets a reference to the given bool and assigns it to the IsTie field.
func (o *MLBGame) SetIsTie(v bool) {
	o.IsTie = &v
}

// GetGameNumber returns the GameNumber field value
func (o *MLBGame) GetGameNumber() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.GameNumber
}

// GetGameNumberOk returns a tuple with the GameNumber field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGameNumberOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GameNumber, true
}

// SetGameNumber sets field value
func (o *MLBGame) SetGameNumber(v float32) {
	o.GameNumber = v
}

// GetPublicFacing returns the PublicFacing field value if set, zero value otherwise.
func (o *MLBGame) GetPublicFacing() bool {
	if o == nil || IsNil(o.PublicFacing) {
		var ret bool
		return ret
	}
	return *o.PublicFacing
}

// GetPublicFacingOk returns a tuple with the PublicFacing field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetPublicFacingOk() (*bool, bool) {
	if o == nil || IsNil(o.PublicFacing) {
		return nil, false
	}
	return o.PublicFacing, true
}

// HasPublicFacing returns a boolean if a field has been set.
func (o *MLBGame) HasPublicFacing() bool {
	if o != nil && !IsNil(o.PublicFacing) {
		return true
	}

	return false
}

// SetPublicFacing gets a reference to the given bool and assigns it to the PublicFacing field.
func (o *MLBGame) SetPublicFacing(v bool) {
	o.PublicFacing = &v
}

// GetDoubleHeader returns the DoubleHeader field value if set, zero value otherwise.
func (o *MLBGame) GetDoubleHeader() string {
	if o == nil || IsNil(o.DoubleHeader) {
		var ret string
		return ret
	}
	return *o.DoubleHeader
}

// GetDoubleHeaderOk returns a tuple with the DoubleHeader field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetDoubleHeaderOk() (*string, bool) {
	if o == nil || IsNil(o.DoubleHeader) {
		return nil, false
	}
	return o.DoubleHeader, true
}

// HasDoubleHeader returns a boolean if a field has been set.
func (o *MLBGame) HasDoubleHeader() bool {
	if o != nil && !IsNil(o.DoubleHeader) {
		return true
	}

	return false
}

// SetDoubleHeader gets a reference to the given string and assigns it to the DoubleHeader field.
func (o *MLBGame) SetDoubleHeader(v string) {
	o.DoubleHeader = &v
}

// GetGamedayType returns the GamedayType field value if set, zero value otherwise.
func (o *MLBGame) GetGamedayType() string {
	if o == nil || IsNil(o.GamedayType) {
		var ret string
		return ret
	}
	return *o.GamedayType
}

// GetGamedayTypeOk returns a tuple with the GamedayType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGamedayTypeOk() (*string, bool) {
	if o == nil || IsNil(o.GamedayType) {
		return nil, false
	}
	return o.GamedayType, true
}

// HasGamedayType returns a boolean if a field has been set.
func (o *MLBGame) HasGamedayType() bool {
	if o != nil && !IsNil(o.GamedayType) {
		return true
	}

	return false
}

// SetGamedayType gets a reference to the given string and assigns it to the GamedayType field.
func (o *MLBGame) SetGamedayType(v string) {
	o.GamedayType = &v
}

// GetTiebreaker returns the Tiebreaker field value if set, zero value otherwise.
func (o *MLBGame) GetTiebreaker() string {
	if o == nil || IsNil(o.Tiebreaker) {
		var ret string
		return ret
	}
	return *o.Tiebreaker
}

// GetTiebreakerOk returns a tuple with the Tiebreaker field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetTiebreakerOk() (*string, bool) {
	if o == nil || IsNil(o.Tiebreaker) {
		return nil, false
	}
	return o.Tiebreaker, true
}

// HasTiebreaker returns a boolean if a field has been set.
func (o *MLBGame) HasTiebreaker() bool {
	if o != nil && !IsNil(o.Tiebreaker) {
		return true
	}

	return false
}

// SetTiebreaker gets a reference to the given string and assigns it to the Tiebreaker field.
func (o *MLBGame) SetTiebreaker(v string) {
	o.Tiebreaker = &v
}

// GetCalendarEventID returns the CalendarEventID field value if set, zero value otherwise.
func (o *MLBGame) GetCalendarEventID() string {
	if o == nil || IsNil(o.CalendarEventID) {
		var ret string
		return ret
	}
	return *o.CalendarEventID
}

// GetCalendarEventIDOk returns a tuple with the CalendarEventID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetCalendarEventIDOk() (*string, bool) {
	if o == nil || IsNil(o.CalendarEventID) {
		return nil, false
	}
	return o.CalendarEventID, true
}

// HasCalendarEventID returns a boolean if a field has been set.
func (o *MLBGame) HasCalendarEventID() bool {
	if o != nil && !IsNil(o.CalendarEventID) {
		return true
	}

	return false
}

// SetCalendarEventID gets a reference to the given string and assigns it to the CalendarEventID field.
func (o *MLBGame) SetCalendarEventID(v string) {
	o.CalendarEventID = &v
}

// GetSeasonDisplay returns the SeasonDisplay field value if set, zero value otherwise.
func (o *MLBGame) GetSeasonDisplay() string {
	if o == nil || IsNil(o.SeasonDisplay) {
		var ret string
		return ret
	}
	return *o.SeasonDisplay
}

// GetSeasonDisplayOk returns a tuple with the SeasonDisplay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetSeasonDisplayOk() (*string, bool) {
	if o == nil || IsNil(o.SeasonDisplay) {
		return nil, false
	}
	return o.SeasonDisplay, true
}

// HasSeasonDisplay returns a boolean if a field has been set.
func (o *MLBGame) HasSeasonDisplay() bool {
	if o != nil && !IsNil(o.SeasonDisplay) {
		return true
	}

	return false
}

// SetSeasonDisplay gets a reference to the given string and assigns it to the SeasonDisplay field.
func (o *MLBGame) SetSeasonDisplay(v string) {
	o.SeasonDisplay = &v
}

// GetDayNight returns the DayNight field value if set, zero value otherwise.
func (o *MLBGame) GetDayNight() string {
	if o == nil || IsNil(o.DayNight) {
		var ret string
		return ret
	}
	return *o.DayNight
}

// GetDayNightOk returns a tuple with the DayNight field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetDayNightOk() (*string, bool) {
	if o == nil || IsNil(o.DayNight) {
		return nil, false
	}
	return o.DayNight, true
}

// HasDayNight returns a boolean if a field has been set.
func (o *MLBGame) HasDayNight() bool {
	if o != nil && !IsNil(o.DayNight) {
		return true
	}

	return false
}

// SetDayNight gets a reference to the given string and assigns it to the DayNight field.
func (o *MLBGame) SetDayNight(v string) {
	o.DayNight = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *MLBGame) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *MLBGame) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *MLBGame) SetDescription(v string) {
	o.Description = &v
}

// GetScheduledInnings returns the ScheduledInnings field value if set, zero value otherwise.
func (o *MLBGame) GetScheduledInnings() float32 {
	if o == nil || IsNil(o.ScheduledInnings) {
		var ret float32
		return ret
	}
	return *o.ScheduledInnings
}

// GetScheduledInningsOk returns a tuple with the ScheduledInnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetScheduledInningsOk() (*float32, bool) {
	if o == nil || IsNil(o.ScheduledInnings) {
		return nil, false
	}
	return o.ScheduledInnings, true
}

// HasScheduledInnings returns a boolean if a field has been set.
func (o *MLBGame) HasScheduledInnings() bool {
	if o != nil && !IsNil(o.ScheduledInnings) {
		return true
	}

	return false
}

// SetScheduledInnings gets a reference to the given float32 and assigns it to the ScheduledInnings field.
func (o *MLBGame) SetScheduledInnings(v float32) {
	o.ScheduledInnings = &v
}

// GetReverseHomeAwayStatus returns the ReverseHomeAwayStatus field value if set, zero value otherwise.
func (o *MLBGame) GetReverseHomeAwayStatus() bool {
	if o == nil || IsNil(o.ReverseHomeAwayStatus) {
		var ret bool
		return ret
	}
	return *o.ReverseHomeAwayStatus
}

// GetReverseHomeAwayStatusOk returns a tuple with the ReverseHomeAwayStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetReverseHomeAwayStatusOk() (*bool, bool) {
	if o == nil || IsNil(o.ReverseHomeAwayStatus) {
		return nil, false
	}
	return o.ReverseHomeAwayStatus, true
}

// HasReverseHomeAwayStatus returns a boolean if a field has been set.
func (o *MLBGame) HasReverseHomeAwayStatus() bool {
	if o != nil && !IsNil(o.ReverseHomeAwayStatus) {
		return true
	}

	return false
}

// SetReverseHomeAwayStatus gets a reference to the given bool and assigns it to the ReverseHomeAwayStatus field.
func (o *MLBGame) SetReverseHomeAwayStatus(v bool) {
	o.ReverseHomeAwayStatus = &v
}

// GetInningBreakLength returns the InningBreakLength field value if set, zero value otherwise.
func (o *MLBGame) GetInningBreakLength() float32 {
	if o == nil || IsNil(o.InningBreakLength) {
		var ret float32
		return ret
	}
	return *o.InningBreakLength
}

// GetInningBreakLengthOk returns a tuple with the InningBreakLength field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetInningBreakLengthOk() (*float32, bool) {
	if o == nil || IsNil(o.InningBreakLength) {
		return nil, false
	}
	return o.InningBreakLength, true
}

// HasInningBreakLength returns a boolean if a field has been set.
func (o *MLBGame) HasInningBreakLength() bool {
	if o != nil && !IsNil(o.InningBreakLength) {
		return true
	}

	return false
}

// SetInningBreakLength gets a reference to the given float32 and assigns it to the InningBreakLength field.
func (o *MLBGame) SetInningBreakLength(v float32) {
	o.InningBreakLength = &v
}

// GetGamesInSeries returns the GamesInSeries field value
func (o *MLBGame) GetGamesInSeries() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.GamesInSeries
}

// GetGamesInSeriesOk returns a tuple with the GamesInSeries field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetGamesInSeriesOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GamesInSeries, true
}

// SetGamesInSeries sets field value
func (o *MLBGame) SetGamesInSeries(v float32) {
	o.GamesInSeries = v
}

// GetSeriesGameNumber returns the SeriesGameNumber field value
func (o *MLBGame) GetSeriesGameNumber() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.SeriesGameNumber
}

// GetSeriesGameNumberOk returns a tuple with the SeriesGameNumber field value
// and a boolean to check if the value has been set.
func (o *MLBGame) GetSeriesGameNumberOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SeriesGameNumber, true
}

// SetSeriesGameNumber sets field value
func (o *MLBGame) SetSeriesGameNumber(v float32) {
	o.SeriesGameNumber = v
}

// GetSeriesDescription returns the SeriesDescription field value if set, zero value otherwise.
func (o *MLBGame) GetSeriesDescription() string {
	if o == nil || IsNil(o.SeriesDescription) {
		var ret string
		return ret
	}
	return *o.SeriesDescription
}

// GetSeriesDescriptionOk returns a tuple with the SeriesDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetSeriesDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.SeriesDescription) {
		return nil, false
	}
	return o.SeriesDescription, true
}

// HasSeriesDescription returns a boolean if a field has been set.
func (o *MLBGame) HasSeriesDescription() bool {
	if o != nil && !IsNil(o.SeriesDescription) {
		return true
	}

	return false
}

// SetSeriesDescription gets a reference to the given string and assigns it to the SeriesDescription field.
func (o *MLBGame) SetSeriesDescription(v string) {
	o.SeriesDescription = &v
}

// GetRecordSource returns the RecordSource field value if set, zero value otherwise.
func (o *MLBGame) GetRecordSource() string {
	if o == nil || IsNil(o.RecordSource) {
		var ret string
		return ret
	}
	return *o.RecordSource
}

// GetRecordSourceOk returns a tuple with the RecordSource field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetRecordSourceOk() (*string, bool) {
	if o == nil || IsNil(o.RecordSource) {
		return nil, false
	}
	return o.RecordSource, true
}

// HasRecordSource returns a boolean if a field has been set.
func (o *MLBGame) HasRecordSource() bool {
	if o != nil && !IsNil(o.RecordSource) {
		return true
	}

	return false
}

// SetRecordSource gets a reference to the given string and assigns it to the RecordSource field.
func (o *MLBGame) SetRecordSource(v string) {
	o.RecordSource = &v
}

// GetIfNecessary returns the IfNecessary field value if set, zero value otherwise.
func (o *MLBGame) GetIfNecessary() string {
	if o == nil || IsNil(o.IfNecessary) {
		var ret string
		return ret
	}
	return *o.IfNecessary
}

// GetIfNecessaryOk returns a tuple with the IfNecessary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetIfNecessaryOk() (*string, bool) {
	if o == nil || IsNil(o.IfNecessary) {
		return nil, false
	}
	return o.IfNecessary, true
}

// HasIfNecessary returns a boolean if a field has been set.
func (o *MLBGame) HasIfNecessary() bool {
	if o != nil && !IsNil(o.IfNecessary) {
		return true
	}

	return false
}

// SetIfNecessary gets a reference to the given string and assigns it to the IfNecessary field.
func (o *MLBGame) SetIfNecessary(v string) {
	o.IfNecessary = &v
}

// GetIfNecessaryDescription returns the IfNecessaryDescription field value if set, zero value otherwise.
func (o *MLBGame) GetIfNecessaryDescription() string {
	if o == nil || IsNil(o.IfNecessaryDescription) {
		var ret string
		return ret
	}
	return *o.IfNecessaryDescription
}

// GetIfNecessaryDescriptionOk returns a tuple with the IfNecessaryDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MLBGame) GetIfNecessaryDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.IfNecessaryDescription) {
		return nil, false
	}
	return o.IfNecessaryDescription, true
}

// HasIfNecessaryDescription returns a boolean if a field has been set.
func (o *MLBGame) HasIfNecessaryDescription() bool {
	if o != nil && !IsNil(o.IfNecessaryDescription) {
		return true
	}

	return false
}

// SetIfNecessaryDescription gets a reference to the given string and assigns it to the IfNecessaryDescription field.
func (o *MLBGame) SetIfNecessaryDescription(v string) {
	o.IfNecessaryDescription = &v
}

func (o MLBGame) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MLBGame) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["gamePk"] = o.GamePk
	toSerialize["gameGuid"] = o.GameGuid
	if !IsNil(o.Link) {
		toSerialize["link"] = o.Link
	}
	toSerialize["gameType"] = o.GameType
	toSerialize["season"] = o.Season
	toSerialize["gameDate"] = o.GameDate
	toSerialize["officialDate"] = o.OfficialDate
	if !IsNil(o.RescheduledTo) {
		toSerialize["rescheduledTo"] = o.RescheduledTo
	}
	if !IsNil(o.RescheduledToDate) {
		toSerialize["rescheduledToDate"] = o.RescheduledToDate
	}
	if !IsNil(o.RescheduledFrom) {
		toSerialize["rescheduledFrom"] = o.RescheduledFrom
	}
	if !IsNil(o.RescheduledFromDate) {
		toSerialize["rescheduledFromDate"] = o.RescheduledFromDate
	}
	toSerialize["status"] = o.Status
	toSerialize["teams"] = o.Teams
	if !IsNil(o.Venue) {
		toSerialize["venue"] = o.Venue
	}
	if !IsNil(o.IsTie) {
		toSerialize["isTie"] = o.IsTie
	}
	toSerialize["gameNumber"] = o.GameNumber
	if !IsNil(o.PublicFacing) {
		toSerialize["publicFacing"] = o.PublicFacing
	}
	if !IsNil(o.DoubleHeader) {
		toSerialize["doubleHeader"] = o.DoubleHeader
	}
	if !IsNil(o.GamedayType) {
		toSerialize["gamedayType"] = o.GamedayType
	}
	if !IsNil(o.Tiebreaker) {
		toSerialize["tiebreaker"] = o.Tiebreaker
	}
	if !IsNil(o.CalendarEventID) {
		toSerialize["calendarEventID"] = o.CalendarEventID
	}
	if !IsNil(o.SeasonDisplay) {
		toSerialize["seasonDisplay"] = o.SeasonDisplay
	}
	if !IsNil(o.DayNight) {
		toSerialize["dayNight"] = o.DayNight
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ScheduledInnings) {
		toSerialize["scheduledInnings"] = o.ScheduledInnings
	}
	if !IsNil(o.ReverseHomeAwayStatus) {
		toSerialize["reverseHomeAwayStatus"] = o.ReverseHomeAwayStatus
	}
	if !IsNil(o.InningBreakLength) {
		toSerialize["inningBreakLength"] = o.InningBreakLength
	}
	toSerialize["gamesInSeries"] = o.GamesInSeries
	toSerialize["seriesGameNumber"] = o.SeriesGameNumber
	if !IsNil(o.SeriesDescription) {
		toSerialize["seriesDescription"] = o.SeriesDescription
	}
	if !IsNil(o.RecordSource) {
		toSerialize["recordSource"] = o.RecordSource
	}
	if !IsNil(o.IfNecessary) {
		toSerialize["ifNecessary"] = o.IfNecessary
	}
	if !IsNil(o.IfNecessaryDescription) {
		toSerialize["ifNecessaryDescription"] = o.IfNecessaryDescription
	}
	return toSerialize, nil
}

func (o *MLBGame) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"gamePk",
		"gameGuid",
		"gameType",
		"season",
		"gameDate",
		"officialDate",
		"status",
		"teams",
		"gameNumber",
		"gamesInSeries",
		"seriesGameNumber",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varMLBGame := _MLBGame{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varMLBGame)

	if err != nil {
		return err
	}

	*o = MLBGame(varMLBGame)

	return err
}

type NullableMLBGame struct {
	value *MLBGame
	isSet bool
}

func (v NullableMLBGame) Get() *MLBGame {
	return v.value
}

func (v *NullableMLBGame) Set(val *MLBGame) {
	v.value = val
	v.isSet = true
}

func (v NullableMLBGame) IsSet() bool {
	return v.isSet
}

func (v *NullableMLBGame) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMLBGame(val *MLBGame) *NullableMLBGame {
	return &NullableMLBGame{value: val, isSet: true}
}

func (v NullableMLBGame) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMLBGame) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


