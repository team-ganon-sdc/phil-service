/* eslint-disable func-style */
const faker = require('faker');
const fs = require('fs');

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}

const writeApps = fs.createWriteStream('cassandraRelated.csv');
writeApps.write('id,appid,relatedapp\n', 'utf8');

function seed(writer, encoding, callback) {
  let i = 2;
  let ids = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      ids += 1;
      const id = ids;
      const appid = ids;
      const relatedapp = ids + 1;
      const id1 = ids;
      const appid1 = ids;
      const relatedapp1 = ids + 2;
      const id2 = ids;
      const appid2 = ids;
      const relatedapp2 = ids + 3;
      const id3 = ids;
      const appid3 = ids;
      const relatedapp3 = ids + 4;
      const id4 = ids;
      const appid4 = ids;
      const relatedapp4 = ids + 5;
      const id5 = ids;
      const appid5 = ids;
      const relatedapp5 = ids + 6;
      const data = `${id}|${appid}|${relatedapp}\n${id1}|${appid1}|${relatedapp1}\n${id2}|${appid2}|${relatedapp2}\n${id3}|${appid3}|${relatedapp3}\n${id4}|${appid4}|${relatedapp4}\n${id5}|${appid5}|${relatedapp5}\n`;
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

// COPY similar FROM '/Users/avarousu/Desktop/Galvanize/similar-component/cassandraRelated.csv' WITH DELIMITER ='|' AND HEADER = TRUE;