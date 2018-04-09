# Microwave Dinner
This is a simple wrapper for the PUBG API.

Currently, the wrapper supports both player enpoints.

## Quick Start

Install :

`npm install pubg-microwave-dinner --save`

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