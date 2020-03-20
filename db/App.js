const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

const appSchema = new Schema({
  _id: Number,
  name: String,
  logo: String,
  company: String,
  rating: Number,
  description: String
});

const App = mongoose.model('App', appSchema);

module.exports = App;