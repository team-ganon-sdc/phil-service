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

explain analyze select appid, name, logo, company, rating, description from allapps WHERE appid = (select relatedappid[1] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[2] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[3] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[4] from allapps where appid = ${req.params.id}) or appid = (select relatedappid[5] from allapps where appid = ${req.params.id})
