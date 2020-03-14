const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/fecDB');

module.exports = db;