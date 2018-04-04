# Microwave Dinner
This is a simple wrapper for the PUBG API.

The only method currently supported is getting a single player.

## Quick Start

Install :

`npm install pubg-microwave-dinner --save`

Initialize:

```javascript
const microwaveDinner = require('pubg-microwave-dinner');
microwaveDinner.setToken('YOUR-API-TOKEN');

microwaveDinner.getSinglePlayer('pc-na', 'account.1234', (err, player) => {
  console.log(player.attributes.name);
}
```
