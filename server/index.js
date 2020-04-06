require('newrelic');

const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const pool = new Pool({
  user: 'avarousu',
  host: 'localhost',
  database: 'app',
  password: '',
  port: 5432,
});

pool.connect()
  .then(() => console.log('postgres connected at 5432'))
  .catch(e => console.log('postgres connection error'));


app.get('/api/apps/:id', (req, res) => {
  // eslint-disable-next-line quotes
  let query = `select appid, name, logo, company, rating, description from allapps WHERE appid = (select relatedappid[1] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[2] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[3] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[4] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[5] from allapps where appid = ${req.params.id})`;
  pool.query(query)
    .then(results => res.json(results.rows))
    .catch(e => res.json(e));
});

app.post('/api/apps/:id', (req, res) => {
  let query = `INSERT INTO allApps (appid, relatedappid, name, logo, company, rating,   description) VALUES (${req.params.id}, '${req.body.relatedappid}', '${req.body.name}', '${req.body.logo}', '${req.body.company}', ${req.body.rating}, '${req.body.description}')`;
  pool.query(query)
    .then(result => res.json('1 row inserted'))
    .catch(e => res.json(e));
});

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));

// INSERT INTO allApps(appid, relatedappid, name, logo, company, rating, description) VALUES(10000001, '{ 1, 2, 3, 4, 5 }', 'phil', 'logo', 'company', 5, 'descriptonadf')