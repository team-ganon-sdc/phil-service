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

select appid, name, logo, company, rating, description from allapps WHERE appid = (select relatedappid[1] from allapps where appid = 9999995) or appid = (select relatedappid[2] from allapps where appid = 9999995) or appid = (select relatedappid[3] from allapps where appid = 9999995) or appid = (select relatedappid[4] from allapps where appid = 9999995) or appid = (select relatedappid[5] from allapps where appid = 9999995)

COPY allapps (appid, relatedappid, name, logo, company, rating, description) FROM '/Users/avarousu/Desktop/Galvanize/similar-component/postgresData.csv' CSV HEADER DELIMITER '|';
