const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/similarApps', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;