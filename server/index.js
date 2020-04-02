const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');
const port = 3001;
//const App = require('../db/App.js');

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


// app.get('/', (req, res) => res.send('Hello World!'));

// // app.get('/api/apps', (req, res) => {
// //   App.find({}, (err, apps) => {
// //     if (err) {
// //       console.log('hey  there was an error');
// //     }
// //     res.send(apps);
// //   }).limit(5);
// // });

// app.get('/api/apps/:id', (req, res) => {
//   App.find({_id: req.params.id})
//     .then(result => res.json(result))
//     .catch(e => res.json('Could not find'));
// });

app.post('/api/apps', (req, res) => {
  // let newApp = new App({
  //   _id: req.body._id,
  //   relatedAppId: req.body.relatedAppId,
  //   name: req.body.name,
  //   logo: req.body.logo,
  //   company: req.body.company,
  //   rating: req.body.rating,
  //   description: req.body.description
  // });
  // eslint-disable-next-line quotes
  let query = `INSERT INTO allApps(appid, relatedappid, name, logo, company, rating,   description) VALUES(1, '{2,3}', 'phil', 'logo!', 'phils company', 10, 'this is the description')`;
  pool.query(query)
  .then(() => console.log('inserted'))
  .catch(e => console.log(e))
});



// app.put('/api/apps/:id', (req, res) => {
//   App.findOneAndUpdate({_id: req.params.id}, req.body)
//     .then(result => res.json(result))
//     .catch(e => res.json(e));
// });

// app.delete('/api/apps/:id', (req, res) => {
//   App.findByIdAndDelete(req.params.id)
//     .then(result => res.json(result))
//     .catch(e => res.json('There was an error'));
// });


app.listen(port, () => console.log(`Similar Component listening on port ${port}!`));