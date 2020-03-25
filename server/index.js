const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const App = require('../db/App.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/apps', (req, res) => {
  App.find({}, (err, apps) => {
    if (err) {
      console.log('hey there was an error');
    }
    res.send(apps);
  }).limit(5);
});

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));