const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let photoUrls = [];
for (let i = 1; i <= 100; i++ ) {
  photoUrls.push(`https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/${i}.jpeg`);
}

for (let z = 1; z <= 10; z++) {

  const csvWriter = createCsvWriter({
    path: `./postgresDB/${z}.csv`,
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

  let start;
  let end;
  if (z === 1) {
    start = 1;
    end = 10;
  }
  if (z === 2) {
    start = 11;
    end = 20;
  }
  if (z === 3) {
    start = 21;
    end = 30;
  }
  if (z === 4) {
    start = 31;
    end = 40;
  }
  if (z === 5) {
    start = 41;
    end = 50;
  }
  if (z === 6) {
    start = 51;
    end = 60;
  }
  if (z === 7) {
    start = 61;
    end = 70;
  }
  if (z === 8) {
    start = 71;
    end = 80;
  }
  if (z === 9) {
    start = 81;
    end = 90;
  }
  if (z === 10) {
    start = 91;
    end = 100;
  }

  for (let i = start; i <= end; i++) {
    let whichPhoto = Math.floor(Math.random() * 100);
    rows.push({
      appid: i,
      relatedappid: `{${i + 1}, ${i + 2}, ${i + 3}, ${i + 4}, ${i + 5}}`,
      name: 'appName',
      logo: photoUrls[whichPhoto],
      company: 'companyOfApp',
      rating: `${Math.floor(5 * Math.random())}`,
      description: 'this is the description'});
  }

  csvWriter.writeRecords(rows)
    .then(() => {
      console.log('...Done');
  });
}

