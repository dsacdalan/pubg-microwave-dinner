# Microwave Dinner
This is a simple wrapper for the PUBG API v1.0.
All objects have have been defined so your IDE can show that yummy autocomplete.

* [Quick Start](#quick-start)
* [Reference](#reference)
  * [Client](#client())
  * [Client Methods](#methods)
* [Classes](#classes)
  * [Player](#player)
  * [Match](#match)
## Quick Start

Install :

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
Gets a single player.

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

*args {playerId, [platformRegion]}*
* **playerId {string}**: The player id; format is: "account.1234"
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

*done(err, player)*
* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **player**: If the call was successful, a Player object will be returned.

### client.getPlayers(args, done)
Gets a list of players.
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
*args {[playerIds], [playerNames] [platformRegion]}*
* **playerIds {string[]}**: The player ids; format is: "account.1234".
* **playerNames {string[]}**: The player names.
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

*done(err, players)*
* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **players**: If the call was successful, a Player array will be returned.

### client.getMatch(args, done)
Gets a match.
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

*args {matchId, [platformRegion]}*
* **matchId**: The match id; format is a GUID.
* **platformRegion {string}**: One of the current PUBG platform regions. Will default to the application's default if none is provided.

*done(err, match)*
* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **match**: If the call was successful, a Match object will be returned.

### client.getStatus(done)
Gets the status of the API. 
```javascript
client.getStatus((err, status) => {
  if(!err) {
    console.log(status.attributes.version);
  } 
});
```

*done(err, status)*
* **err**: If the call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **status**: If the call was successful, a Status object will be returned.

# Classes
Microwave dinner includes classes for all API objects:

## Player
Player objects contain aggregated lifetime information about each player.

* **type** - Identifier for this object type ("player")
* **id** - Player ID
* **attributes** (PlayerAttributes)
  * **name** - Player name
  * **shardId** - Platform-region shard
  * **stats** - N/A (currently not used)
  * **createdAt**
  * **patchVersion** - Version of the game
  * **titleId** - Identifies the studio and the game
* **relationships** (PlayerRelationships) - References to resource objects related to this player
  * **assets** - N/A (currently not used)
  * **matches** 
    * **data** - A list of match ids
      * **type** - Identifier for this object type ("match")    
      * **id** - The ID of the match
* **links**
  * **schema** - N/A (currently not used)
  * **self** - Link to this object

## Match
Match objects contain the results of a completed match such as the game mode played, duration, and which players participated.

* **type** - match
* **id** - Match ID
* **data** (MatchData)
  * **attributes** (MatchAttributes)
    * **createdAt** - Time of match completion
    * **duration** - Length of the match
    * **gameMode** - Game mode played (duo, duo-fpp, solo, solo-fpp, squad, squad-fpp)
    * **patchVersion** - N/A (currently not used)
    * **shardId** - Platform-region shard
    * **stats** - N/A (currently not used)
    * **tags** - Searchable tags
    * **titleId** - Identifies the studio and game
  * **relationships** (MatchRelationships)
    * **assets** - A list of Asset IDs
      * **type** - Identifier for this object type ("asset")
      * **id** - The ID of the asset
    * **roster** - A list of Roster IDs
      * **type** - Identifier for this object type ("roster")
      * **id** - The ID of the roster
    * **rounds** - N/A (currently not used)
    * **spectators** - N/A (currently not used)
  * **links**
    * **schmea**
    * **self**
* **included** - A list of [Roster](#roster), [Participant](#participant) or [Asset](#asset) objects.
* **links**

## Roster

## Participant

## Asset