const faker = require('faker');
const App = require('./App.js');
const db = require('./index.js');

var fakeData = [];

for (var i = 1; i <= 100; i++) {
  fakeData.push({
    _id: i,
    appName: faker.random.word(),
    appLogo: faker.image.imageUrl(),
    company: faker.company.companyName(),
    appRating: (Math.random() * (5 - 1) + 1).toFixed(2),
    appDescription: faker.lorem.sentence()
  });
}

const insertFakeData = function() {
  App.create(fakeData)
    .then(() => db.disconnect());
};

insertFakeData();