const express = require('express');
const path = require('path');
const nomeApp = 'DogWalkerFront';
const app = express();
 
app.use(express.static('./dist/' + nomeApp));

app.get('/*', (_req, res) => {
res.sendFile(path.join(__dirname, '/dist/' + nomeApp + '/index.html'));
});
 
app.listen(process.env.PORT || 8080);