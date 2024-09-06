declare const BASE_PATH: string;
interface ConfigurationParameters {
    basePath?: string;
    fetchApi?: FetchAPI;
    middleware?: Middleware[];
    queryParamsStringify?: (params: HTTPQuery) => string;
    username?: string;
    password?: string;
    apiKey?: string | Promise<string> | ((name: string) => string | Promise<string>);
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>);
    headers?: HTTPHeaders;
    credentials?: RequestCredentials;
}
declare class Configuration {
    private configuration;
    constructor(configuration?: ConfigurationParameters);
    set config(configuration: Configuration);
    get basePath(): string;
    get fetchApi(): FetchAPI | undefined;
    get middleware(): Middleware[];
    get queryParamsStringify(): (params: HTTPQuery) => string;
    get username(): string | undefined;
    get password(): string | undefined;
    get apiKey(): ((name: string) => string | Promise<string>) | undefined;
    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined;
    get headers(): HTTPHeaders | undefined;
    get credentials(): RequestCredentials | undefined;
}
declare const DefaultConfig: Configuration;
declare class BaseAPI {
    protected configuration: Configuration;
    private static readonly jsonRegex;
    private middleware;
    constructor(configuration?: Configuration);
    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]): T;
    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>): T;
    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>): T;
    protected isJsonMime(mime: string | null | undefined): boolean;
    protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>;
    private createFetchParams;
    private fetchApi;
    private clone;
}
declare class ResponseError extends Error {
    response: Response;
    name: "ResponseError";
    constructor(response: Response, msg?: string);
}
declare class FetchError extends Error {
    cause: Error;
    name: "FetchError";
    constructor(cause: Error, msg?: string);
}
declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
type FetchAPI = WindowOrWorkerGlobalScope['fetch'];
type Json = any;
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
type HTTPHeaders = {
    [key: string]: string;
};
type HTTPQuery = {
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery;
};
type HTTPBody = Json | FormData | URLSearchParams;
type HTTPRequestInit = {
    headers?: HTTPHeaders;
    method: HTTPMethod;
    credentials?: RequestCredentials;
    body?: HTTPBody;
};
type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';
type InitOverrideFunction = (requestContext: {
    init: HTTPRequestInit;
    context: RequestOpts;
}) => Promise<RequestInit>;
interface FetchParams {
    url: string;
    init: RequestInit;
}
interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}
declare function querystring(params: HTTPQuery, prefix?: string): string;
declare function mapValues(data: any, fn: (item: any) => any): {};
declare function canConsumeForm(consumes: Consume[]): boolean;
interface Consume {
    contentType: string;
}
interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}
interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}
interface ErrorContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    error: unknown;
    response?: Response;
}
interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
    onError?(context: ErrorContext): Promise<Response | void>;
}
interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}
interface ResponseTransformer<T> {
    (json: any): T;
}
declare class JSONApiResponse<T> {
    raw: Response;
    private transformer;
    constructor(raw: Response, transformer?: ResponseTransformer<T>);
    value(): Promise<T>;
}
declare class VoidApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<void>;
}
declare class BlobApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<Blob>;
}
declare class TextApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<string>;
}

interface MLBLeagueDates {
    seasonId?: string;
    preSeasonStartDate?: string;
    preSeasonEndDate?: string;
    seasonStartDate?: string;
    springStartDate?: string;
    springEndDate?: string;
    offseasonStartDate?: string;
    offseasonEndDate?: string;
    seasonLevelGamedayType?: string;
    gameLevelGamedayType?: string;
}
declare function instanceOfMLBLeagueDates(value: object): value is MLBLeagueDates;
declare function MLBLeagueDatesFromJSON(json: any): MLBLeagueDates;
declare function MLBLeagueDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBLeagueDates;
declare function MLBLeagueDatesToJSON(value?: MLBLeagueDates | null): any;

interface MLBLeague {
    id: number;
    name: string;
    link?: string;
    abbreviation?: string;
    nameShort?: string;
    seasonState?: string;
    hasWildCard?: boolean;
    hasSplitSeason?: boolean;
    hasPlayoffPoints?: boolean;
    seasonDateInfo?: MLBLeagueDates;
    season?: string;
    orgCode?: string;
    conferencesInUse?: boolean;
    divisionsInUse?: boolean;
    sortOrder?: number;
    active?: boolean;
}
declare function instanceOfMLBLeague(value: object): value is MLBLeague;
declare function MLBLeagueFromJSON(json: any): MLBLeague;
declare function MLBLeagueFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBLeague;
declare function MLBLeagueToJSON(value?: MLBLeague | null): any;

interface MLBSport {
    id: number;
    code?: string;
    link?: string;
    name?: string;
    abbreviation?: string;
    sortOrder?: number;
    activeStatus?: boolean;
}
declare function instanceOfMLBSport(value: object): value is MLBSport;
declare function MLBSportFromJSON(json: any): MLBSport;
declare function MLBSportFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBSport;
declare function MLBSportToJSON(value?: MLBSport | null): any;

interface MLBDivision {
    id: number;
    name: string;
    season?: string;
    nameShort?: string;
    link?: string;
    abbreviation?: string;
    league?: MLBLeague;
    sport?: MLBSport;
    hasWildcard?: boolean;
    sortOrder?: number;
    numPlayoffTeams?: number;
    active?: boolean;
}
declare function instanceOfMLBDivision(value: object): value is MLBDivision;
declare function MLBDivisionFromJSON(json: any): MLBDivision;
declare function MLBDivisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBDivision;
declare function MLBDivisionToJSON(value?: MLBDivision | null): any;

interface MLBVenue {
    id: number;
    name: string;
    link?: string;
    active?: boolean;
    season?: string;
}
declare function instanceOfMLBVenue(value: object): value is MLBVenue;
declare function MLBVenueFromJSON(json: any): MLBVenue;
declare function MLBVenueFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBVenue;
declare function MLBVenueToJSON(value?: MLBVenue | null): any;

interface MLBGameStatus {
    abstractGameState?: string;
    codedGameState?: MLBGameStatusCodedGameStateEnum;
    detailedState?: string;
    statusCode?: string;
    startTimeTBD?: boolean;
    abstractGameCode?: string;
}
declare const MLBGameStatusCodedGameStateEnum: {
    readonly Final: "F";
    readonly Postponed: "D";
    readonly Scheduled: "S";
    readonly InProgress: "I";
    readonly Pregame: "P";
    readonly GameOver: "O";
};
type MLBGameStatusCodedGameStateEnum = typeof MLBGameStatusCodedGameStateEnum[keyof typeof MLBGameStatusCodedGameStateEnum];
declare function instanceOfMLBGameStatus(value: object): value is MLBGameStatus;
declare function MLBGameStatusFromJSON(json: any): MLBGameStatus;
declare function MLBGameStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBGameStatus;
declare function MLBGameStatusToJSON(value?: MLBGameStatus | null): any;

interface MLBTeam {
    id: number;
    name: string;
    link?: string;
    allStarStatus?: string;
    season?: number;
    venue?: MLBVenue;
    springVenue?: MLBVenue;
    teamCode?: string;
    fileCode?: string;
    abbreviation?: string;
    teamName?: string;
    locationName?: string;
    firstYearOfPlay?: string;
    league?: MLBLeague;
    springLeague?: MLBLeague;
    division?: MLBDivision;
    sport?: MLBSport;
    shortName?: string;
    franchiseName?: string;
    clubName?: string;
    active?: boolean;
}
declare function instanceOfMLBTeam(value: object): value is MLBTeam;
declare function MLBTeamFromJSON(json: any): MLBTeam;
declare function MLBTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBTeam;
declare function MLBTeamToJSON(value?: MLBTeam | null): any;

interface MLBLeagueRecord {
    wins: number;
    losses: number;
    ties?: number;
    pct: string;
}
declare function instanceOfMLBLeagueRecord(value: object): value is MLBLeagueRecord;
declare function MLBLeagueRecordFromJSON(json: any): MLBLeagueRecord;
declare function MLBLeagueRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBLeagueRecord;
declare function MLBLeagueRecordToJSON(value?: MLBLeagueRecord | null): any;

interface MLBGameTeam {
    leagueRecord?: MLBLeagueRecord;
    score: number;
    team: MLBTeam;
    isWinner: boolean;
    splitSquad?: boolean;
    seriesNumber?: number;
}
declare function instanceOfMLBGameTeam(value: object): value is MLBGameTeam;
declare function MLBGameTeamFromJSON(json: any): MLBGameTeam;
declare function MLBGameTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBGameTeam;
declare function MLBGameTeamToJSON(value?: MLBGameTeam | null): any;

interface MLBGameTeams {
    away: MLBGameTeam;
    home: MLBGameTeam;
}
declare function instanceOfMLBGameTeams(value: object): value is MLBGameTeams;
declare function MLBGameTeamsFromJSON(json: any): MLBGameTeams;
declare function MLBGameTeamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBGameTeams;
declare function MLBGameTeamsToJSON(value?: MLBGameTeams | null): any;

interface MLBGame {
    gamePk: number;
    gameGuid: string;
    link?: string;
    gameType: MLBGameGameTypeEnum;
    season: number;
    gameDate: string;
    officialDate: string;
    rescheduledTo?: number;
    rescheduledToDate?: string;
    rescheduledFrom?: number;
    rescheduledFromDate?: string;
    status: MLBGameStatus;
    teams: MLBGameTeams;
    venue?: MLBVenue;
    isTie?: boolean;
    gameNumber: number;
    publicFacing?: boolean;
    doubleHeader?: string;
    gamedayType?: string;
    tiebreaker?: string;
    calendarEventID?: string;
    seasonDisplay?: string;
    dayNight?: string;
    description?: string;
    scheduledInnings?: number;
    reverseHomeAwayStatus?: boolean;
    inningBreakLength?: number;
    gamesInSeries: number;
    seriesGameNumber: number;
    seriesDescription?: string;
    recordSource?: string;
    ifNecessary?: string;
    ifNecessaryDescription?: string;
}
declare const MLBGameGameTypeEnum: {
    readonly Exhibition: "E";
    readonly SpringTraining: "S";
    readonly Regular: "R";
    readonly WildCardSeries: "F";
    readonly DivisionSeries: "D";
    readonly LeagueChampionshipSeries: "L";
    readonly WorldSeries: "W";
};
type MLBGameGameTypeEnum = typeof MLBGameGameTypeEnum[keyof typeof MLBGameGameTypeEnum];
declare function instanceOfMLBGame(value: object): value is MLBGame;
declare function MLBGameFromJSON(json: any): MLBGame;
declare function MLBGameFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBGame;
declare function MLBGameToJSON(value?: MLBGame | null): any;

interface MLBStreak {
    streakType?: MLBStreakStreakTypeEnum;
}
declare const MLBStreakStreakTypeEnum: {
    readonly Losing: "losses";
    readonly Winning: "wins";
};
type MLBStreakStreakTypeEnum = typeof MLBStreakStreakTypeEnum[keyof typeof MLBStreakStreakTypeEnum];
declare function instanceOfMLBStreak(value: object): value is MLBStreak;
declare function MLBStreakFromJSON(json: any): MLBStreak;
declare function MLBStreakFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBStreak;
declare function MLBStreakToJSON(value?: MLBStreak | null): any;

interface MLBRecord {
    team: MLBTeam;
    season: string;
    streak: MLBStreak;
    divisionRank: string;
    leagueRank: string;
    sportRank?: string;
    gamesPlayed?: number;
    gamesBack: string;
    wildCardGamesBack?: string;
    leagueGamesBack?: string;
    sportGamesBack?: string;
    divisionGamesBack?: string;
    conferenceGamesBack?: string;
    leagueRecord: MLBLeagueRecord;
    lastUpdated?: string;
    runsAllowed?: number;
    runsScored?: number;
    divisionChamp?: boolean;
    divisionLeader?: boolean;
    hasWildcard?: boolean;
    clinched?: boolean;
    eliminationNumber?: string;
    eliminationNumberSport?: string;
    eliminationNumberLeague?: string;
    eliminationNumberDivision?: string;
    eliminationNumberConference?: string;
    wildCardEliminationNumber?: string;
    magicNumber?: string;
    wins: number;
    losses: number;
    runDifferential?: number;
    winningPercentage?: string;
}
declare function instanceOfMLBRecord(value: object): value is MLBRecord;
declare function MLBRecordFromJSON(json: any): MLBRecord;
declare function MLBRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBRecord;
declare function MLBRecordToJSON(value?: MLBRecord | null): any;

interface MLBScheduleDay {
    date?: string;
    totalItems?: number;
    totalEvents?: number;
    totalGames?: number;
    totalGamesInProgress?: number;
    games: Array<MLBGame>;
}
declare function instanceOfMLBScheduleDay(value: object): value is MLBScheduleDay;
declare function MLBScheduleDayFromJSON(json: any): MLBScheduleDay;
declare function MLBScheduleDayFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBScheduleDay;
declare function MLBScheduleDayToJSON(value?: MLBScheduleDay | null): any;

interface MLBSchedule {
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    dates: Array<MLBScheduleDay>;
}
declare function instanceOfMLBSchedule(value: object): value is MLBSchedule;
declare function MLBScheduleFromJSON(json: any): MLBSchedule;
declare function MLBScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBSchedule;
declare function MLBScheduleToJSON(value?: MLBSchedule | null): any;

interface MLBSeason {
    seasonId: string;
    hasWildcard?: boolean;
    preSeasonStartDate?: string;
    preSeasonEndDate?: string;
    seasonStartDate: string;
    seasonEndDate: string;
    springStartDate?: string;
    springEndDate?: string;
    regularSeasonStartDate: string;
    lastDate1stHalf?: string;
    allStartDate?: string;
    firstDate2ndHalf?: string;
    regularSeasonEndDate: string;
    postSeasonStartDate?: string;
    postSeasonEndDate?: string;
    offSeasonStartDate?: string;
    offSeasonEndDate?: string;
    seasonLevelGamedayType?: string;
    gameLevelGamedayType?: string;
    qualifierPlateAppearances?: number;
    qualifierOutsPitched?: number;
}
declare function instanceOfMLBSeason(value: object): value is MLBSeason;
declare function MLBSeasonFromJSON(json: any): MLBSeason;
declare function MLBSeasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBSeason;
declare function MLBSeasonToJSON(value?: MLBSeason | null): any;

interface MLBSeasons {
    seasons?: Array<MLBSeason>;
}
declare function instanceOfMLBSeasons(value: object): value is MLBSeasons;
declare function MLBSeasonsFromJSON(json: any): MLBSeasons;
declare function MLBSeasonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBSeasons;
declare function MLBSeasonsToJSON(value?: MLBSeasons | null): any;

interface MLBStandings {
    standingsType?: string;
    league: MLBLeague;
    division: MLBDivision;
    sport: MLBSport;
    lastUpdated?: string;
    teamRecords: Array<MLBRecord>;
}
declare function instanceOfMLBStandings(value: object): value is MLBStandings;
declare function MLBStandingsFromJSON(json: any): MLBStandings;
declare function MLBStandingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBStandings;
declare function MLBStandingsToJSON(value?: MLBStandings | null): any;

interface MLBStandingsList {
    records?: Array<MLBStandings>;
}
declare function instanceOfMLBStandingsList(value: object): value is MLBStandingsList;
declare function MLBStandingsListFromJSON(json: any): MLBStandingsList;
declare function MLBStandingsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBStandingsList;
declare function MLBStandingsListToJSON(value?: MLBStandingsList | null): any;

interface MLBTeams {
    teams?: Array<MLBTeam>;
}
declare function instanceOfMLBTeams(value: object): value is MLBTeams;
declare function MLBTeamsFromJSON(json: any): MLBTeams;
declare function MLBTeamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MLBTeams;
declare function MLBTeamsToJSON(value?: MLBTeams | null): any;

interface GetAllSeasonsRequest {
    sportId: number;
}
interface GetScheduleRequest {
    sportId: number;
    teamId?: number;
    startDate?: string;
    endDate?: string;
}
interface GetSeasonRequest {
    sportId: number;
    season: string;
}
interface GetStandingsRequest {
    leagueId: number;
    season: string;
    date?: string;
    fields?: Array<string>;
    hydrate?: string;
}
interface GetTeamsRequest {
    sportId: number;
    season: string;
    leagueIds?: Array<number>;
}
interface MlbApiInterface {
    getAllSeasonsRaw(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSeasons>>;
    getAllSeasons(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSeasons>;
    getScheduleRaw(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSchedule>>;
    getSchedule(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSchedule>;
    getSeasonRaw(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSeasons>>;
    getSeason(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSeasons>;
    getStandingsRaw(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBStandingsList>>;
    getStandings(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBStandingsList>;
    getTeamsRaw(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBTeams>>;
    getTeams(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBTeams>;
}
declare class MlbApi extends BaseAPI implements MlbApiInterface {
    getAllSeasonsRaw(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSeasons>>;
    getAllSeasons(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSeasons>;
    getScheduleRaw(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSchedule>>;
    getSchedule(requestParameters: GetScheduleRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSchedule>;
    getSeasonRaw(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBSeasons>>;
    getSeason(requestParameters: GetSeasonRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBSeasons>;
    getStandingsRaw(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBStandingsList>>;
    getStandings(requestParameters: GetStandingsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBStandingsList>;
    getTeamsRaw(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<MLBTeams>>;
    getTeams(requestParameters: GetTeamsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<MLBTeams>;
}

export { type ApiResponse, BASE_PATH, BaseAPI, BlobApiResponse, COLLECTION_FORMATS, Configuration, type ConfigurationParameters, type Consume, DefaultConfig, type ErrorContext, type FetchAPI, FetchError, type FetchParams, type GetAllSeasonsRequest, type GetScheduleRequest, type GetSeasonRequest, type GetStandingsRequest, type GetTeamsRequest, type HTTPBody, type HTTPHeaders, type HTTPMethod, type HTTPQuery, type HTTPRequestInit, type InitOverrideFunction, JSONApiResponse, type Json, type MLBDivision, MLBDivisionFromJSON, MLBDivisionFromJSONTyped, MLBDivisionToJSON, type MLBGame, MLBGameFromJSON, MLBGameFromJSONTyped, MLBGameGameTypeEnum, type MLBGameStatus, MLBGameStatusCodedGameStateEnum, MLBGameStatusFromJSON, MLBGameStatusFromJSONTyped, MLBGameStatusToJSON, type MLBGameTeam, MLBGameTeamFromJSON, MLBGameTeamFromJSONTyped, MLBGameTeamToJSON, type MLBGameTeams, MLBGameTeamsFromJSON, MLBGameTeamsFromJSONTyped, MLBGameTeamsToJSON, MLBGameToJSON, type MLBLeague, type MLBLeagueDates, MLBLeagueDatesFromJSON, MLBLeagueDatesFromJSONTyped, MLBLeagueDatesToJSON, MLBLeagueFromJSON, MLBLeagueFromJSONTyped, type MLBLeagueRecord, MLBLeagueRecordFromJSON, MLBLeagueRecordFromJSONTyped, MLBLeagueRecordToJSON, MLBLeagueToJSON, type MLBRecord, MLBRecordFromJSON, MLBRecordFromJSONTyped, MLBRecordToJSON, type MLBSchedule, type MLBScheduleDay, MLBScheduleDayFromJSON, MLBScheduleDayFromJSONTyped, MLBScheduleDayToJSON, MLBScheduleFromJSON, MLBScheduleFromJSONTyped, MLBScheduleToJSON, type MLBSeason, MLBSeasonFromJSON, MLBSeasonFromJSONTyped, MLBSeasonToJSON, type MLBSeasons, MLBSeasonsFromJSON, MLBSeasonsFromJSONTyped, MLBSeasonsToJSON, type MLBSport, MLBSportFromJSON, MLBSportFromJSONTyped, MLBSportToJSON, type MLBStandings, MLBStandingsFromJSON, MLBStandingsFromJSONTyped, type MLBStandingsList, MLBStandingsListFromJSON, MLBStandingsListFromJSONTyped, MLBStandingsListToJSON, MLBStandingsToJSON, type MLBStreak, MLBStreakFromJSON, MLBStreakFromJSONTyped, MLBStreakStreakTypeEnum, MLBStreakToJSON, type MLBTeam, MLBTeamFromJSON, MLBTeamFromJSONTyped, MLBTeamToJSON, type MLBTeams, MLBTeamsFromJSON, MLBTeamsFromJSONTyped, MLBTeamsToJSON, type MLBVenue, MLBVenueFromJSON, MLBVenueFromJSONTyped, MLBVenueToJSON, type Middleware, MlbApi, type MlbApiInterface, type ModelPropertyNaming, type RequestContext, type RequestOpts, RequiredError, type ResponseContext, ResponseError, type ResponseTransformer, TextApiResponse, VoidApiResponse, canConsumeForm, instanceOfMLBDivision, instanceOfMLBGame, instanceOfMLBGameStatus, instanceOfMLBGameTeam, instanceOfMLBGameTeams, instanceOfMLBLeague, instanceOfMLBLeagueDates, instanceOfMLBLeagueRecord, instanceOfMLBRecord, instanceOfMLBSchedule, instanceOfMLBScheduleDay, instanceOfMLBSeason, instanceOfMLBSeasons, instanceOfMLBSport, instanceOfMLBStandings, instanceOfMLBStandingsList, instanceOfMLBStreak, instanceOfMLBTeam, instanceOfMLBTeams, instanceOfMLBVenue, mapValues, querystring };
