const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}

let name = ['app', 'superApp', 'coolApp', 'veryCoolApp', 'bestApp', 'awesomeApp', 'amazingApp', 'crazyApp', 'uselessApp', 'okApp'];
let company = ['appCompany', 'superCompany', 'coolCompany', 'veryCoolCompany', 'bestCompany', 'awesomeCompany', 'amazingCompany', 'crazyCompany', 'uselessCompany', 'okCompany'];
let randomWords = ['totally', 'random', 'data', 'well', 'not', 'that', 'random', 'actually'];


const seed = (start, end, fileName) => {

  const csvWriter = createCsvWriter({
    path: `./postgresDB/${fileName}.csv`,
    header: [
      {id: 'appid', title: 'appid'},
      {id: 'relatedappid', title: 'relatedappid'},
      {id: 'name', title: 'name'},
      {id: 'logo', title: 'logo'},
      {id: 'company', title: 'company'},
      {id: 'rating', title: 'rating'},
      {id: 'description', title: 'description'}
    ]
  });

  const rows = [];

  for (let i = start; i <= end; i++) {
    let whichPhoto = Math.floor(Math.random() * 100);
    let whichName = Math.floor(Math.random() * 10);
    rows.push({
      appid: i,
      relatedappid: `{${i + 1}, ${i + 2}, ${i + 3}, ${i + 4}, ${i + 5}}`,
      name: name[whichName],
      logo: photoUrls[whichPhoto],
      company: company[whichName],
      rating: `${Math.floor(5 * Math.random())}`,
      description: `This is the totally random description`});
  }

  csvWriter.writeRecords(rows)
    .then(() => {
      console.log(`Done with ${start} to ${end}`);
    });
};

seed(1, 500000, 1);
 seed(500001, 1000000, 2);
seed(1000001, 1500000, 3);
seed(1500001, 2000000, 4);
seed(2000001, 2500000, 5);
seed(2500001, 3000000, 6);
seed(3000001, 3500000, 7);
seed(3500001, 4000000, 8);
seed(4000001, 4500000, 9);
seed(4500001, 5000000, 10);
seed(5000001, 5500000, 11);
seed(5500001, 6000000, 12);
seed(6000001, 6500000, 13);
seed(6500001, 7000000, 14);
seed(7000001, 7500000, 15);
seed(7500001, 8000000, 16);
seed(8000001, 8500000, 17);
seed(8500001, 9000000, 18);
seed(9000001, 9500000, 19);
seed(9500001, 10000000, 20);