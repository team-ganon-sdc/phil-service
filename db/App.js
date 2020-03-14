const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

const appSchema = new Schema({
  id: Number,
  appName: String,
  appLogo: String,
  company: String,
  appRating: Number,
  appDescription: String
});

const App = mongoose.model('App', appSchema);

module.exports = App;