/* eslint-disable func-style */
const faker = require('faker');
const fs = require('fs');

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}

const writeApps = fs.createWriteStream('data.csv');
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




















// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const fs = require('fs')



// let name = ['app', 'superApp', 'coolApp', 'veryCoolApp', 'bestApp', 'awesomeApp', 'amazingApp', 'crazyApp', 'uselessApp', 'okApp'];
// let company = ['appCompany', 'superCompany', 'coolCompany', 'veryCoolCompany', 'bestCompany', 'awesomeCompany', 'amazingCompany', 'crazyCompany', 'uselessCompany', 'okCompany'];
// let randomWords = ['totally', 'random', 'data', 'well', 'not', 'that', 'random', 'actually'];


// const seed = (start, end) => {
//   const rows = [];
//   for (let i = start; i <= end; i++) {
//     let whichPhoto = Math.floor(Math.random() * 100);
//     let whichName = Math.floor(Math.random() * 10);
//     rows.push({
//       appid: i,
//       relatedappid: `{${i + 1}, ${i + 2}, ${i + 3}, ${i + 4}, ${i + 5}}`,
//       name: name[whichName],
//       logo: photoUrls[whichPhoto],
//       company: company[whichName],
//       rating: `${Math.floor(5 * Math.random())}`,
//       description: `This is the totally random description`});
//   }
//   return rows;
// };

// const csvWriter = createCsvWriter({
//   path: `./postgresDB/data.csv`,
//   header: [
//     {id: 'appid', title: 'appid'},
//     {id: 'relatedappid', title: 'relatedappid'},
//     {id: 'name', title: 'name'},
//     {id: 'logo', title: 'logo'},
//     {id: 'company', title: 'company'},
//     {id: 'rating', title: 'rating'},
//     {id: 'description', title: 'description'}
//   ]
// });

// let a = seed(1, 500000, 1);
// csvWriter.writeRecords(a)
//   .then(() => {
//     console.log(`Done with a`);
//   });
// let b = seed(500001, 1000000, 2);
// csvWriter.writeRecords(b)
//   .then(() => {
//     console.log(`Done with b`);
//   });
// let c = seed(1000001, 1500000, 3);
// csvWriter.writeRecords(c)
//   .then(() => {
//     console.log(`Done with c`);
//   });
// let d = seed(1500001, 2000000, 4);
// csvWriter.writeRecords(d)
//   .then(() => {
//     console.log(`Done with d`);
//   });
// let e = seed(2000001, 2500000, 5);
// csvWriter.writeRecords(e)
//   .then(() => {
//     console.log(`Done with e`);
//   });
// let f = seed(2500001, 3000000, 6);
// csvWriter.writeRecords(f)
//   .then(() => {
//     console.log(`Done with f`);
//   });
// let g = seed(3000001, 3500000, 7);
// csvWriter.writeRecords(g)
//   .then(() => {
//     console.log(`Done with g`);
//   });
// let h = seed(3500001, 4000000, 8);
// csvWriter.writeRecords(h)
//   .then(() => {
//     console.log(`Done with h`);
//   });
// let i = seed(4000001, 4500000, 9);
// csvWriter.writeRecords(i)
//   .then(() => {
//     console.log(`Done with i`);
//   });
// let j = seed(4500001, 5000000, 10);
// csvWriter.writeRecords(j)
//   .then(() => {
//     console.log(`Done with j`);
//   });
// let k = seed(5000001, 5500000, 11);
// csvWriter.writeRecords(k)
//   .then(() => {
//     console.log(`Done with k`);
//   });
// let l = seed(5500001, 6000000, 12);
// csvWriter.writeRecords(l)
//   .then(() => {
//     console.log(`Done with l`);
//   });
// let m = seed(6000001, 6500000, 13);
// csvWriter.writeRecords(m)
//   .then(() => {
//     console.log(`Done with m`);
//   });
// let n = seed(6500001, 7000000, 14);
// csvWriter.writeRecords(n)
//   .then(() => {
//     console.log(`Done with n`);
//   });
// let o = seed(7000001, 7500000, 15);
// csvWriter.writeRecords(o)
//   .then(() => {
//     console.log(`Done with o`);
//   });
// let p = seed(7500001, 8000000, 16);
// csvWriter.writeRecords(p)
//   .then(() => {
//     console.log(`Done with p`);
//   });
// let q = seed(8000001, 8500000, 17);
// csvWriter.writeRecords(q)
//   .then(() => {
//     console.log(`Done with q`);
//   });
// let r = seed(8500001, 9000000, 18);
// csvWriter.writeRecords(r)
//   .then(() => {
//     console.log(`Done with r`);
//   });
// let s = seed(9000001, 9500000, 19);
// csvWriter.writeRecords(s)
//   .then(() => {
//     console.log(`Done with s`);
//   });
// let t = seed(9500001, 10000000, 20);
// csvWriter.writeRecords(t)
//   .then(() => {
//     console.log(`Done with t`);
//   });



