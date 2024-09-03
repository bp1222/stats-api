"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BASE_PATH: () => BASE_PATH,
  BaseAPI: () => BaseAPI,
  BlobApiResponse: () => BlobApiResponse,
  COLLECTION_FORMATS: () => COLLECTION_FORMATS,
  Configuration: () => Configuration,
  DefaultConfig: () => DefaultConfig,
  FetchError: () => FetchError,
  JSONApiResponse: () => JSONApiResponse,
  MLBDivisionFromJSON: () => MLBDivisionFromJSON,
  MLBDivisionFromJSONTyped: () => MLBDivisionFromJSONTyped,
  MLBDivisionToJSON: () => MLBDivisionToJSON,
  MLBGameFromJSON: () => MLBGameFromJSON,
  MLBGameFromJSONTyped: () => MLBGameFromJSONTyped,
  MLBGameGameTypeEnum: () => MLBGameGameTypeEnum,
  MLBGameStatusCodedGameStateEnum: () => MLBGameStatusCodedGameStateEnum,
  MLBGameStatusFromJSON: () => MLBGameStatusFromJSON,
  MLBGameStatusFromJSONTyped: () => MLBGameStatusFromJSONTyped,
  MLBGameStatusToJSON: () => MLBGameStatusToJSON,
  MLBGameTeamFromJSON: () => MLBGameTeamFromJSON,
  MLBGameTeamFromJSONTyped: () => MLBGameTeamFromJSONTyped,
  MLBGameTeamToJSON: () => MLBGameTeamToJSON,
  MLBGameTeamsFromJSON: () => MLBGameTeamsFromJSON,
  MLBGameTeamsFromJSONTyped: () => MLBGameTeamsFromJSONTyped,
  MLBGameTeamsToJSON: () => MLBGameTeamsToJSON,
  MLBGameToJSON: () => MLBGameToJSON,
  MLBLeagueDatesFromJSON: () => MLBLeagueDatesFromJSON,
  MLBLeagueDatesFromJSONTyped: () => MLBLeagueDatesFromJSONTyped,
  MLBLeagueDatesToJSON: () => MLBLeagueDatesToJSON,
  MLBLeagueFromJSON: () => MLBLeagueFromJSON,
  MLBLeagueFromJSONTyped: () => MLBLeagueFromJSONTyped,
  MLBLeagueRecordFromJSON: () => MLBLeagueRecordFromJSON,
  MLBLeagueRecordFromJSONTyped: () => MLBLeagueRecordFromJSONTyped,
  MLBLeagueRecordToJSON: () => MLBLeagueRecordToJSON,
  MLBLeagueToJSON: () => MLBLeagueToJSON,
  MLBRecordFromJSON: () => MLBRecordFromJSON,
  MLBRecordFromJSONTyped: () => MLBRecordFromJSONTyped,
  MLBRecordToJSON: () => MLBRecordToJSON,
  MLBScheduleDayFromJSON: () => MLBScheduleDayFromJSON,
  MLBScheduleDayFromJSONTyped: () => MLBScheduleDayFromJSONTyped,
  MLBScheduleDayToJSON: () => MLBScheduleDayToJSON,
  MLBScheduleFromJSON: () => MLBScheduleFromJSON,
  MLBScheduleFromJSONTyped: () => MLBScheduleFromJSONTyped,
  MLBScheduleToJSON: () => MLBScheduleToJSON,
  MLBSeasonFromJSON: () => MLBSeasonFromJSON,
  MLBSeasonFromJSONTyped: () => MLBSeasonFromJSONTyped,
  MLBSeasonToJSON: () => MLBSeasonToJSON,
  MLBSeasonsFromJSON: () => MLBSeasonsFromJSON,
  MLBSeasonsFromJSONTyped: () => MLBSeasonsFromJSONTyped,
  MLBSeasonsToJSON: () => MLBSeasonsToJSON,
  MLBSportFromJSON: () => MLBSportFromJSON,
  MLBSportFromJSONTyped: () => MLBSportFromJSONTyped,
  MLBSportToJSON: () => MLBSportToJSON,
  MLBStandingsFromJSON: () => MLBStandingsFromJSON,
  MLBStandingsFromJSONTyped: () => MLBStandingsFromJSONTyped,
  MLBStandingsListFromJSON: () => MLBStandingsListFromJSON,
  MLBStandingsListFromJSONTyped: () => MLBStandingsListFromJSONTyped,
  MLBStandingsListToJSON: () => MLBStandingsListToJSON,
  MLBStandingsToJSON: () => MLBStandingsToJSON,
  MLBStreakFromJSON: () => MLBStreakFromJSON,
  MLBStreakFromJSONTyped: () => MLBStreakFromJSONTyped,
  MLBStreakStreakTypeEnum: () => MLBStreakStreakTypeEnum,
  MLBStreakToJSON: () => MLBStreakToJSON,
  MLBTeamFromJSON: () => MLBTeamFromJSON,
  MLBTeamFromJSONTyped: () => MLBTeamFromJSONTyped,
  MLBTeamToJSON: () => MLBTeamToJSON,
  MLBTeamsFromJSON: () => MLBTeamsFromJSON,
  MLBTeamsFromJSONTyped: () => MLBTeamsFromJSONTyped,
  MLBTeamsToJSON: () => MLBTeamsToJSON,
  MLBVenueFromJSON: () => MLBVenueFromJSON,
  MLBVenueFromJSONTyped: () => MLBVenueFromJSONTyped,
  MLBVenueToJSON: () => MLBVenueToJSON,
  MlbApi: () => MlbApi,
  RequiredError: () => RequiredError,
  ResponseError: () => ResponseError,
  TextApiResponse: () => TextApiResponse,
  VoidApiResponse: () => VoidApiResponse,
  canConsumeForm: () => canConsumeForm,
  instanceOfMLBDivision: () => instanceOfMLBDivision,
  instanceOfMLBGame: () => instanceOfMLBGame,
  instanceOfMLBGameStatus: () => instanceOfMLBGameStatus,
  instanceOfMLBGameTeam: () => instanceOfMLBGameTeam,
  instanceOfMLBGameTeams: () => instanceOfMLBGameTeams,
  instanceOfMLBLeague: () => instanceOfMLBLeague,
  instanceOfMLBLeagueDates: () => instanceOfMLBLeagueDates,
  instanceOfMLBLeagueRecord: () => instanceOfMLBLeagueRecord,
  instanceOfMLBRecord: () => instanceOfMLBRecord,
  instanceOfMLBSchedule: () => instanceOfMLBSchedule,
  instanceOfMLBScheduleDay: () => instanceOfMLBScheduleDay,
  instanceOfMLBSeason: () => instanceOfMLBSeason,
  instanceOfMLBSeasons: () => instanceOfMLBSeasons,
  instanceOfMLBSport: () => instanceOfMLBSport,
  instanceOfMLBStandings: () => instanceOfMLBStandings,
  instanceOfMLBStandingsList: () => instanceOfMLBStandingsList,
  instanceOfMLBStreak: () => instanceOfMLBStreak,
  instanceOfMLBTeam: () => instanceOfMLBTeam,
  instanceOfMLBTeams: () => instanceOfMLBTeams,
  instanceOfMLBVenue: () => instanceOfMLBVenue,
  mapValues: () => mapValues,
  querystring: () => querystring
});
module.exports = __toCommonJS(src_exports);

// src/runtime.ts
var BASE_PATH = "https://statsapi.mlb.com/api".replace(/\/+$/, "");
var Configuration = class {
  constructor(configuration = {}) {
    this.configuration = configuration;
  }
  set config(configuration) {
    this.configuration = configuration;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || querystring;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const apiKey = this.configuration.apiKey;
    if (apiKey) {
      return typeof apiKey === "function" ? apiKey : () => apiKey;
    }
    return void 0;
  }
  get accessToken() {
    const accessToken = this.configuration.accessToken;
    if (accessToken) {
      return typeof accessToken === "function" ? accessToken : () => __async(this, null, function* () {
        return accessToken;
      });
    }
    return void 0;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
};
var DefaultConfig = new Configuration();
var _BaseAPI = class _BaseAPI {
  constructor(configuration = DefaultConfig) {
    this.configuration = configuration;
    this.fetchApi = (url, init) => __async(this, null, function* () {
      let fetchParams = { url, init };
      for (const middleware of this.middleware) {
        if (middleware.pre) {
          fetchParams = (yield middleware.pre(__spreadValues({
            fetch: this.fetchApi
          }, fetchParams))) || fetchParams;
        }
      }
      let response = void 0;
      try {
        response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
      } catch (e) {
        for (const middleware of this.middleware) {
          if (middleware.onError) {
            response = (yield middleware.onError({
              fetch: this.fetchApi,
              url: fetchParams.url,
              init: fetchParams.init,
              error: e,
              response: response ? response.clone() : void 0
            })) || response;
          }
        }
        if (response === void 0) {
          if (e instanceof Error) {
            throw new FetchError(e, "The request failed and the interceptors did not return an alternative response");
          } else {
            throw e;
          }
        }
      }
      for (const middleware of this.middleware) {
        if (middleware.post) {
          response = (yield middleware.post({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            response: response.clone()
          })) || response;
        }
      }
      return response;
    });
    this.middleware = configuration.middleware;
  }
  withMiddleware(...middlewares) {
    const next = this.clone();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }
  withPreMiddleware(...preMiddlewares) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware(...middlewares);
  }
  withPostMiddleware(...postMiddlewares) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware(...middlewares);
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    if (!mime) {
      return false;
    }
    return _BaseAPI.jsonRegex.test(mime);
  }
  request(context, initOverrides) {
    return __async(this, null, function* () {
      const { url, init } = yield this.createFetchParams(context, initOverrides);
      const response = yield this.fetchApi(url, init);
      if (response && (response.status >= 200 && response.status < 300)) {
        return response;
      }
      throw new ResponseError(response, "Response returned an error code");
    });
  }
  createFetchParams(context, initOverrides) {
    return __async(this, null, function* () {
      let url = this.configuration.basePath + context.path;
      if (context.query !== void 0 && Object.keys(context.query).length !== 0) {
        url += "?" + this.configuration.queryParamsStringify(context.query);
      }
      const headers = Object.assign({}, this.configuration.headers, context.headers);
      Object.keys(headers).forEach((key) => headers[key] === void 0 ? delete headers[key] : {});
      const initOverrideFn = typeof initOverrides === "function" ? initOverrides : () => __async(this, null, function* () {
        return initOverrides;
      });
      const initParams = {
        method: context.method,
        headers,
        body: context.body,
        credentials: this.configuration.credentials
      };
      const overriddenInit = __spreadValues(__spreadValues({}, initParams), yield initOverrideFn({
        init: initParams,
        context
      }));
      let body;
      if (isFormData(overriddenInit.body) || overriddenInit.body instanceof URLSearchParams || isBlob(overriddenInit.body)) {
        body = overriddenInit.body;
      } else if (this.isJsonMime(headers["Content-Type"])) {
        body = JSON.stringify(overriddenInit.body);
      } else {
        body = overriddenInit.body;
      }
      const init = __spreadProps(__spreadValues({}, overriddenInit), {
        body
      });
      return { url, init };
    });
  }
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
};
_BaseAPI.jsonRegex = new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$", "i");
var BaseAPI = _BaseAPI;
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
var ResponseError = class extends Error {
  constructor(response, msg) {
    super(msg);
    this.response = response;
    this.name = "ResponseError";
  }
};
var FetchError = class extends Error {
  constructor(cause, msg) {
    super(msg);
    this.cause = cause;
    this.name = "FetchError";
  }
};
var RequiredError = class extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    this.name = "RequiredError";
  }
};
var COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "	",
  pipes: "|"
};
function querystring(params, prefix = "") {
  return Object.keys(params).map((key) => querystringSingleKey(key, params[key], prefix)).filter((part) => part.length > 0).join("&");
}
function querystringSingleKey(key, value, keyPrefix = "") {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
  }
  if (value instanceof Object) {
    return querystring(value, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
function mapValues(data, fn) {
  return Object.keys(data).reduce(
    (acc, key) => __spreadProps(__spreadValues({}, acc), { [key]: fn(data[key]) }),
    {}
  );
}
function canConsumeForm(consumes) {
  for (const consume of consumes) {
    if ("multipart/form-data" === consume.contentType) {
      return true;
    }
  }
  return false;
}
var JSONApiResponse = class {
  constructor(raw, transformer = (jsonValue) => jsonValue) {
    this.raw = raw;
    this.transformer = transformer;
  }
  value() {
    return __async(this, null, function* () {
      return this.transformer(yield this.raw.json());
    });
  }
};
var VoidApiResponse = class {
  constructor(raw) {
    this.raw = raw;
  }
  value() {
    return __async(this, null, function* () {
      return void 0;
    });
  }
};
var BlobApiResponse = class {
  constructor(raw) {
    this.raw = raw;
  }
  value() {
    return __async(this, null, function* () {
      return yield this.raw.blob();
    });
  }
};
var TextApiResponse = class {
  constructor(raw) {
    this.raw = raw;
  }
  value() {
    return __async(this, null, function* () {
      return yield this.raw.text();
    });
  }
};

// src/models/MLBLeagueDates.ts
function instanceOfMLBLeagueDates(value) {
  return true;
}
function MLBLeagueDatesFromJSON(json) {
  return MLBLeagueDatesFromJSONTyped(json, false);
}
function MLBLeagueDatesFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "seasonId": json["seasonId"] == null ? void 0 : json["seasonId"],
    "preSeasonStartDate": json["preSeasonStartDate"] == null ? void 0 : json["preSeasonStartDate"],
    "preSeasonEndDate": json["preSeasonEndDate"] == null ? void 0 : json["preSeasonEndDate"],
    "seasonStartDate": json["seasonStartDate"] == null ? void 0 : json["seasonStartDate"],
    "springStartDate": json["springStartDate"] == null ? void 0 : json["springStartDate"],
    "springEndDate": json["springEndDate"] == null ? void 0 : json["springEndDate"],
    "offseasonStartDate": json["offseasonStartDate"] == null ? void 0 : json["offseasonStartDate"],
    "offseasonEndDate": json["offseasonEndDate"] == null ? void 0 : json["offseasonEndDate"],
    "seasonLevelGamedayType": json["seasonLevelGamedayType"] == null ? void 0 : json["seasonLevelGamedayType"],
    "gameLevelGamedayType": json["gameLevelGamedayType"] == null ? void 0 : json["gameLevelGamedayType"]
  };
}
function MLBLeagueDatesToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "seasonId": value["seasonId"],
    "preSeasonStartDate": value["preSeasonStartDate"],
    "preSeasonEndDate": value["preSeasonEndDate"],
    "seasonStartDate": value["seasonStartDate"],
    "springStartDate": value["springStartDate"],
    "springEndDate": value["springEndDate"],
    "offseasonStartDate": value["offseasonStartDate"],
    "offseasonEndDate": value["offseasonEndDate"],
    "seasonLevelGamedayType": value["seasonLevelGamedayType"],
    "gameLevelGamedayType": value["gameLevelGamedayType"]
  };
}

// src/models/MLBLeague.ts
function instanceOfMLBLeague(value) {
  if (!("id" in value) || value["id"] === void 0) return false;
  if (!("name" in value) || value["name"] === void 0) return false;
  return true;
}
function MLBLeagueFromJSON(json) {
  return MLBLeagueFromJSONTyped(json, false);
}
function MLBLeagueFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "id": json["id"],
    "name": json["name"],
    "link": json["link"] == null ? void 0 : json["link"],
    "abbreviation": json["abbreviation"] == null ? void 0 : json["abbreviation"],
    "nameShort": json["nameShort"] == null ? void 0 : json["nameShort"],
    "seasonState": json["seasonState"] == null ? void 0 : json["seasonState"],
    "hasWildCard": json["hasWildCard"] == null ? void 0 : json["hasWildCard"],
    "hasSplitSeason": json["hasSplitSeason"] == null ? void 0 : json["hasSplitSeason"],
    "hasPlayoffPoints": json["hasPlayoffPoints"] == null ? void 0 : json["hasPlayoffPoints"],
    "seasonDateInfo": json["seasonDateInfo"] == null ? void 0 : MLBLeagueDatesFromJSON(json["seasonDateInfo"]),
    "season": json["season"] == null ? void 0 : json["season"],
    "orgCode": json["orgCode"] == null ? void 0 : json["orgCode"],
    "conferencesInUse": json["conferencesInUse"] == null ? void 0 : json["conferencesInUse"],
    "divisionsInUse": json["divisionsInUse"] == null ? void 0 : json["divisionsInUse"],
    "sortOrder": json["sortOrder"] == null ? void 0 : json["sortOrder"],
    "active": json["active"] == null ? void 0 : json["active"]
  };
}
function MLBLeagueToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "id": value["id"],
    "name": value["name"],
    "link": value["link"],
    "abbreviation": value["abbreviation"],
    "nameShort": value["nameShort"],
    "seasonState": value["seasonState"],
    "hasWildCard": value["hasWildCard"],
    "hasSplitSeason": value["hasSplitSeason"],
    "hasPlayoffPoints": value["hasPlayoffPoints"],
    "seasonDateInfo": MLBLeagueDatesToJSON(value["seasonDateInfo"]),
    "season": value["season"],
    "orgCode": value["orgCode"],
    "conferencesInUse": value["conferencesInUse"],
    "divisionsInUse": value["divisionsInUse"],
    "sortOrder": value["sortOrder"],
    "active": value["active"]
  };
}

// src/models/MLBSport.ts
function instanceOfMLBSport(value) {
  if (!("id" in value) || value["id"] === void 0) return false;
  return true;
}
function MLBSportFromJSON(json) {
  return MLBSportFromJSONTyped(json, false);
}
function MLBSportFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "id": json["id"],
    "code": json["code"] == null ? void 0 : json["code"],
    "link": json["link"] == null ? void 0 : json["link"],
    "name": json["name"] == null ? void 0 : json["name"],
    "abbreviation": json["abbreviation"] == null ? void 0 : json["abbreviation"],
    "sortOrder": json["sortOrder"] == null ? void 0 : json["sortOrder"],
    "activeStatus": json["activeStatus"] == null ? void 0 : json["activeStatus"]
  };
}
function MLBSportToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "id": value["id"],
    "code": value["code"],
    "link": value["link"],
    "name": value["name"],
    "abbreviation": value["abbreviation"],
    "sortOrder": value["sortOrder"],
    "activeStatus": value["activeStatus"]
  };
}

// src/models/MLBDivision.ts
function instanceOfMLBDivision(value) {
  if (!("id" in value) || value["id"] === void 0) return false;
  if (!("name" in value) || value["name"] === void 0) return false;
  return true;
}
function MLBDivisionFromJSON(json) {
  return MLBDivisionFromJSONTyped(json, false);
}
function MLBDivisionFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "id": json["id"],
    "name": json["name"],
    "season": json["season"] == null ? void 0 : json["season"],
    "nameShort": json["nameShort"] == null ? void 0 : json["nameShort"],
    "link": json["link"] == null ? void 0 : json["link"],
    "abbreviation": json["abbreviation"] == null ? void 0 : json["abbreviation"],
    "league": json["league"] == null ? void 0 : MLBLeagueFromJSON(json["league"]),
    "sport": json["sport"] == null ? void 0 : MLBSportFromJSON(json["sport"]),
    "hasWildcard": json["hasWildcard"] == null ? void 0 : json["hasWildcard"],
    "sortOrder": json["sortOrder"] == null ? void 0 : json["sortOrder"],
    "numPlayoffTeams": json["numPlayoffTeams"] == null ? void 0 : json["numPlayoffTeams"],
    "active": json["active"] == null ? void 0 : json["active"]
  };
}
function MLBDivisionToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "id": value["id"],
    "name": value["name"],
    "season": value["season"],
    "nameShort": value["nameShort"],
    "link": value["link"],
    "abbreviation": value["abbreviation"],
    "league": MLBLeagueToJSON(value["league"]),
    "sport": MLBSportToJSON(value["sport"]),
    "hasWildcard": value["hasWildcard"],
    "sortOrder": value["sortOrder"],
    "numPlayoffTeams": value["numPlayoffTeams"],
    "active": value["active"]
  };
}

// src/models/MLBVenue.ts
function instanceOfMLBVenue(value) {
  if (!("id" in value) || value["id"] === void 0) return false;
  if (!("name" in value) || value["name"] === void 0) return false;
  return true;
}
function MLBVenueFromJSON(json) {
  return MLBVenueFromJSONTyped(json, false);
}
function MLBVenueFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "id": json["id"],
    "name": json["name"],
    "link": json["link"] == null ? void 0 : json["link"],
    "active": json["active"] == null ? void 0 : json["active"],
    "season": json["season"] == null ? void 0 : json["season"]
  };
}
function MLBVenueToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "id": value["id"],
    "name": value["name"],
    "link": value["link"],
    "active": value["active"],
    "season": value["season"]
  };
}

// src/models/MLBGameStatus.ts
var MLBGameStatusCodedGameStateEnum = {
  Final: "F",
  Postponed: "D",
  Scheduled: "S",
  InProgress: "I",
  Pregame: "P",
  GameOver: "O"
};
function instanceOfMLBGameStatus(value) {
  return true;
}
function MLBGameStatusFromJSON(json) {
  return MLBGameStatusFromJSONTyped(json, false);
}
function MLBGameStatusFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "abstractGameState": json["abstractGameState"] == null ? void 0 : json["abstractGameState"],
    "codedGameState": json["codedGameState"] == null ? void 0 : json["codedGameState"],
    "detailedState": json["detailedState"] == null ? void 0 : json["detailedState"],
    "statusCode": json["statusCode"] == null ? void 0 : json["statusCode"],
    "startTimeTBD": json["startTimeTBD"] == null ? void 0 : json["startTimeTBD"],
    "abstractGameCode": json["abstractGameCode"] == null ? void 0 : json["abstractGameCode"]
  };
}
function MLBGameStatusToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "abstractGameState": value["abstractGameState"],
    "codedGameState": value["codedGameState"],
    "detailedState": value["detailedState"],
    "statusCode": value["statusCode"],
    "startTimeTBD": value["startTimeTBD"],
    "abstractGameCode": value["abstractGameCode"]
  };
}

// src/models/MLBTeam.ts
function instanceOfMLBTeam(value) {
  if (!("id" in value) || value["id"] === void 0) return false;
  if (!("name" in value) || value["name"] === void 0) return false;
  return true;
}
function MLBTeamFromJSON(json) {
  return MLBTeamFromJSONTyped(json, false);
}
function MLBTeamFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "id": json["id"],
    "name": json["name"],
    "link": json["link"] == null ? void 0 : json["link"],
    "allStarStatus": json["allStarStatus"] == null ? void 0 : json["allStarStatus"],
    "season": json["season"] == null ? void 0 : json["season"],
    "venue": json["venue"] == null ? void 0 : MLBVenueFromJSON(json["venue"]),
    "springVenue": json["springVenue"] == null ? void 0 : MLBVenueFromJSON(json["springVenue"]),
    "teamCode": json["teamCode"] == null ? void 0 : json["teamCode"],
    "fileCode": json["fileCode"] == null ? void 0 : json["fileCode"],
    "abbreviation": json["abbreviation"] == null ? void 0 : json["abbreviation"],
    "teamName": json["teamName"] == null ? void 0 : json["teamName"],
    "locationName": json["locationName"] == null ? void 0 : json["locationName"],
    "firstYearOfPlay": json["firstYearOfPlay"] == null ? void 0 : json["firstYearOfPlay"],
    "league": json["league"] == null ? void 0 : MLBLeagueFromJSON(json["league"]),
    "springLeague": json["springLeague"] == null ? void 0 : MLBLeagueFromJSON(json["springLeague"]),
    "division": json["division"] == null ? void 0 : MLBDivisionFromJSON(json["division"]),
    "sport": json["sport"] == null ? void 0 : MLBSportFromJSON(json["sport"]),
    "shortName": json["shortName"] == null ? void 0 : json["shortName"],
    "franchiseName": json["franchiseName"] == null ? void 0 : json["franchiseName"],
    "clubName": json["clubName"] == null ? void 0 : json["clubName"],
    "active": json["active"] == null ? void 0 : json["active"]
  };
}
function MLBTeamToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "id": value["id"],
    "name": value["name"],
    "link": value["link"],
    "allStarStatus": value["allStarStatus"],
    "season": value["season"],
    "venue": MLBVenueToJSON(value["venue"]),
    "springVenue": MLBVenueToJSON(value["springVenue"]),
    "teamCode": value["teamCode"],
    "fileCode": value["fileCode"],
    "abbreviation": value["abbreviation"],
    "teamName": value["teamName"],
    "locationName": value["locationName"],
    "firstYearOfPlay": value["firstYearOfPlay"],
    "league": MLBLeagueToJSON(value["league"]),
    "springLeague": MLBLeagueToJSON(value["springLeague"]),
    "division": MLBDivisionToJSON(value["division"]),
    "sport": MLBSportToJSON(value["sport"]),
    "shortName": value["shortName"],
    "franchiseName": value["franchiseName"],
    "clubName": value["clubName"],
    "active": value["active"]
  };
}

// src/models/MLBLeagueRecord.ts
function instanceOfMLBLeagueRecord(value) {
  if (!("wins" in value) || value["wins"] === void 0) return false;
  if (!("losses" in value) || value["losses"] === void 0) return false;
  if (!("pct" in value) || value["pct"] === void 0) return false;
  return true;
}
function MLBLeagueRecordFromJSON(json) {
  return MLBLeagueRecordFromJSONTyped(json, false);
}
function MLBLeagueRecordFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "wins": json["wins"],
    "losses": json["losses"],
    "ties": json["ties"] == null ? void 0 : json["ties"],
    "pct": json["pct"]
  };
}
function MLBLeagueRecordToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "wins": value["wins"],
    "losses": value["losses"],
    "ties": value["ties"],
    "pct": value["pct"]
  };
}

// src/models/MLBGameTeam.ts
function instanceOfMLBGameTeam(value) {
  if (!("score" in value) || value["score"] === void 0) return false;
  if (!("team" in value) || value["team"] === void 0) return false;
  if (!("isWinner" in value) || value["isWinner"] === void 0) return false;
  return true;
}
function MLBGameTeamFromJSON(json) {
  return MLBGameTeamFromJSONTyped(json, false);
}
function MLBGameTeamFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "leagueRecord": json["leagueRecord"] == null ? void 0 : MLBLeagueRecordFromJSON(json["leagueRecord"]),
    "score": json["score"],
    "team": MLBTeamFromJSON(json["team"]),
    "isWinner": json["isWinner"],
    "splitSquad": json["splitSquad"] == null ? void 0 : json["splitSquad"],
    "seriesNumber": json["seriesNumber"] == null ? void 0 : json["seriesNumber"]
  };
}
function MLBGameTeamToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "leagueRecord": MLBLeagueRecordToJSON(value["leagueRecord"]),
    "score": value["score"],
    "team": MLBTeamToJSON(value["team"]),
    "isWinner": value["isWinner"],
    "splitSquad": value["splitSquad"],
    "seriesNumber": value["seriesNumber"]
  };
}

// src/models/MLBGameTeams.ts
function instanceOfMLBGameTeams(value) {
  if (!("away" in value) || value["away"] === void 0) return false;
  if (!("home" in value) || value["home"] === void 0) return false;
  return true;
}
function MLBGameTeamsFromJSON(json) {
  return MLBGameTeamsFromJSONTyped(json, false);
}
function MLBGameTeamsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "away": MLBGameTeamFromJSON(json["away"]),
    "home": MLBGameTeamFromJSON(json["home"])
  };
}
function MLBGameTeamsToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "away": MLBGameTeamToJSON(value["away"]),
    "home": MLBGameTeamToJSON(value["home"])
  };
}

// src/models/MLBGame.ts
var MLBGameGameTypeEnum = {
  Exhibition: "E",
  SpringTraining: "S",
  Regular: "R",
  WildCardSeries: "F",
  DivisionSeries: "D",
  LeagueChampionshipSeries: "L",
  WorldSeries: "W"
};
function instanceOfMLBGame(value) {
  if (!("gamePk" in value) || value["gamePk"] === void 0) return false;
  if (!("gameGuid" in value) || value["gameGuid"] === void 0) return false;
  if (!("gameType" in value) || value["gameType"] === void 0) return false;
  if (!("season" in value) || value["season"] === void 0) return false;
  if (!("gameDate" in value) || value["gameDate"] === void 0) return false;
  if (!("officialDate" in value) || value["officialDate"] === void 0) return false;
  if (!("status" in value) || value["status"] === void 0) return false;
  if (!("teams" in value) || value["teams"] === void 0) return false;
  if (!("gameNumber" in value) || value["gameNumber"] === void 0) return false;
  if (!("gamesInSeries" in value) || value["gamesInSeries"] === void 0) return false;
  if (!("seriesGameNumber" in value) || value["seriesGameNumber"] === void 0) return false;
  return true;
}
function MLBGameFromJSON(json) {
  return MLBGameFromJSONTyped(json, false);
}
function MLBGameFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "gamePk": json["gamePk"],
    "gameGuid": json["gameGuid"],
    "link": json["link"] == null ? void 0 : json["link"],
    "gameType": json["gameType"],
    "season": json["season"],
    "gameDate": json["gameDate"],
    "officialDate": json["officialDate"],
    "rescheduledTo": json["rescheduledTo"] == null ? void 0 : json["rescheduledTo"],
    "rescheduledToDate": json["rescheduledToDate"] == null ? void 0 : json["rescheduledToDate"],
    "rescheduledFrom": json["rescheduledFrom"] == null ? void 0 : json["rescheduledFrom"],
    "rescheduledFromDate": json["rescheduledFromDate"] == null ? void 0 : json["rescheduledFromDate"],
    "status": MLBGameStatusFromJSON(json["status"]),
    "teams": MLBGameTeamsFromJSON(json["teams"]),
    "venue": json["venue"] == null ? void 0 : MLBVenueFromJSON(json["venue"]),
    "isTie": json["isTie"] == null ? void 0 : json["isTie"],
    "gameNumber": json["gameNumber"],
    "publicFacing": json["publicFacing"] == null ? void 0 : json["publicFacing"],
    "doubleHeader": json["doubleHeader"] == null ? void 0 : json["doubleHeader"],
    "gamedayType": json["gamedayType"] == null ? void 0 : json["gamedayType"],
    "tiebreaker": json["tiebreaker"] == null ? void 0 : json["tiebreaker"],
    "calendarEventID": json["calendarEventID"] == null ? void 0 : json["calendarEventID"],
    "seasonDisplay": json["seasonDisplay"] == null ? void 0 : json["seasonDisplay"],
    "dayNight": json["dayNight"] == null ? void 0 : json["dayNight"],
    "description": json["description"] == null ? void 0 : json["description"],
    "scheduledInnings": json["scheduledInnings"] == null ? void 0 : json["scheduledInnings"],
    "reverseHomeAwayStatus": json["reverseHomeAwayStatus"] == null ? void 0 : json["reverseHomeAwayStatus"],
    "inningBreakLength": json["inningBreakLength"] == null ? void 0 : json["inningBreakLength"],
    "gamesInSeries": json["gamesInSeries"],
    "seriesGameNumber": json["seriesGameNumber"],
    "seriesDescription": json["seriesDescription"] == null ? void 0 : json["seriesDescription"],
    "recordSource": json["recordSource"] == null ? void 0 : json["recordSource"],
    "ifNecessary": json["ifNecessary"] == null ? void 0 : json["ifNecessary"],
    "ifNecessaryDescription": json["ifNecessaryDescription"] == null ? void 0 : json["ifNecessaryDescription"]
  };
}
function MLBGameToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "gamePk": value["gamePk"],
    "gameGuid": value["gameGuid"],
    "link": value["link"],
    "gameType": value["gameType"],
    "season": value["season"],
    "gameDate": value["gameDate"],
    "officialDate": value["officialDate"],
    "rescheduledTo": value["rescheduledTo"],
    "rescheduledToDate": value["rescheduledToDate"],
    "rescheduledFrom": value["rescheduledFrom"],
    "rescheduledFromDate": value["rescheduledFromDate"],
    "status": MLBGameStatusToJSON(value["status"]),
    "teams": MLBGameTeamsToJSON(value["teams"]),
    "venue": MLBVenueToJSON(value["venue"]),
    "isTie": value["isTie"],
    "gameNumber": value["gameNumber"],
    "publicFacing": value["publicFacing"],
    "doubleHeader": value["doubleHeader"],
    "gamedayType": value["gamedayType"],
    "tiebreaker": value["tiebreaker"],
    "calendarEventID": value["calendarEventID"],
    "seasonDisplay": value["seasonDisplay"],
    "dayNight": value["dayNight"],
    "description": value["description"],
    "scheduledInnings": value["scheduledInnings"],
    "reverseHomeAwayStatus": value["reverseHomeAwayStatus"],
    "inningBreakLength": value["inningBreakLength"],
    "gamesInSeries": value["gamesInSeries"],
    "seriesGameNumber": value["seriesGameNumber"],
    "seriesDescription": value["seriesDescription"],
    "recordSource": value["recordSource"],
    "ifNecessary": value["ifNecessary"],
    "ifNecessaryDescription": value["ifNecessaryDescription"]
  };
}

// src/models/MLBStreak.ts
var MLBStreakStreakTypeEnum = {
  Losing: "losses",
  Winning: "wins"
};
function instanceOfMLBStreak(value) {
  return true;
}
function MLBStreakFromJSON(json) {
  return MLBStreakFromJSONTyped(json, false);
}
function MLBStreakFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "streakType": json["streakType"] == null ? void 0 : json["streakType"]
  };
}
function MLBStreakToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "streakType": value["streakType"]
  };
}

// src/models/MLBRecord.ts
function instanceOfMLBRecord(value) {
  if (!("team" in value) || value["team"] === void 0) return false;
  if (!("season" in value) || value["season"] === void 0) return false;
  if (!("streak" in value) || value["streak"] === void 0) return false;
  if (!("divisionRank" in value) || value["divisionRank"] === void 0) return false;
  if (!("leagueRank" in value) || value["leagueRank"] === void 0) return false;
  if (!("gamesBack" in value) || value["gamesBack"] === void 0) return false;
  if (!("leagueRecord" in value) || value["leagueRecord"] === void 0) return false;
  if (!("wins" in value) || value["wins"] === void 0) return false;
  if (!("losses" in value) || value["losses"] === void 0) return false;
  return true;
}
function MLBRecordFromJSON(json) {
  return MLBRecordFromJSONTyped(json, false);
}
function MLBRecordFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "team": MLBTeamFromJSON(json["team"]),
    "season": json["season"],
    "streak": MLBStreakFromJSON(json["streak"]),
    "divisionRank": json["divisionRank"],
    "leagueRank": json["leagueRank"],
    "sportRank": json["sportRank"] == null ? void 0 : json["sportRank"],
    "gamesPlayed": json["gamesPlayed"] == null ? void 0 : json["gamesPlayed"],
    "gamesBack": json["gamesBack"],
    "wildCardGamesBack": json["wildCardGamesBack"] == null ? void 0 : json["wildCardGamesBack"],
    "leagueGamesBack": json["leagueGamesBack"] == null ? void 0 : json["leagueGamesBack"],
    "sportGamesBack": json["sportGamesBack"] == null ? void 0 : json["sportGamesBack"],
    "divisionGamesBack": json["divisionGamesBack"] == null ? void 0 : json["divisionGamesBack"],
    "conferenceGamesBack": json["conferenceGamesBack"] == null ? void 0 : json["conferenceGamesBack"],
    "leagueRecord": MLBLeagueRecordFromJSON(json["leagueRecord"]),
    "lastUpdated": json["lastUpdated"] == null ? void 0 : json["lastUpdated"],
    "runsAllowed": json["runsAllowed"] == null ? void 0 : json["runsAllowed"],
    "runsScored": json["runsScored"] == null ? void 0 : json["runsScored"],
    "divisionChamp": json["divisionChamp"] == null ? void 0 : json["divisionChamp"],
    "divisionLeader": json["divisionLeader"] == null ? void 0 : json["divisionLeader"],
    "hasWildcard": json["hasWildcard"] == null ? void 0 : json["hasWildcard"],
    "clinched": json["clinched"] == null ? void 0 : json["clinched"],
    "eliminationNumber": json["eliminationNumber"] == null ? void 0 : json["eliminationNumber"],
    "eliminationNumberSport": json["eliminationNumberSport"] == null ? void 0 : json["eliminationNumberSport"],
    "eliminationNumberLeague": json["eliminationNumberLeague"] == null ? void 0 : json["eliminationNumberLeague"],
    "eliminationNumberDivision": json["eliminationNumberDivision"] == null ? void 0 : json["eliminationNumberDivision"],
    "eliminationNumberConference": json["eliminationNumberConference"] == null ? void 0 : json["eliminationNumberConference"],
    "wildCardEliminationNumber": json["wildCardEliminationNumber"] == null ? void 0 : json["wildCardEliminationNumber"],
    "magicNumber": json["magicNumber"] == null ? void 0 : json["magicNumber"],
    "wins": json["wins"],
    "losses": json["losses"],
    "runDifferential": json["runDifferential"] == null ? void 0 : json["runDifferential"],
    "winningPercentage": json["winningPercentage"] == null ? void 0 : json["winningPercentage"]
  };
}
function MLBRecordToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "team": MLBTeamToJSON(value["team"]),
    "season": value["season"],
    "streak": MLBStreakToJSON(value["streak"]),
    "divisionRank": value["divisionRank"],
    "leagueRank": value["leagueRank"],
    "sportRank": value["sportRank"],
    "gamesPlayed": value["gamesPlayed"],
    "gamesBack": value["gamesBack"],
    "wildCardGamesBack": value["wildCardGamesBack"],
    "leagueGamesBack": value["leagueGamesBack"],
    "sportGamesBack": value["sportGamesBack"],
    "divisionGamesBack": value["divisionGamesBack"],
    "conferenceGamesBack": value["conferenceGamesBack"],
    "leagueRecord": MLBLeagueRecordToJSON(value["leagueRecord"]),
    "lastUpdated": value["lastUpdated"],
    "runsAllowed": value["runsAllowed"],
    "runsScored": value["runsScored"],
    "divisionChamp": value["divisionChamp"],
    "divisionLeader": value["divisionLeader"],
    "hasWildcard": value["hasWildcard"],
    "clinched": value["clinched"],
    "eliminationNumber": value["eliminationNumber"],
    "eliminationNumberSport": value["eliminationNumberSport"],
    "eliminationNumberLeague": value["eliminationNumberLeague"],
    "eliminationNumberDivision": value["eliminationNumberDivision"],
    "eliminationNumberConference": value["eliminationNumberConference"],
    "wildCardEliminationNumber": value["wildCardEliminationNumber"],
    "magicNumber": value["magicNumber"],
    "wins": value["wins"],
    "losses": value["losses"],
    "runDifferential": value["runDifferential"],
    "winningPercentage": value["winningPercentage"]
  };
}

// src/models/MLBScheduleDay.ts
function instanceOfMLBScheduleDay(value) {
  if (!("games" in value) || value["games"] === void 0) return false;
  return true;
}
function MLBScheduleDayFromJSON(json) {
  return MLBScheduleDayFromJSONTyped(json, false);
}
function MLBScheduleDayFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "date": json["date"] == null ? void 0 : json["date"],
    "totalItems": json["totalItems"] == null ? void 0 : json["totalItems"],
    "totalEvents": json["totalEvents"] == null ? void 0 : json["totalEvents"],
    "totalGames": json["totalGames"] == null ? void 0 : json["totalGames"],
    "totalGamesInProgress": json["totalGamesInProgress"] == null ? void 0 : json["totalGamesInProgress"],
    "games": json["games"].map(MLBGameFromJSON)
  };
}
function MLBScheduleDayToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "date": value["date"],
    "totalItems": value["totalItems"],
    "totalEvents": value["totalEvents"],
    "totalGames": value["totalGames"],
    "totalGamesInProgress": value["totalGamesInProgress"],
    "games": value["games"].map(MLBGameToJSON)
  };
}

// src/models/MLBSchedule.ts
function instanceOfMLBSchedule(value) {
  if (!("totalItems" in value) || value["totalItems"] === void 0) return false;
  if (!("totalEvents" in value) || value["totalEvents"] === void 0) return false;
  if (!("totalGames" in value) || value["totalGames"] === void 0) return false;
  if (!("totalGamesInProgress" in value) || value["totalGamesInProgress"] === void 0) return false;
  if (!("dates" in value) || value["dates"] === void 0) return false;
  return true;
}
function MLBScheduleFromJSON(json) {
  return MLBScheduleFromJSONTyped(json, false);
}
function MLBScheduleFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "totalItems": json["totalItems"],
    "totalEvents": json["totalEvents"],
    "totalGames": json["totalGames"],
    "totalGamesInProgress": json["totalGamesInProgress"],
    "dates": json["dates"].map(MLBScheduleDayFromJSON)
  };
}
function MLBScheduleToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "totalItems": value["totalItems"],
    "totalEvents": value["totalEvents"],
    "totalGames": value["totalGames"],
    "totalGamesInProgress": value["totalGamesInProgress"],
    "dates": value["dates"].map(MLBScheduleDayToJSON)
  };
}

// src/models/MLBSeason.ts
function instanceOfMLBSeason(value) {
  if (!("seasonId" in value) || value["seasonId"] === void 0) return false;
  if (!("seasonStartDate" in value) || value["seasonStartDate"] === void 0) return false;
  if (!("seasonEndDate" in value) || value["seasonEndDate"] === void 0) return false;
  if (!("regularSeasonStartDate" in value) || value["regularSeasonStartDate"] === void 0) return false;
  if (!("regularSeasonEndDate" in value) || value["regularSeasonEndDate"] === void 0) return false;
  return true;
}
function MLBSeasonFromJSON(json) {
  return MLBSeasonFromJSONTyped(json, false);
}
function MLBSeasonFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "seasonId": json["seasonId"],
    "hasWildcard": json["hasWildcard"] == null ? void 0 : json["hasWildcard"],
    "preSeasonStartDate": json["preSeasonStartDate"] == null ? void 0 : json["preSeasonStartDate"],
    "preSeasonEndDate": json["preSeasonEndDate"] == null ? void 0 : json["preSeasonEndDate"],
    "seasonStartDate": json["seasonStartDate"],
    "seasonEndDate": json["seasonEndDate"],
    "springStartDate": json["springStartDate"] == null ? void 0 : json["springStartDate"],
    "springEndDate": json["springEndDate"] == null ? void 0 : json["springEndDate"],
    "regularSeasonStartDate": json["regularSeasonStartDate"],
    "lastDate1stHalf": json["lastDate1stHalf"] == null ? void 0 : json["lastDate1stHalf"],
    "allStartDate": json["allStartDate"] == null ? void 0 : json["allStartDate"],
    "firstDate2ndHalf": json["firstDate2ndHalf"] == null ? void 0 : json["firstDate2ndHalf"],
    "regularSeasonEndDate": json["regularSeasonEndDate"],
    "postSeasonStartDate": json["postSeasonStartDate"] == null ? void 0 : json["postSeasonStartDate"],
    "postSeasonEndDate": json["postSeasonEndDate"] == null ? void 0 : json["postSeasonEndDate"],
    "offSeasonStartDate": json["offSeasonStartDate"] == null ? void 0 : json["offSeasonStartDate"],
    "offSeasonEndDate": json["offSeasonEndDate"] == null ? void 0 : json["offSeasonEndDate"],
    "seasonLevelGamedayType": json["seasonLevelGamedayType"] == null ? void 0 : json["seasonLevelGamedayType"],
    "gameLevelGamedayType": json["gameLevelGamedayType"] == null ? void 0 : json["gameLevelGamedayType"],
    "qualifierPlateAppearances": json["qualifierPlateAppearances"] == null ? void 0 : json["qualifierPlateAppearances"],
    "qualifierOutsPitched": json["qualifierOutsPitched"] == null ? void 0 : json["qualifierOutsPitched"]
  };
}
function MLBSeasonToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "seasonId": value["seasonId"],
    "hasWildcard": value["hasWildcard"],
    "preSeasonStartDate": value["preSeasonStartDate"],
    "preSeasonEndDate": value["preSeasonEndDate"],
    "seasonStartDate": value["seasonStartDate"],
    "seasonEndDate": value["seasonEndDate"],
    "springStartDate": value["springStartDate"],
    "springEndDate": value["springEndDate"],
    "regularSeasonStartDate": value["regularSeasonStartDate"],
    "lastDate1stHalf": value["lastDate1stHalf"],
    "allStartDate": value["allStartDate"],
    "firstDate2ndHalf": value["firstDate2ndHalf"],
    "regularSeasonEndDate": value["regularSeasonEndDate"],
    "postSeasonStartDate": value["postSeasonStartDate"],
    "postSeasonEndDate": value["postSeasonEndDate"],
    "offSeasonStartDate": value["offSeasonStartDate"],
    "offSeasonEndDate": value["offSeasonEndDate"],
    "seasonLevelGamedayType": value["seasonLevelGamedayType"],
    "gameLevelGamedayType": value["gameLevelGamedayType"],
    "qualifierPlateAppearances": value["qualifierPlateAppearances"],
    "qualifierOutsPitched": value["qualifierOutsPitched"]
  };
}

// src/models/MLBSeasons.ts
function instanceOfMLBSeasons(value) {
  return true;
}
function MLBSeasonsFromJSON(json) {
  return MLBSeasonsFromJSONTyped(json, false);
}
function MLBSeasonsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "seasons": json["seasons"] == null ? void 0 : json["seasons"].map(MLBSeasonFromJSON)
  };
}
function MLBSeasonsToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "seasons": value["seasons"] == null ? void 0 : value["seasons"].map(MLBSeasonToJSON)
  };
}

// src/models/MLBStandings.ts
function instanceOfMLBStandings(value) {
  if (!("league" in value) || value["league"] === void 0) return false;
  if (!("division" in value) || value["division"] === void 0) return false;
  if (!("sport" in value) || value["sport"] === void 0) return false;
  if (!("teamRecords" in value) || value["teamRecords"] === void 0) return false;
  return true;
}
function MLBStandingsFromJSON(json) {
  return MLBStandingsFromJSONTyped(json, false);
}
function MLBStandingsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "standingsType": json["standingsType"] == null ? void 0 : json["standingsType"],
    "league": MLBLeagueFromJSON(json["league"]),
    "division": MLBDivisionFromJSON(json["division"]),
    "sport": MLBSportFromJSON(json["sport"]),
    "lastUpdated": json["lastUpdated"] == null ? void 0 : json["lastUpdated"],
    "teamRecords": json["teamRecords"].map(MLBRecordFromJSON)
  };
}
function MLBStandingsToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "standingsType": value["standingsType"],
    "league": MLBLeagueToJSON(value["league"]),
    "division": MLBDivisionToJSON(value["division"]),
    "sport": MLBSportToJSON(value["sport"]),
    "lastUpdated": value["lastUpdated"],
    "teamRecords": value["teamRecords"].map(MLBRecordToJSON)
  };
}

// src/models/MLBStandingsList.ts
function instanceOfMLBStandingsList(value) {
  return true;
}
function MLBStandingsListFromJSON(json) {
  return MLBStandingsListFromJSONTyped(json, false);
}
function MLBStandingsListFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "records": json["records"] == null ? void 0 : json["records"].map(MLBStandingsFromJSON)
  };
}
function MLBStandingsListToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "records": value["records"] == null ? void 0 : value["records"].map(MLBStandingsToJSON)
  };
}

// src/models/MLBTeams.ts
function instanceOfMLBTeams(value) {
  return true;
}
function MLBTeamsFromJSON(json) {
  return MLBTeamsFromJSONTyped(json, false);
}
function MLBTeamsFromJSONTyped(json, ignoreDiscriminator) {
  if (json == null) {
    return json;
  }
  return {
    "teams": json["teams"] == null ? void 0 : json["teams"].map(MLBTeamFromJSON)
  };
}
function MLBTeamsToJSON(value) {
  if (value == null) {
    return value;
  }
  return {
    "teams": value["teams"] == null ? void 0 : value["teams"].map(MLBTeamToJSON)
  };
}

// src/apis/MlbApi.ts
var MlbApi = class extends BaseAPI {
  /**
   * Returns All Seasons 
   * Retrieves All Seasons over time
   */
  getAllSeasonsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters["sportId"] == null) {
        throw new RequiredError(
          "sportId",
          'Required parameter "sportId" was null or undefined when calling getAllSeasons().'
        );
      }
      const queryParameters = {};
      if (requestParameters["sportId"] != null) {
        queryParameters["sportId"] = requestParameters["sportId"];
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/v1/seasons/all`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => MLBSeasonsFromJSON(jsonValue));
    });
  }
  /**
   * Returns All Seasons 
   * Retrieves All Seasons over time
   */
  getAllSeasons(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getAllSeasonsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Returns Schedule 
   * Retrieves schedule
   */
  getScheduleRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters["sportId"] == null) {
        throw new RequiredError(
          "sportId",
          'Required parameter "sportId" was null or undefined when calling getSchedule().'
        );
      }
      const queryParameters = {};
      if (requestParameters["sportId"] != null) {
        queryParameters["sportId"] = requestParameters["sportId"];
      }
      if (requestParameters["teamId"] != null) {
        queryParameters["teamId"] = requestParameters["teamId"];
      }
      if (requestParameters["startDate"] != null) {
        queryParameters["startDate"] = requestParameters["startDate"];
      }
      if (requestParameters["endDate"] != null) {
        queryParameters["endDate"] = requestParameters["endDate"];
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/v1/schedule`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => MLBScheduleFromJSON(jsonValue));
    });
  }
  /**
   * Returns Schedule 
   * Retrieves schedule
   */
  getSchedule(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getScheduleRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Returns Season 
   * Retrieves season
   */
  getSeasonRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters["sportId"] == null) {
        throw new RequiredError(
          "sportId",
          'Required parameter "sportId" was null or undefined when calling getSeason().'
        );
      }
      if (requestParameters["season"] == null) {
        throw new RequiredError(
          "season",
          'Required parameter "season" was null or undefined when calling getSeason().'
        );
      }
      const queryParameters = {};
      if (requestParameters["sportId"] != null) {
        queryParameters["sportId"] = requestParameters["sportId"];
      }
      if (requestParameters["season"] != null) {
        queryParameters["season"] = requestParameters["season"];
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/v1/seasons`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => MLBSeasonFromJSON(jsonValue));
    });
  }
  /**
   * Returns Season 
   * Retrieves season
   */
  getSeason(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getSeasonRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Returns Standing 
   * Retrieves Standings
   */
  getStandingsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters["leagueId"] == null) {
        throw new RequiredError(
          "leagueId",
          'Required parameter "leagueId" was null or undefined when calling getStandings().'
        );
      }
      if (requestParameters["season"] == null) {
        throw new RequiredError(
          "season",
          'Required parameter "season" was null or undefined when calling getStandings().'
        );
      }
      const queryParameters = {};
      if (requestParameters["leagueId"] != null) {
        queryParameters["leagueId"] = requestParameters["leagueId"];
      }
      if (requestParameters["season"] != null) {
        queryParameters["season"] = requestParameters["season"];
      }
      if (requestParameters["date"] != null) {
        queryParameters["date"] = requestParameters["date"];
      }
      if (requestParameters["fields"] != null) {
        queryParameters["fields"] = requestParameters["fields"].join(COLLECTION_FORMATS["csv"]);
      }
      if (requestParameters["hydrate"] != null) {
        queryParameters["hydrate"] = requestParameters["hydrate"];
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/v1/standings`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => MLBStandingsListFromJSON(jsonValue));
    });
  }
  /**
   * Returns Standing 
   * Retrieves Standings
   */
  getStandings(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getStandingsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Returns Teams 
   * Retrieves Teams
   */
  getTeamsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters["sportId"] == null) {
        throw new RequiredError(
          "sportId",
          'Required parameter "sportId" was null or undefined when calling getTeams().'
        );
      }
      if (requestParameters["season"] == null) {
        throw new RequiredError(
          "season",
          'Required parameter "season" was null or undefined when calling getTeams().'
        );
      }
      const queryParameters = {};
      if (requestParameters["sportId"] != null) {
        queryParameters["sportId"] = requestParameters["sportId"];
      }
      if (requestParameters["season"] != null) {
        queryParameters["season"] = requestParameters["season"];
      }
      if (requestParameters["leagueIds"] != null) {
        queryParameters["leagueIds"] = requestParameters["leagueIds"];
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/v1/teams`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => MLBTeamsFromJSON(jsonValue));
    });
  }
  /**
   * Returns Teams 
   * Retrieves Teams
   */
  getTeams(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getTeamsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BASE_PATH,
  BaseAPI,
  BlobApiResponse,
  COLLECTION_FORMATS,
  Configuration,
  DefaultConfig,
  FetchError,
  JSONApiResponse,
  MLBDivisionFromJSON,
  MLBDivisionFromJSONTyped,
  MLBDivisionToJSON,
  MLBGameFromJSON,
  MLBGameFromJSONTyped,
  MLBGameGameTypeEnum,
  MLBGameStatusCodedGameStateEnum,
  MLBGameStatusFromJSON,
  MLBGameStatusFromJSONTyped,
  MLBGameStatusToJSON,
  MLBGameTeamFromJSON,
  MLBGameTeamFromJSONTyped,
  MLBGameTeamToJSON,
  MLBGameTeamsFromJSON,
  MLBGameTeamsFromJSONTyped,
  MLBGameTeamsToJSON,
  MLBGameToJSON,
  MLBLeagueDatesFromJSON,
  MLBLeagueDatesFromJSONTyped,
  MLBLeagueDatesToJSON,
  MLBLeagueFromJSON,
  MLBLeagueFromJSONTyped,
  MLBLeagueRecordFromJSON,
  MLBLeagueRecordFromJSONTyped,
  MLBLeagueRecordToJSON,
  MLBLeagueToJSON,
  MLBRecordFromJSON,
  MLBRecordFromJSONTyped,
  MLBRecordToJSON,
  MLBScheduleDayFromJSON,
  MLBScheduleDayFromJSONTyped,
  MLBScheduleDayToJSON,
  MLBScheduleFromJSON,
  MLBScheduleFromJSONTyped,
  MLBScheduleToJSON,
  MLBSeasonFromJSON,
  MLBSeasonFromJSONTyped,
  MLBSeasonToJSON,
  MLBSeasonsFromJSON,
  MLBSeasonsFromJSONTyped,
  MLBSeasonsToJSON,
  MLBSportFromJSON,
  MLBSportFromJSONTyped,
  MLBSportToJSON,
  MLBStandingsFromJSON,
  MLBStandingsFromJSONTyped,
  MLBStandingsListFromJSON,
  MLBStandingsListFromJSONTyped,
  MLBStandingsListToJSON,
  MLBStandingsToJSON,
  MLBStreakFromJSON,
  MLBStreakFromJSONTyped,
  MLBStreakStreakTypeEnum,
  MLBStreakToJSON,
  MLBTeamFromJSON,
  MLBTeamFromJSONTyped,
  MLBTeamToJSON,
  MLBTeamsFromJSON,
  MLBTeamsFromJSONTyped,
  MLBTeamsToJSON,
  MLBVenueFromJSON,
  MLBVenueFromJSONTyped,
  MLBVenueToJSON,
  MlbApi,
  RequiredError,
  ResponseError,
  TextApiResponse,
  VoidApiResponse,
  canConsumeForm,
  instanceOfMLBDivision,
  instanceOfMLBGame,
  instanceOfMLBGameStatus,
  instanceOfMLBGameTeam,
  instanceOfMLBGameTeams,
  instanceOfMLBLeague,
  instanceOfMLBLeagueDates,
  instanceOfMLBLeagueRecord,
  instanceOfMLBRecord,
  instanceOfMLBSchedule,
  instanceOfMLBScheduleDay,
  instanceOfMLBSeason,
  instanceOfMLBSeasons,
  instanceOfMLBSport,
  instanceOfMLBStandings,
  instanceOfMLBStandingsList,
  instanceOfMLBStreak,
  instanceOfMLBTeam,
  instanceOfMLBTeams,
  instanceOfMLBVenue,
  mapValues,
  querystring
});
