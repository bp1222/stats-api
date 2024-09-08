# MLBRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Team** | [**MLBTeam**](MLBTeam.md) |  | 
**Season** | **string** |  | 
**Streak** | [**MLBStreak**](MLBStreak.md) |  | 
**DivisionRank** | **string** |  | 
**LeagueRank** | **string** |  | 
**SportRank** | Pointer to **string** |  | [optional] 
**GamesPlayed** | Pointer to **float32** |  | [optional] 
**GamesBack** | **string** |  | 
**WildCardGamesBack** | Pointer to **string** |  | [optional] 
**LeagueGamesBack** | Pointer to **string** |  | [optional] 
**SportGamesBack** | Pointer to **string** |  | [optional] 
**DivisionGamesBack** | Pointer to **string** |  | [optional] 
**ConferenceGamesBack** | Pointer to **string** |  | [optional] 
**LeagueRecord** | [**MLBLeagueRecord**](MLBLeagueRecord.md) |  | 
**LastUpdated** | Pointer to **string** |  | [optional] 
**RunsAllowed** | Pointer to **float32** |  | [optional] 
**RunsScored** | Pointer to **float32** |  | [optional] 
**DivisionChamp** | Pointer to **bool** |  | [optional] 
**DivisionLeader** | Pointer to **bool** |  | [optional] 
**HasWildcard** | Pointer to **bool** |  | [optional] 
**Clinched** | Pointer to **bool** |  | [optional] 
**EliminationNumber** | Pointer to **string** |  | [optional] 
**EliminationNumberSport** | Pointer to **string** |  | [optional] 
**EliminationNumberLeague** | Pointer to **string** |  | [optional] 
**EliminationNumberDivision** | Pointer to **string** |  | [optional] 
**EliminationNumberConference** | Pointer to **string** |  | [optional] 
**WildCardEliminationNumber** | Pointer to **string** |  | [optional] 
**MagicNumber** | Pointer to **string** |  | [optional] 
**Wins** | **float32** |  | 
**Losses** | **float32** |  | 
**RunDifferential** | Pointer to **float32** |  | [optional] 
**WinningPercentage** | Pointer to **string** |  | [optional] 

## Methods

### NewMLBRecord

`func NewMLBRecord(team MLBTeam, season string, streak MLBStreak, divisionRank string, leagueRank string, gamesBack string, leagueRecord MLBLeagueRecord, wins float32, losses float32, ) *MLBRecord`

NewMLBRecord instantiates a new MLBRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMLBRecordWithDefaults

`func NewMLBRecordWithDefaults() *MLBRecord`

NewMLBRecordWithDefaults instantiates a new MLBRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTeam

`func (o *MLBRecord) GetTeam() MLBTeam`

GetTeam returns the Team field if non-nil, zero value otherwise.

### GetTeamOk

`func (o *MLBRecord) GetTeamOk() (*MLBTeam, bool)`

GetTeamOk returns a tuple with the Team field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeam

`func (o *MLBRecord) SetTeam(v MLBTeam)`

SetTeam sets Team field to given value.


### GetSeason

`func (o *MLBRecord) GetSeason() string`

GetSeason returns the Season field if non-nil, zero value otherwise.

### GetSeasonOk

`func (o *MLBRecord) GetSeasonOk() (*string, bool)`

GetSeasonOk returns a tuple with the Season field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeason

`func (o *MLBRecord) SetSeason(v string)`

SetSeason sets Season field to given value.


### GetStreak

`func (o *MLBRecord) GetStreak() MLBStreak`

GetStreak returns the Streak field if non-nil, zero value otherwise.

### GetStreakOk

`func (o *MLBRecord) GetStreakOk() (*MLBStreak, bool)`

GetStreakOk returns a tuple with the Streak field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreak

`func (o *MLBRecord) SetStreak(v MLBStreak)`

SetStreak sets Streak field to given value.


### GetDivisionRank

`func (o *MLBRecord) GetDivisionRank() string`

GetDivisionRank returns the DivisionRank field if non-nil, zero value otherwise.

### GetDivisionRankOk

`func (o *MLBRecord) GetDivisionRankOk() (*string, bool)`

GetDivisionRankOk returns a tuple with the DivisionRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionRank

`func (o *MLBRecord) SetDivisionRank(v string)`

SetDivisionRank sets DivisionRank field to given value.


### GetLeagueRank

`func (o *MLBRecord) GetLeagueRank() string`

GetLeagueRank returns the LeagueRank field if non-nil, zero value otherwise.

### GetLeagueRankOk

`func (o *MLBRecord) GetLeagueRankOk() (*string, bool)`

GetLeagueRankOk returns a tuple with the LeagueRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeagueRank

`func (o *MLBRecord) SetLeagueRank(v string)`

SetLeagueRank sets LeagueRank field to given value.


### GetSportRank

`func (o *MLBRecord) GetSportRank() string`

GetSportRank returns the SportRank field if non-nil, zero value otherwise.

### GetSportRankOk

`func (o *MLBRecord) GetSportRankOk() (*string, bool)`

GetSportRankOk returns a tuple with the SportRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSportRank

`func (o *MLBRecord) SetSportRank(v string)`

SetSportRank sets SportRank field to given value.

### HasSportRank

`func (o *MLBRecord) HasSportRank() bool`

HasSportRank returns a boolean if a field has been set.

### GetGamesPlayed

`func (o *MLBRecord) GetGamesPlayed() float32`

GetGamesPlayed returns the GamesPlayed field if non-nil, zero value otherwise.

### GetGamesPlayedOk

`func (o *MLBRecord) GetGamesPlayedOk() (*float32, bool)`

GetGamesPlayedOk returns a tuple with the GamesPlayed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamesPlayed

`func (o *MLBRecord) SetGamesPlayed(v float32)`

SetGamesPlayed sets GamesPlayed field to given value.

### HasGamesPlayed

`func (o *MLBRecord) HasGamesPlayed() bool`

HasGamesPlayed returns a boolean if a field has been set.

### GetGamesBack

`func (o *MLBRecord) GetGamesBack() string`

GetGamesBack returns the GamesBack field if non-nil, zero value otherwise.

### GetGamesBackOk

`func (o *MLBRecord) GetGamesBackOk() (*string, bool)`

GetGamesBackOk returns a tuple with the GamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamesBack

`func (o *MLBRecord) SetGamesBack(v string)`

SetGamesBack sets GamesBack field to given value.


### GetWildCardGamesBack

`func (o *MLBRecord) GetWildCardGamesBack() string`

GetWildCardGamesBack returns the WildCardGamesBack field if non-nil, zero value otherwise.

### GetWildCardGamesBackOk

`func (o *MLBRecord) GetWildCardGamesBackOk() (*string, bool)`

GetWildCardGamesBackOk returns a tuple with the WildCardGamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWildCardGamesBack

`func (o *MLBRecord) SetWildCardGamesBack(v string)`

SetWildCardGamesBack sets WildCardGamesBack field to given value.

### HasWildCardGamesBack

`func (o *MLBRecord) HasWildCardGamesBack() bool`

HasWildCardGamesBack returns a boolean if a field has been set.

### GetLeagueGamesBack

`func (o *MLBRecord) GetLeagueGamesBack() string`

GetLeagueGamesBack returns the LeagueGamesBack field if non-nil, zero value otherwise.

### GetLeagueGamesBackOk

`func (o *MLBRecord) GetLeagueGamesBackOk() (*string, bool)`

GetLeagueGamesBackOk returns a tuple with the LeagueGamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeagueGamesBack

`func (o *MLBRecord) SetLeagueGamesBack(v string)`

SetLeagueGamesBack sets LeagueGamesBack field to given value.

### HasLeagueGamesBack

`func (o *MLBRecord) HasLeagueGamesBack() bool`

HasLeagueGamesBack returns a boolean if a field has been set.

### GetSportGamesBack

`func (o *MLBRecord) GetSportGamesBack() string`

GetSportGamesBack returns the SportGamesBack field if non-nil, zero value otherwise.

### GetSportGamesBackOk

`func (o *MLBRecord) GetSportGamesBackOk() (*string, bool)`

GetSportGamesBackOk returns a tuple with the SportGamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSportGamesBack

`func (o *MLBRecord) SetSportGamesBack(v string)`

SetSportGamesBack sets SportGamesBack field to given value.

### HasSportGamesBack

`func (o *MLBRecord) HasSportGamesBack() bool`

HasSportGamesBack returns a boolean if a field has been set.

### GetDivisionGamesBack

`func (o *MLBRecord) GetDivisionGamesBack() string`

GetDivisionGamesBack returns the DivisionGamesBack field if non-nil, zero value otherwise.

### GetDivisionGamesBackOk

`func (o *MLBRecord) GetDivisionGamesBackOk() (*string, bool)`

GetDivisionGamesBackOk returns a tuple with the DivisionGamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionGamesBack

`func (o *MLBRecord) SetDivisionGamesBack(v string)`

SetDivisionGamesBack sets DivisionGamesBack field to given value.

### HasDivisionGamesBack

`func (o *MLBRecord) HasDivisionGamesBack() bool`

HasDivisionGamesBack returns a boolean if a field has been set.

### GetConferenceGamesBack

`func (o *MLBRecord) GetConferenceGamesBack() string`

GetConferenceGamesBack returns the ConferenceGamesBack field if non-nil, zero value otherwise.

### GetConferenceGamesBackOk

`func (o *MLBRecord) GetConferenceGamesBackOk() (*string, bool)`

GetConferenceGamesBackOk returns a tuple with the ConferenceGamesBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConferenceGamesBack

`func (o *MLBRecord) SetConferenceGamesBack(v string)`

SetConferenceGamesBack sets ConferenceGamesBack field to given value.

### HasConferenceGamesBack

`func (o *MLBRecord) HasConferenceGamesBack() bool`

HasConferenceGamesBack returns a boolean if a field has been set.

### GetLeagueRecord

`func (o *MLBRecord) GetLeagueRecord() MLBLeagueRecord`

GetLeagueRecord returns the LeagueRecord field if non-nil, zero value otherwise.

### GetLeagueRecordOk

`func (o *MLBRecord) GetLeagueRecordOk() (*MLBLeagueRecord, bool)`

GetLeagueRecordOk returns a tuple with the LeagueRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeagueRecord

`func (o *MLBRecord) SetLeagueRecord(v MLBLeagueRecord)`

SetLeagueRecord sets LeagueRecord field to given value.


### GetLastUpdated

`func (o *MLBRecord) GetLastUpdated() string`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *MLBRecord) GetLastUpdatedOk() (*string, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *MLBRecord) SetLastUpdated(v string)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *MLBRecord) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetRunsAllowed

`func (o *MLBRecord) GetRunsAllowed() float32`

GetRunsAllowed returns the RunsAllowed field if non-nil, zero value otherwise.

### GetRunsAllowedOk

`func (o *MLBRecord) GetRunsAllowedOk() (*float32, bool)`

GetRunsAllowedOk returns a tuple with the RunsAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunsAllowed

`func (o *MLBRecord) SetRunsAllowed(v float32)`

SetRunsAllowed sets RunsAllowed field to given value.

### HasRunsAllowed

`func (o *MLBRecord) HasRunsAllowed() bool`

HasRunsAllowed returns a boolean if a field has been set.

### GetRunsScored

`func (o *MLBRecord) GetRunsScored() float32`

GetRunsScored returns the RunsScored field if non-nil, zero value otherwise.

### GetRunsScoredOk

`func (o *MLBRecord) GetRunsScoredOk() (*float32, bool)`

GetRunsScoredOk returns a tuple with the RunsScored field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunsScored

`func (o *MLBRecord) SetRunsScored(v float32)`

SetRunsScored sets RunsScored field to given value.

### HasRunsScored

`func (o *MLBRecord) HasRunsScored() bool`

HasRunsScored returns a boolean if a field has been set.

### GetDivisionChamp

`func (o *MLBRecord) GetDivisionChamp() bool`

GetDivisionChamp returns the DivisionChamp field if non-nil, zero value otherwise.

### GetDivisionChampOk

`func (o *MLBRecord) GetDivisionChampOk() (*bool, bool)`

GetDivisionChampOk returns a tuple with the DivisionChamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionChamp

`func (o *MLBRecord) SetDivisionChamp(v bool)`

SetDivisionChamp sets DivisionChamp field to given value.

### HasDivisionChamp

`func (o *MLBRecord) HasDivisionChamp() bool`

HasDivisionChamp returns a boolean if a field has been set.

### GetDivisionLeader

`func (o *MLBRecord) GetDivisionLeader() bool`

GetDivisionLeader returns the DivisionLeader field if non-nil, zero value otherwise.

### GetDivisionLeaderOk

`func (o *MLBRecord) GetDivisionLeaderOk() (*bool, bool)`

GetDivisionLeaderOk returns a tuple with the DivisionLeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionLeader

`func (o *MLBRecord) SetDivisionLeader(v bool)`

SetDivisionLeader sets DivisionLeader field to given value.

### HasDivisionLeader

`func (o *MLBRecord) HasDivisionLeader() bool`

HasDivisionLeader returns a boolean if a field has been set.

### GetHasWildcard

`func (o *MLBRecord) GetHasWildcard() bool`

GetHasWildcard returns the HasWildcard field if non-nil, zero value otherwise.

### GetHasWildcardOk

`func (o *MLBRecord) GetHasWildcardOk() (*bool, bool)`

GetHasWildcardOk returns a tuple with the HasWildcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasWildcard

`func (o *MLBRecord) SetHasWildcard(v bool)`

SetHasWildcard sets HasWildcard field to given value.

### HasHasWildcard

`func (o *MLBRecord) HasHasWildcard() bool`

HasHasWildcard returns a boolean if a field has been set.

### GetClinched

`func (o *MLBRecord) GetClinched() bool`

GetClinched returns the Clinched field if non-nil, zero value otherwise.

### GetClinchedOk

`func (o *MLBRecord) GetClinchedOk() (*bool, bool)`

GetClinchedOk returns a tuple with the Clinched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClinched

`func (o *MLBRecord) SetClinched(v bool)`

SetClinched sets Clinched field to given value.

### HasClinched

`func (o *MLBRecord) HasClinched() bool`

HasClinched returns a boolean if a field has been set.

### GetEliminationNumber

`func (o *MLBRecord) GetEliminationNumber() string`

GetEliminationNumber returns the EliminationNumber field if non-nil, zero value otherwise.

### GetEliminationNumberOk

`func (o *MLBRecord) GetEliminationNumberOk() (*string, bool)`

GetEliminationNumberOk returns a tuple with the EliminationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEliminationNumber

`func (o *MLBRecord) SetEliminationNumber(v string)`

SetEliminationNumber sets EliminationNumber field to given value.

### HasEliminationNumber

`func (o *MLBRecord) HasEliminationNumber() bool`

HasEliminationNumber returns a boolean if a field has been set.

### GetEliminationNumberSport

`func (o *MLBRecord) GetEliminationNumberSport() string`

GetEliminationNumberSport returns the EliminationNumberSport field if non-nil, zero value otherwise.

### GetEliminationNumberSportOk

`func (o *MLBRecord) GetEliminationNumberSportOk() (*string, bool)`

GetEliminationNumberSportOk returns a tuple with the EliminationNumberSport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEliminationNumberSport

`func (o *MLBRecord) SetEliminationNumberSport(v string)`

SetEliminationNumberSport sets EliminationNumberSport field to given value.

### HasEliminationNumberSport

`func (o *MLBRecord) HasEliminationNumberSport() bool`

HasEliminationNumberSport returns a boolean if a field has been set.

### GetEliminationNumberLeague

`func (o *MLBRecord) GetEliminationNumberLeague() string`

GetEliminationNumberLeague returns the EliminationNumberLeague field if non-nil, zero value otherwise.

### GetEliminationNumberLeagueOk

`func (o *MLBRecord) GetEliminationNumberLeagueOk() (*string, bool)`

GetEliminationNumberLeagueOk returns a tuple with the EliminationNumberLeague field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEliminationNumberLeague

`func (o *MLBRecord) SetEliminationNumberLeague(v string)`

SetEliminationNumberLeague sets EliminationNumberLeague field to given value.

### HasEliminationNumberLeague

`func (o *MLBRecord) HasEliminationNumberLeague() bool`

HasEliminationNumberLeague returns a boolean if a field has been set.

### GetEliminationNumberDivision

`func (o *MLBRecord) GetEliminationNumberDivision() string`

GetEliminationNumberDivision returns the EliminationNumberDivision field if non-nil, zero value otherwise.

### GetEliminationNumberDivisionOk

`func (o *MLBRecord) GetEliminationNumberDivisionOk() (*string, bool)`

GetEliminationNumberDivisionOk returns a tuple with the EliminationNumberDivision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEliminationNumberDivision

`func (o *MLBRecord) SetEliminationNumberDivision(v string)`

SetEliminationNumberDivision sets EliminationNumberDivision field to given value.

### HasEliminationNumberDivision

`func (o *MLBRecord) HasEliminationNumberDivision() bool`

HasEliminationNumberDivision returns a boolean if a field has been set.

### GetEliminationNumberConference

`func (o *MLBRecord) GetEliminationNumberConference() string`

GetEliminationNumberConference returns the EliminationNumberConference field if non-nil, zero value otherwise.

### GetEliminationNumberConferenceOk

`func (o *MLBRecord) GetEliminationNumberConferenceOk() (*string, bool)`

GetEliminationNumberConferenceOk returns a tuple with the EliminationNumberConference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEliminationNumberConference

`func (o *MLBRecord) SetEliminationNumberConference(v string)`

SetEliminationNumberConference sets EliminationNumberConference field to given value.

### HasEliminationNumberConference

`func (o *MLBRecord) HasEliminationNumberConference() bool`

HasEliminationNumberConference returns a boolean if a field has been set.

### GetWildCardEliminationNumber

`func (o *MLBRecord) GetWildCardEliminationNumber() string`

GetWildCardEliminationNumber returns the WildCardEliminationNumber field if non-nil, zero value otherwise.

### GetWildCardEliminationNumberOk

`func (o *MLBRecord) GetWildCardEliminationNumberOk() (*string, bool)`

GetWildCardEliminationNumberOk returns a tuple with the WildCardEliminationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWildCardEliminationNumber

`func (o *MLBRecord) SetWildCardEliminationNumber(v string)`

SetWildCardEliminationNumber sets WildCardEliminationNumber field to given value.

### HasWildCardEliminationNumber

`func (o *MLBRecord) HasWildCardEliminationNumber() bool`

HasWildCardEliminationNumber returns a boolean if a field has been set.

### GetMagicNumber

`func (o *MLBRecord) GetMagicNumber() string`

GetMagicNumber returns the MagicNumber field if non-nil, zero value otherwise.

### GetMagicNumberOk

`func (o *MLBRecord) GetMagicNumberOk() (*string, bool)`

GetMagicNumberOk returns a tuple with the MagicNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMagicNumber

`func (o *MLBRecord) SetMagicNumber(v string)`

SetMagicNumber sets MagicNumber field to given value.

### HasMagicNumber

`func (o *MLBRecord) HasMagicNumber() bool`

HasMagicNumber returns a boolean if a field has been set.

### GetWins

`func (o *MLBRecord) GetWins() float32`

GetWins returns the Wins field if non-nil, zero value otherwise.

### GetWinsOk

`func (o *MLBRecord) GetWinsOk() (*float32, bool)`

GetWinsOk returns a tuple with the Wins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWins

`func (o *MLBRecord) SetWins(v float32)`

SetWins sets Wins field to given value.


### GetLosses

`func (o *MLBRecord) GetLosses() float32`

GetLosses returns the Losses field if non-nil, zero value otherwise.

### GetLossesOk

`func (o *MLBRecord) GetLossesOk() (*float32, bool)`

GetLossesOk returns a tuple with the Losses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLosses

`func (o *MLBRecord) SetLosses(v float32)`

SetLosses sets Losses field to given value.


### GetRunDifferential

`func (o *MLBRecord) GetRunDifferential() float32`

GetRunDifferential returns the RunDifferential field if non-nil, zero value otherwise.

### GetRunDifferentialOk

`func (o *MLBRecord) GetRunDifferentialOk() (*float32, bool)`

GetRunDifferentialOk returns a tuple with the RunDifferential field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunDifferential

`func (o *MLBRecord) SetRunDifferential(v float32)`

SetRunDifferential sets RunDifferential field to given value.

### HasRunDifferential

`func (o *MLBRecord) HasRunDifferential() bool`

HasRunDifferential returns a boolean if a field has been set.

### GetWinningPercentage

`func (o *MLBRecord) GetWinningPercentage() string`

GetWinningPercentage returns the WinningPercentage field if non-nil, zero value otherwise.

### GetWinningPercentageOk

`func (o *MLBRecord) GetWinningPercentageOk() (*string, bool)`

GetWinningPercentageOk returns a tuple with the WinningPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWinningPercentage

`func (o *MLBRecord) SetWinningPercentage(v string)`

SetWinningPercentage sets WinningPercentage field to given value.

### HasWinningPercentage

`func (o *MLBRecord) HasWinningPercentage() bool`

HasWinningPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


