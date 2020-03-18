const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const App = require('../db/App.js');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/apps', (req, res) => {
  App.find({id: 1}, (err, apps) => {
    if (err) {
      console.log('hey there was an error');
    }
    res.send(apps);
  });
});

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));