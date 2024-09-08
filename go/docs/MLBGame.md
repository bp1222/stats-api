# MLBGame

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GamePk** | **float32** |  | 
**GameGuid** | **string** |  | 
**Link** | Pointer to **string** |  | [optional] 
**GameType** | **string** | Game Type:   * &#x60;E&#x60; - Exhibition   * &#x60;S&#x60; - Spring Training   * &#x60;R&#x60; - Regular Season   * &#x60;F&#x60; - Wild Card Series   * &#x60;D&#x60; - Division Series   * &#x60;L&#x60; - League Championship Series   * &#x60;W&#x60; - World Series  | 
**Season** | **float32** |  | 
**GameDate** | **string** |  | 
**OfficialDate** | **string** |  | 
**RescheduledTo** | Pointer to **float32** |  | [optional] 
**RescheduledToDate** | Pointer to **string** |  | [optional] 
**RescheduledFrom** | Pointer to **float32** |  | [optional] 
**RescheduledFromDate** | Pointer to **string** |  | [optional] 
**Status** | [**MLBGameStatus**](MLBGameStatus.md) |  | 
**Teams** | [**MLBGameTeams**](MLBGameTeams.md) |  | 
**Venue** | Pointer to [**MLBVenue**](MLBVenue.md) |  | [optional] 
**IsTie** | Pointer to **bool** |  | [optional] 
**GameNumber** | **float32** |  | 
**PublicFacing** | Pointer to **bool** |  | [optional] 
**DoubleHeader** | Pointer to **string** |  | [optional] 
**GamedayType** | Pointer to **string** |  | [optional] 
**Tiebreaker** | Pointer to **string** |  | [optional] 
**CalendarEventID** | Pointer to **string** |  | [optional] 
**SeasonDisplay** | Pointer to **string** |  | [optional] 
**DayNight** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**ScheduledInnings** | Pointer to **float32** |  | [optional] 
**ReverseHomeAwayStatus** | Pointer to **bool** |  | [optional] 
**InningBreakLength** | Pointer to **float32** |  | [optional] 
**GamesInSeries** | **float32** |  | 
**SeriesGameNumber** | **float32** |  | 
**SeriesDescription** | Pointer to **string** |  | [optional] 
**RecordSource** | Pointer to **string** |  | [optional] 
**IfNecessary** | Pointer to **string** |  | [optional] 
**IfNecessaryDescription** | Pointer to **string** |  | [optional] 

## Methods

### NewMLBGame

`func NewMLBGame(gamePk float32, gameGuid string, gameType string, season float32, gameDate string, officialDate string, status MLBGameStatus, teams MLBGameTeams, gameNumber float32, gamesInSeries float32, seriesGameNumber float32, ) *MLBGame`

NewMLBGame instantiates a new MLBGame object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBGameWithDefaults

`func NewMLBGameWithDefaults() *MLBGame`

NewMLBGameWithDefaults instantiates a new MLBGame object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGamePk

`func (o *MLBGame) GetGamePk() float32`

GetGamePk returns the GamePk field if non-nil, zero value otherwise.

### GetGamePkOk

`func (o *MLBGame) GetGamePkOk() (*float32, bool)`

GetGamePkOk returns a tuple with the GamePk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamePk

`func (o *MLBGame) SetGamePk(v float32)`

SetGamePk sets GamePk field to given value.


### GetGameGuid

`func (o *MLBGame) GetGameGuid() string`

GetGameGuid returns the GameGuid field if non-nil, zero value otherwise.

### GetGameGuidOk

`func (o *MLBGame) GetGameGuidOk() (*string, bool)`

GetGameGuidOk returns a tuple with the GameGuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameGuid

`func (o *MLBGame) SetGameGuid(v string)`

SetGameGuid sets GameGuid field to given value.


### GetLink

`func (o *MLBGame) GetLink() string`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *MLBGame) GetLinkOk() (*string, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *MLBGame) SetLink(v string)`

SetLink sets Link field to given value.

### HasLink

`func (o *MLBGame) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetGameType

`func (o *MLBGame) GetGameType() string`

GetGameType returns the GameType field if non-nil, zero value otherwise.

### GetGameTypeOk

`func (o *MLBGame) GetGameTypeOk() (*string, bool)`

GetGameTypeOk returns a tuple with the GameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameType

`func (o *MLBGame) SetGameType(v string)`

SetGameType sets GameType field to given value.


### GetSeason

`func (o *MLBGame) GetSeason() float32`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBGame) GetSeasonOk() (*float32, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBGame) SetSeason(v float32)`

SetSeason sets Season field to given value.


### GetGameDate

`func (o *MLBGame) GetGameDate() string`

GetGameDate returns the GameDate field if non-nil, zero value otherwise.

### GetGameDateOk

`func (o *MLBGame) GetGameDateOk() (*string, bool)`

GetGameDateOk returns a tuple with the GameDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameDate

`func (o *MLBGame) SetGameDate(v string)`

SetGameDate sets GameDate field to given value.


### GetOfficialDate

`func (o *MLBGame) GetOfficialDate() string`

GetOfficialDate returns the OfficialDate field if non-nil, zero value otherwise.

### GetOfficialDateOk

`func (o *MLBGame) GetOfficialDateOk() (*string, bool)`

GetOfficialDateOk returns a tuple with the OfficialDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfficialDate

`func (o *MLBGame) SetOfficialDate(v string)`

SetOfficialDate sets OfficialDate field to given value.


### GetRescheduledTo

`func (o *MLBGame) GetRescheduledTo() float32`

GetRescheduledTo returns the RescheduledTo field if non-nil, zero value otherwise.

### GetRescheduledToOk

`func (o *MLBGame) GetRescheduledToOk() (*float32, bool)`

GetRescheduledToOk returns a tuple with the RescheduledTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRescheduledTo

`func (o *MLBGame) SetRescheduledTo(v float32)`

SetRescheduledTo sets RescheduledTo field to given value.

### HasRescheduledTo

`func (o *MLBGame) HasRescheduledTo() bool`

HasRescheduledTo returns a boolean if a field has been set.

### GetRescheduledToDate

`func (o *MLBGame) GetRescheduledToDate() string`

GetRescheduledToDate returns the RescheduledToDate field if non-nil, zero value otherwise.

### GetRescheduledToDateOk

`func (o *MLBGame) GetRescheduledToDateOk() (*string, bool)`

GetRescheduledToDateOk returns a tuple with the RescheduledToDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRescheduledToDate

`func (o *MLBGame) SetRescheduledToDate(v string)`

SetRescheduledToDate sets RescheduledToDate field to given value.

### HasRescheduledToDate

`func (o *MLBGame) HasRescheduledToDate() bool`

HasRescheduledToDate returns a boolean if a field has been set.

### GetRescheduledFrom

`func (o *MLBGame) GetRescheduledFrom() float32`

GetRescheduledFrom returns the RescheduledFrom field if non-nil, zero value otherwise.

### GetRescheduledFromOk

`func (o *MLBGame) GetRescheduledFromOk() (*float32, bool)`

GetRescheduledFromOk returns a tuple with the RescheduledFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRescheduledFrom

`func (o *MLBGame) SetRescheduledFrom(v float32)`

SetRescheduledFrom sets RescheduledFrom field to given value.

### HasRescheduledFrom

`func (o *MLBGame) HasRescheduledFrom() bool`

HasRescheduledFrom returns a boolean if a field has been set.

### GetRescheduledFromDate

`func (o *MLBGame) GetRescheduledFromDate() string`

GetRescheduledFromDate returns the RescheduledFromDate field if non-nil, zero value otherwise.

### GetRescheduledFromDateOk

`func (o *MLBGame) GetRescheduledFromDateOk() (*string, bool)`

GetRescheduledFromDateOk returns a tuple with the RescheduledFromDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRescheduledFromDate

`func (o *MLBGame) SetRescheduledFromDate(v string)`

SetRescheduledFromDate sets RescheduledFromDate field to given value.

### HasRescheduledFromDate

`func (o *MLBGame) HasRescheduledFromDate() bool`

HasRescheduledFromDate returns a boolean if a field has been set.

### GetStatus

`func (o *MLBGame) GetStatus() MLBGameStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MLBGame) GetStatusOk() (*MLBGameStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MLBGame) SetStatus(v MLBGameStatus)`

SetStatus sets Status field to given value.


### GetTeams

`func (o *MLBGame) GetTeams() MLBGameTeams`

GetTeams returns the Teams field if non-nil, zero value otherwise.

### GetTeamsOk

`func (o *MLBGame) GetTeamsOk() (*MLBGameTeams, bool)`

GetTeamsOk returns a tuple with the Teams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeams

`func (o *MLBGame) SetTeams(v MLBGameTeams)`

SetTeams sets Teams field to given value.


### GetVenue

`func (o *MLBGame) GetVenue() MLBVenue`

GetVenue returns the Venue field if non-nil, zero value otherwise.

### GetVenueOk

`func (o *MLBGame) GetVenueOk() (*MLBVenue, bool)`

GetVenueOk returns a tuple with the Venue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVenue

`func (o *MLBGame) SetVenue(v MLBVenue)`

SetVenue sets Venue field to given value.

### HasVenue

`func (o *MLBGame) HasVenue() bool`

HasVenue returns a boolean if a field has been set.

### GetIsTie

`func (o *MLBGame) GetIsTie() bool`

GetIsTie returns the IsTie field if non-nil, zero value otherwise.

### GetIsTieOk

`func (o *MLBGame) GetIsTieOk() (*bool, bool)`

GetIsTieOk returns a tuple with the IsTie field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTie

`func (o *MLBGame) SetIsTie(v bool)`

SetIsTie sets IsTie field to given value.

### HasIsTie

`func (o *MLBGame) HasIsTie() bool`

HasIsTie returns a boolean if a field has been set.

### GetGameNumber

`func (o *MLBGame) GetGameNumber() float32`

GetGameNumber returns the GameNumber field if non-nil, zero value otherwise.

### GetGameNumberOk

`func (o *MLBGame) GetGameNumberOk() (*float32, bool)`

GetGameNumberOk returns a tuple with the GameNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameNumber

`func (o *MLBGame) SetGameNumber(v float32)`

SetGameNumber sets GameNumber field to given value.


### GetPublicFacing

`func (o *MLBGame) GetPublicFacing() bool`

GetPublicFacing returns the PublicFacing field if non-nil, zero value otherwise.

### GetPublicFacingOk

`func (o *MLBGame) GetPublicFacingOk() (*bool, bool)`

GetPublicFacingOk returns a tuple with the PublicFacing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicFacing

`func (o *MLBGame) SetPublicFacing(v bool)`

SetPublicFacing sets PublicFacing field to given value.

### HasPublicFacing

`func (o *MLBGame) HasPublicFacing() bool`

HasPublicFacing returns a boolean if a field has been set.

### GetDoubleHeader

`func (o *MLBGame) GetDoubleHeader() string`

GetDoubleHeader returns the DoubleHeader field if non-nil, zero value otherwise.

### GetDoubleHeaderOk

`func (o *MLBGame) GetDoubleHeaderOk() (*string, bool)`

GetDoubleHeaderOk returns a tuple with the DoubleHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoubleHeader

`func (o *MLBGame) SetDoubleHeader(v string)`

SetDoubleHeader sets DoubleHeader field to given value.

### HasDoubleHeader

`func (o *MLBGame) HasDoubleHeader() bool`

HasDoubleHeader returns a boolean if a field has been set.

### GetGamedayType

`func (o *MLBGame) GetGamedayType() string`

GetGamedayType returns the GamedayType field if non-nil, zero value otherwise.

### GetGamedayTypeOk

`func (o *MLBGame) GetGamedayTypeOk() (*string, bool)`

GetGamedayTypeOk returns a tuple with the GamedayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamedayType

`func (o *MLBGame) SetGamedayType(v string)`

SetGamedayType sets GamedayType field to given value.

### HasGamedayType

`func (o *MLBGame) HasGamedayType() bool`

HasGamedayType returns a boolean if a field has been set.

### GetTiebreaker

`func (o *MLBGame) GetTiebreaker() string`

GetTiebreaker returns the Tiebreaker field if non-nil, zero value otherwise.

### GetTiebreakerOk

`func (o *MLBGame) GetTiebreakerOk() (*string, bool)`

GetTiebreakerOk returns a tuple with the Tiebreaker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiebreaker

`func (o *MLBGame) SetTiebreaker(v string)`

SetTiebreaker sets Tiebreaker field to given value.

### HasTiebreaker

`func (o *MLBGame) HasTiebreaker() bool`

HasTiebreaker returns a boolean if a field has been set.

### GetCalendarEventID

`func (o *MLBGame) GetCalendarEventID() string`

GetCalendarEventID returns the CalendarEventID field if non-nil, zero value otherwise.

### GetCalendarEventIDOk

`func (o *MLBGame) GetCalendarEventIDOk() (*string, bool)`

GetCalendarEventIDOk returns a tuple with the CalendarEventID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarEventID

`func (o *MLBGame) SetCalendarEventID(v string)`

SetCalendarEventID sets CalendarEventID field to given value.

### HasCalendarEventID

`func (o *MLBGame) HasCalendarEventID() bool`

HasCalendarEventID returns a boolean if a field has been set.

### GetSeasonDisplay

`func (o *MLBGame) GetSeasonDisplay() string`

GetSeasonDisplay returns the SeasonDisplay field if non-nil, zero value otherwise.

### GetSeasonDisplayOk

`func (o *MLBGame) GetSeasonDisplayOk() (*string, bool)`

GetSeasonDisplayOk returns a tuple with the SeasonDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonDisplay

`func (o *MLBGame) SetSeasonDisplay(v string)`

SetSeasonDisplay sets SeasonDisplay field to given value.

### HasSeasonDisplay

`func (o *MLBGame) HasSeasonDisplay() bool`

HasSeasonDisplay returns a boolean if a field has been set.

### GetDayNight

`func (o *MLBGame) GetDayNight() string`

GetDayNight returns the DayNight field if non-nil, zero value otherwise.

### GetDayNightOk

`func (o *MLBGame) GetDayNightOk() (*string, bool)`

GetDayNightOk returns a tuple with the DayNight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayNight

`func (o *MLBGame) SetDayNight(v string)`

SetDayNight sets DayNight field to given value.

### HasDayNight

`func (o *MLBGame) HasDayNight() bool`

HasDayNight returns a boolean if a field has been set.

### GetDescription

`func (o *MLBGame) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MLBGame) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MLBGame) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MLBGame) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetScheduledInnings

`func (o *MLBGame) GetScheduledInnings() float32`

GetScheduledInnings returns the ScheduledInnings field if non-nil, zero value otherwise.

### GetScheduledInningsOk

`func (o *MLBGame) GetScheduledInningsOk() (*float32, bool)`

GetScheduledInningsOk returns a tuple with the ScheduledInnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledInnings

`func (o *MLBGame) SetScheduledInnings(v float32)`

SetScheduledInnings sets ScheduledInnings field to given value.

### HasScheduledInnings

`func (o *MLBGame) HasScheduledInnings() bool`

HasScheduledInnings returns a boolean if a field has been set.

### GetReverseHomeAwayStatus

`func (o *MLBGame) GetReverseHomeAwayStatus() bool`

GetReverseHomeAwayStatus returns the ReverseHomeAwayStatus field if non-nil, zero value otherwise.

### GetReverseHomeAwayStatusOk

`func (o *MLBGame) GetReverseHomeAwayStatusOk() (*bool, bool)`

GetReverseHomeAwayStatusOk returns a tuple with the ReverseHomeAwayStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseHomeAwayStatus

`func (o *MLBGame) SetReverseHomeAwayStatus(v bool)`

SetReverseHomeAwayStatus sets ReverseHomeAwayStatus field to given value.

### HasReverseHomeAwayStatus

`func (o *MLBGame) HasReverseHomeAwayStatus() bool`

HasReverseHomeAwayStatus returns a boolean if a field has been set.

### GetInningBreakLength

`func (o *MLBGame) GetInningBreakLength() float32`

GetInningBreakLength returns the InningBreakLength field if non-nil, zero value otherwise.

### GetInningBreakLengthOk

`func (o *MLBGame) GetInningBreakLengthOk() (*float32, bool)`

GetInningBreakLengthOk returns a tuple with the InningBreakLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInningBreakLength

`func (o *MLBGame) SetInningBreakLength(v float32)`

SetInningBreakLength sets InningBreakLength field to given value.

### HasInningBreakLength

`func (o *MLBGame) HasInningBreakLength() bool`

HasInningBreakLength returns a boolean if a field has been set.

### GetGamesInSeries

`func (o *MLBGame) GetGamesInSeries() float32`

GetGamesInSeries returns the GamesInSeries field if non-nil, zero value otherwise.

### GetGamesInSeriesOk

`func (o *MLBGame) GetGamesInSeriesOk() (*float32, bool)`

GetGamesInSeriesOk returns a tuple with the GamesInSeries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamesInSeries

`func (o *MLBGame) SetGamesInSeries(v float32)`

SetGamesInSeries sets GamesInSeries field to given value.


### GetSeriesGameNumber

`func (o *MLBGame) GetSeriesGameNumber() float32`

GetSeriesGameNumber returns the SeriesGameNumber field if non-nil, zero value otherwise.

### GetSeriesGameNumberOk

`func (o *MLBGame) GetSeriesGameNumberOk() (*float32, bool)`

GetSeriesGameNumberOk returns a tuple with the SeriesGameNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeriesGameNumber

`func (o *MLBGame) SetSeriesGameNumber(v float32)`

SetSeriesGameNumber sets SeriesGameNumber field to given value.


### GetSeriesDescription

`func (o *MLBGame) GetSeriesDescription() string`

GetSeriesDescription returns the SeriesDescription field if non-nil, zero value otherwise.

### GetSeriesDescriptionOk

`func (o *MLBGame) GetSeriesDescriptionOk() (*string, bool)`

GetSeriesDescriptionOk returns a tuple with the SeriesDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeriesDescription

`func (o *MLBGame) SetSeriesDescription(v string)`

SetSeriesDescription sets SeriesDescription field to given value.

### HasSeriesDescription

`func (o *MLBGame) HasSeriesDescription() bool`

HasSeriesDescription returns a boolean if a field has been set.

### GetRecordSource

`func (o *MLBGame) GetRecordSource() string`

GetRecordSource returns the RecordSource field if non-nil, zero value otherwise.

### GetRecordSourceOk

`func (o *MLBGame) GetRecordSourceOk() (*string, bool)`

GetRecordSourceOk returns a tuple with the RecordSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordSource

`func (o *MLBGame) SetRecordSource(v string)`

SetRecordSource sets RecordSource field to given value.

### HasRecordSource

`func (o *MLBGame) HasRecordSource() bool`

HasRecordSource returns a boolean if a field has been set.

### GetIfNecessary

`func (o *MLBGame) GetIfNecessary() string`

GetIfNecessary returns the IfNecessary field if non-nil, zero value otherwise.

### GetIfNecessaryOk

`func (o *MLBGame) GetIfNecessaryOk() (*string, bool)`

GetIfNecessaryOk returns a tuple with the IfNecessary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIfNecessary

`func (o *MLBGame) SetIfNecessary(v string)`

SetIfNecessary sets IfNecessary field to given value.

### HasIfNecessary

`func (o *MLBGame) HasIfNecessary() bool`

HasIfNecessary returns a boolean if a field has been set.

### GetIfNecessaryDescription

`func (o *MLBGame) GetIfNecessaryDescription() string`

GetIfNecessaryDescription returns the IfNecessaryDescription field if non-nil, zero value otherwise.

### GetIfNecessaryDescriptionOk

`func (o *MLBGame) GetIfNecessaryDescriptionOk() (*string, bool)`

GetIfNecessaryDescriptionOk returns a tuple with the IfNecessaryDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIfNecessaryDescription

`func (o *MLBGame) SetIfNecessaryDescription(v string)`

SetIfNecessaryDescription sets IfNecessaryDescription field to given value.

### HasIfNecessaryDescription

`func (o *MLBGame) HasIfNecessaryDescription() bool`

HasIfNecessaryDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


