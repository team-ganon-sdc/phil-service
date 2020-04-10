const faker = require('faker');

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}
let ids = [1, 1000, 9999123, 9999500, 9999511, 9999995, 9999900, 9999938, 9999941, 9999977, 9999921, 9999932, 9999925];

const post = (userContext, events, done) => {
  let id = ids[Math.floor(Math.random() * 13)];
  let whichPhoto = Math.floor(Math.random() * 100);
  const appid = id;
  const relatedappid = `{${id + 1},${id + 2},${id + 3},${id + 4},${id + 5}}`;
  const name = faker.random.word();
  const logo = photoUrls[whichPhoto];
  const company = faker.company.companyName();
  const rating = Math.floor(5 * Math.random());
  const description = faker.lorem.sentence();

  userContext.vars.appid = appid;
  userContext.vars.relatedappid = relatedappid;
  userContext.vars.name = name;
  userContext.vars.logo = logo;
  userContext.vars.company = company;
  userContext.vars.rating = rating;
  userContext.vars.description = description;

  return done();
};

const get = (userContext, events, done) => {
  let id = ids[Math.floor(Math.random() * 13)];
  userContext.vars.id = id;
  return done();
};

module.exports.get = get;
module.exports.post = post;
