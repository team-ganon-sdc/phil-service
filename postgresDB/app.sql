CREATE TABLE allApps (
  appid integer UNIQUE PRIMARY KEY,
  relatedappid integer ARRAY[5],
  name varchar(200),
  logo varchar(200),
  company varchar(200),
  rating integer,
  description varchar(250)
);

create index allapps_relatedappid  ON allapps(relatedappid);
