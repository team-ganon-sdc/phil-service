
CREATE TABLE allApps (
  appid int PRIMARY KEY,
  relatedappid list<int>,
  name text,
  logo text,
  company text,
  rating text,
  description text
);


uuid?

const appSchema = new Schema({
  _id: Number,
  relatedAppId: [{id: Number}],
  name: String,
  logo: String,
  company: String,
  rating: Number,
  description: String
});
