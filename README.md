# Microwave Dinner

This is a simple wrapper for the PUBG API v1.0.
All objects have have been defined so your IDE can show that yummy autocomplete.

* [Reference](#reference)
  * [Client](#client())
  * [Client Methods](#methods)
* [Classes](#classes)
  * [Player](#player)
  * [Match](#match)
  * [Roster](#roster)
  * [Participant](#participant)
  * [Asset](#asset)
  * [Season](#season)
  * [Player Season](#player-season)
  * [Status](#status)
  * [Shared Objects](#shared-objects)

Install:
`npm i pubg-microwave-dinner`

Initialize:

```javascript
const microwaveDinner = require('pubg-microwave-dinner');
const client = new microwaveDinner.client('YOUR-API-TOKEN', 'pc-na');

var args = {
  playerId: 'account.6ea21c9dcec447f3ab57c829a129394c'
}

client.getSinglePlayer(args, (err, player) => {
  console.log(player.attributes.name);
});
```

# Reference

## client()

Creates a Microwave Dinner application.

```javascript
const microwaveDinner = require('pubg-microwave-dinner');
const client = new microwaveDinner.client('YOUR-API-TOKEN', 'pc-na');
```

### client(key, [platformRegion])

This is how to initialize the Microwave Dinner client.

* **key {string}**: Your application key from the Offical PUBG API. If you do not have a key yet, [register](https://developer.playbattlegrounds.com/) to get yours today.
* **platformRegion {string}**: One of the current PUBG platform regions. If a value is not provided the applicaiton will default to pc-na. The following are the current Platform Regions:
  * Xbox
    * xbox-as
    * xbox-eu
    * xbox-na
    * xbox-oc
  * PC
    * pc-krjp
    * pc-na
    * pc-eu
    * pc-oc
    * pc-kakao
    * pc-sea
    * pc-sa
    * pc-as

## Methods

### client.getSinglePlayer(args, done)

Gets a single [player](#player).

```javascript
var args = {
  playerId = 'account.6ea21c9dcec447f3ab57c829a129394c',
  platformRegion = 'pc-na'
};

client.getSinglePlayer(args, (err, player) => {
  if(!err) {
    console.log(player.attributes.name);
  }
});
```

#### args {playerId, [platformRegion]}

* **playerId {string}**: The player id; format is: "account.1234"
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

#### done(err, player)

* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **player**: If the call was successful, a Player object will be returned.

### client.getPlayers(args, done)

Gets a list of [players](#player).

```javascript
var args = {
  playerIds = ['account.6ea21c9dcec447f3ab57c829a129394c'
              ,'account.b57c829a129394c6ea21c9dcec447f3a'],
  platformRegion = 'pc-na'
};

client.getPlayers(args, (err, players) => {
  if(!err) {
    console.log(players[0].attributes.name);
  }
});
```

#### args {[playerIds], [playerNames] [platformRegion]}

* **playerIds {string[]}**: The player ids; format is: "account.1234".
* **playerNames {string[]}**: The player names.
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

#### done(err, players)

* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **players**: If the call was successful, a Player array will be returned.

### client.getMatch(args, done)

Gets a [match](#match).

```javascript
var args = {
  matchId = '2cd71251-2a67-41f2-8cd3-f880e45f14ef',
  platformRegion = 'pc-na'
};

client.getMatch(args, (err, match) => {
  if(!err) {
    console.log(match.data.attributes.duration);
  }
});
```

#### args {matchId, [platformRegion]}

* **matchId**: The match id; format is a GUID.
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

#### done(err, match)

* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **match**: If the call was successful, a Match object will be returned.

### client.getSeasons([platformRegion], done)

Gets a list of available [seasons](#season).

```javascript
client.getSeasons('pc-na', (err, seasons) => {
  if(!err) {
    console.log(seasons[0].attributes.isCurrentSeason)
  }
});
```

#### platformRegion

* **string**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

#### done(err, seasons)

* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **seasons**: If the call was successful, a Season array will be returned.

### client.getStatus(done)

Gets the status of the API.

```javascript
client.getStatus((err, status) => {
  if(!err) {
    console.log(status.attributes.version);
  }
});
```

#### done(err, status)

* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **status**: If the call was successful, a Status object will be returned.

# Classes

Microwave dinner includes classes for all API objects:

## Player

Player objects contain aggregated lifetime information about each player.

* **type** (string) - Identifier for this object type ("player")
* **id** (string) - Player ID
* **attributes** (PlayerAttributes)
  * **name** (string) - Player name
  * **shardId** (string) - Platform-region shard
  * **stats** - N/A (currently not used)
  * **createdAt** (string($dateTime))
  * **patchVersion** (string) - Version of the game
  * **titleId** (string) - Identifies the studio and the game
* **relationships** (PlayerRelationships) - References to resource objects related to this player
  * **assets** - N/A (currently not used)
  * **matches**
    * **data** - A list of match ids
      * **type** (string) - Identifier for this object type ("match")
      * **id** (string)  - The ID of the match
* **links**
  * **schema** (string) - N/A (currently not used)
  * **self** (string) - Link to this object

## Match

Match objects contain the results of a completed match such as the game mode played, duration, and which players participated.

* **type** (string) - Identifier for this object type("match")
* **id** (string) - Match ID
* **data** (MatchData)
  * **attributes** (MatchAttributes)
    * **createdAt** (string$(dateTime)) - Time of match completion
    * **duration** (integer) - Length of the match
    * **gameMode** (string enum) - Game mode played: [duo, duo-fpp, solo, solo-fpp, squad, squad-fpp]
    * **mapName** (string enum) - Map name: [Desert_Main, Erangel_Main]
    * **patchVersion** (string) - N/A (currently not used)
    * **shardId** (string) - Platform-region shard
    * **stats** - N/A (currently not used)
    * **tags** - N/A (currently not used)
    * **titleId** (string) - Identifies the studio and game
  * **relationships** (MatchRelationships)
    * **assets** (string) - A list of Asset IDs
      * **type** (string) - Identifier for this object type ("asset")
      * **id** (string) - The ID of the asset
    * **roster** - A list of Roster IDs
      * **type** (string) - Identifier for this object type ("roster")
      * **id** (string) - The ID of the roster
    * **rounds** - N/A (currently not used)
    * **spectators** - N/A (currently not used)
  * **links**
    * **schmea** (string) - N/A (currently not used)
    * **self** (string) - Link to this object
* **included** (array[Roster|Participant|Asset]) - An array of [Roster](#roster), [Participant](#participant) and [Asset](#asset) objects.
* **links**
  * **schmea** (string) - N/A (currently not used)
  * **self** (string) - Link to this object

## Roster

Rosters track the scores of each opposing group of participants. Rosters can have one or many participants depending on the game mode. Roster objects are only meaningful within the context of a match and are not exposed as a standalone resource.

* **id** (string) - Roster ID
* **attributes** (RosterAttributes)
  * **shardId** (string) - Platform-region Shard
  * **stats** (RosterAttributeStats) - Stats particular to rosters
    * **rank** (integer, min: 1, max: 100) - This roster's placement in the match
    * **teamId** (integer)
  * **won** (string) - Indicates if this roster won the match
* **relationships** (RosterRelationships) - An array of references to participant objects that can be found in the included array
  * **participants**
    * **data** - A list of participant IDs
      * **type** (string) - Identifier for this object type ("participant")
      * **id** (string) - The ID of the participant
  * **team** - N/A (currently not used)

## Participant

Participant objects represent each player in the context of a match. Participant objects are only meaningful within the context of a match and are not exposed as a standalone resource.

* **type** (string) - Identifier for this object type ("participant")
* **id** (string)  - Participant ID
* **attributes** (ParticipantAttributes)
  * **actor** (string) - N/A (currently not used)
  * **shardId** (string) - Platform-region shard
  * **stats** (ParticipantStats) - Participant stats in the context of a match
    * **DBNOs** (integer, Min: 0)- Number of times this particpant was downed
    * **assists** (integer, Min: 0)
    * **boosts** (integer, Min: 0)- Toatl number of boost items used
    * **damageDealt** (number, Min: 0)
    * **deathType** (string enum) - [alive, byplayer, suicide]
    * **headshotKills** (integer, Min: 0)
    * **heals** (integer, Min: 0) - Number of healing itmes used
    * **killPlace** (integer, Min: 1, Max: 100)
    * **killPoints** (integer, Min: 0)
    * **killPointsDelta** (number) - Change in kill points
    * **killStreaks** (integer, Min: 0) - Total number of kill streaks
    * **kills** (integer, Min: 0, Max: 99)
    * **lastKillPoints** (integer, Min: 0)
    * **lastWinPoints** (integer, Min: 0)
    * **longestKill** (number, Min: 0)
    * **mostDamage** (number, Min: 0) - Highest amount of damage dealt with a single attack
    * **name** (string) - Username of the player associated with this participant
    * **playerId** (string) - Account ID of the player associated with this participant
    * **revives** (integer, Min: 0) - Number of times this participant revived others
    * **rideDistance** (number, Min: 0) - Total distance traveled in vehicles
    * **roadKills** (integer, Min: 0) - Number of kills while in a vehicle
    * **teamKills** (integer, Min: 0)
    * **timeSurvived** (number, Min: 0)
    * **vehicleDestroys** (integer, Min: 0)
    * **walkDistance** (number, Min: 0)
    * **weaponsAcquired** (integer, Min: 0) - Total number of weapons picked up
    * **winPlace** (integer, Min: 1, Max: 100)
    * **winPoitns** (integer, Min: 0)
    * **winPoitnsDelta** (number) - Change in winpoints

## Asset

Asset objects contain a URL string that links to a telemetry.json file, which will contain an array of event objects that provide further insight into a match.

* **type** (string) - Identifier for this object type ("asset")
* **id** (string) - The ID of the asset
* **attributes**  (AssetAttrbiutes)
  * **URL** (string) - Link to the telemetry.json file
  * **createdAt** (string$(dateTime)) - Time of telemetry creation
  * **description** (string) - N/A (currently not used)
  * **name** (string) - "Telemetry"

## Season

Season objects each contain the ID of a season, which can be used to lookup season information for a player.

* **type** (string) - Identifier for this object type ("season")
* **id** (string) - The ID of the season
* **attributes**
  * **isCurrentSeason** (boolean) - Indicates if the season is active
  * **isOffseason** (boolean) - Indicates if the season is not active

## Player Season

Player Season objects contain the season information for a single player.

* **type** (string) - Identifier for this object type ("playerSeason")
* **attributes** (PlayerSeasonAttributes)
  * **gameModeStats** (GameModeStats) - See [GameModeStat](#Game-Mode-Stat) for more details.
    * **duo** (GameModeStat)
    * **duo_fpp** (GameModeStat)
    * **solo** (GameModeStat)
    * **solo_fpp** (GameModeStat)
    * **squad** (GameModeStat)
    * **squad_fpp** (GameModeStat)
* **relationships** (PlayerAttributes) - See [Reference Object](#reference-object) for more details.
  * **player** (Reference)
  * **matchesSolo** (Reference)
  * **matchesSoloFPP** (Reference)
  * **matchesDuo** (Reference)
  * **matchesDuoFPP** (Reference)
  * **matchesSquad** (Reference)
  * **matchesSquadFPP** (Reference)
  * **season** (Reference)
* **links**
  * **self** (string)
* **meta** (object)

### Game Mode Stat

Game Mode stats objects contain a player's aggregated stats for a game mode in the context of a season.

* **assists** (integer)
* **boosts** (integer)
* **dBONs** (integer)
* **dailyKills** (integer)
* **damageDealt** (number)
* **days** (integer)
* **headshotKills** (integer)
* **heals** (integer)
* **killPoints** (number)
* **kills** (integer)
* **longestKill** (number)
* **longestTimeSurvived** (number)
* **losses** (integer)
* **maxKillStreaks** (integer)
* **mostSurvivalTime** (number)
* **revives** (integer)
* **rideDistance** (number)
* **roadKills** (integer)
* **roundMostKills** (integer)
* **roundsPlayed** (integer)
* **suicides** (integer)
* **teamKills** (integer)
* **timeSurvived** (number)
* **top10s** (integer)
* **vehicleDestroys** (integer)
* **walkDistance** (number)
* **weaponsAcquired** (integer)
* **weeklyKills** (integer)
* **winPoints** (number)
* **wins** (integer)

## Status

* **id** (string)
* **attributes**
  * **releasedAt** (string)
  * **version** (string)


## Shared Objects

### Reference Object

* **type** (string)
* **id** (string)

### Link

* **schema** (string) - N/A Currently not in use
* **self** (string) - Link to this object