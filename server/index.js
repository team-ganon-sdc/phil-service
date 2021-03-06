require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');
var cors = require('cors');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

const pool = new Pool({
  user: 'postgres',
  host: '34.209.180.241',
  database: 'app',
  password: 'password',
  port: 5432,
});

pool.connect()
  .then(() => console.log('postgres connected at 5432'))
  .catch(e => console.log(e));


app.get('/loaderio-c3e9fbd9398f147ba05ed31c31556263.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-c3e9fbd9398f147ba05ed31c31556263.txt'));
});

app.get('/api/apps/:id', (req, res) => {
  // eslint-disable-next-line quotes
  let query = `select appid, name, logo, company, rating, description from allapps WHERE appid = (select relatedappid[1] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[2] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[3] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[4] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[5] from allapps where appid = ${req.params.id})`;
  pool.query(query)
    .then(results => res.json(results.rows))
    .catch(e => res.json(e));
});

app.post('/api/apps', (req, res) => {
  let query = `INSERT INTO allApps (appid, relatedappid, name, logo, company, rating,   description) VALUES (${req.body.appid}, '${req.body.relatedappid}', '${req.body.name}', '${req.body.logo}', '${req.body.company}', ${req.body.rating}, '${req.body.description}')`;
  pool.query(query)
    .then(result => res.json({responnse: '1 row inserted'}))
    .catch(e => res.json(e));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));

