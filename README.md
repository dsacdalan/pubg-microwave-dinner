# Microwave Dinner
This is a simple wrapper for the PUBG API v1.0.
All objects have have been defined so your IDE can show that yummy autocomplete.

## Quick Start

Install :

`npm i pubg-microwave-dinner --save`

Initialize:

```javascript
const microwaveDinner = require('pubg-microwave-dinner');
const client = new microwaveDinner.Client('YOUR-API-TOKEN', 'pc-na');

var args = {
  playerId: 'account.123'
}

client.getSinglePlayer(args, (err, player) => {
  console.log(player.attributes.name);
});
```

## Reference
### Client()
Creates a Microwave Dinner application.
```javascript 
const microwaveDinner = require('pubg-microwave-dinner');
const client = new microwaveDinner.Client('YOUR-API-TOKEN', 'pc-na');
```

#### Client(key, [platformRegion])
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
  
### Methods

#### client.getSinglePlayer(args, done)
Gets a single player.

```javascript
var args = {
  playerId = 'account.1234',
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
* **err**: If call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **player**: If call was successful, a Player object will be returned.

#### client.getPlayers(args, done)
Gets a list of players.
```javascript
var args = {
  playerIds = ['account.1234', 'account.4567'],
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
* **err**: If call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **players**: If call was successful, a Player array will be returned.

#### client.getMatch(args, done)
Gets a match.
```javascript
var args = {
  matchId = 'd1b1b6e7-b93f-454a-bd81-dca8f46a6068',
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
* **err**: If call was unsuccessful, an Error object will be returned. If it was successful, it will return null.
* **match**: If call was successful, a Match object will be returned.

### Objects
Microwave dinner includes classes for all API objects:

#### Player
Player objects contain aggregated lifetime information about each player.

* type - player
* id - Player ID
* attributes (PlayerAttributes)
  * name - Player name
  * shardId - Platform-region shard
  * stats - N/A (currently not used)
  * createdAt
  * patchVersion - Version of teh game
  * titleId - Identifies the studio and the game
* relationships (PlayerRelationships) - References to resource objects related to this player
  * assets - N/A (currently not used)
  * matches 
    * data - A list of match ids
      * id - The ID of the match
      * type - Identifier for this object type ("match")
* links
  * schema - N/A (currently not used)
  * self - Link to this object

#### Match
Match objects contain the results of a completed match such as the game mode played, duration, and which players participated.

* type - match
* id - Match ID
* attributes
  * createdAt - Time of match completion
  * duration - Lenght of the match
  * gameMode - Game mode played (duo, duo-fpp, solo, solo-fpp, squad, squad-fpp)
  * patchVersion - N/A (currently not used)
  * shardId - Platform-region shard
  * stats - N/A (currently not used)
  * tags - Searchable tags
  * titleId - Identifies the studio and game
