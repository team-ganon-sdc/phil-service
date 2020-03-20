const faker = require('faker');
const App = require('./App.js');
const db = require('./index.js');

var fakeData = [];

for (var i = 1; i <= 100; i++) {
  fakeData.push({
    _id: i,
    name: faker.random.word(),
    logo: faker.image.imageUrl(),
    company: faker.company.companyName(),
    rating: (Math.random() * (5 - 1) + 1).toFixed(2),
    description: faker.lorem.sentence()
  });
}

const insertFakeData = function() {
  App.create(fakeData);
};

insertFakeData();