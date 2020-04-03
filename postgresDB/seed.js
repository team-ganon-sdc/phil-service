/* eslint-disable func-style */
const faker = require('faker');
const fs = require('fs');

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}

const writeApps = fs.createWriteStream('postgresData.csv');
writeApps.write('appid,relatedappid,name,logo,company,rating,description\n', 'utf8');

function seed(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      let whichPhoto = Math.floor(Math.random() * 100);
      i -= 1;
      id += 1;
      const appid = id;
      const relatedappid = `{${id + 1},${id + 2},${id + 3},${id + 4},${id + 5}}`;
      const name = faker.random.word();
      const logo = photoUrls[whichPhoto];
      const company = faker.company.companyName();
      const rating = `${Math.floor(5 * Math.random())}`;
      const description = faker.lorem.sentence();
      const data = `${appid}|${relatedappid}|${name}|${logo}|${company}|${rating}|${description}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

seed(writeApps, 'utf-8', () => {
  writeApps.end();
});

// COPY allapps (appid, relatedappid, name, logo, company, rating, description) FROM '/Users/avarousu/Desktop/Galvanize/similar-component/postgresData.csv' CSV HEADER DELIMITER '|';