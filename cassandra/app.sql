
-- create keyspace allApps with replication = {'class':'SimpleStrategy', 'replication_factor': 1};

-- use allapps;

CREATE TABLE allApps (
  appid int PRIMARY KEY,
  relatedappid list<int>,
  name text,
  logo text,
  company text,
  rating text,
  description text
);

--cassandra does not do join queries so dont bother
-- CREATE TABLE similar (
--   id int,
--   appid int,
--   relatedapp int,
--   PRIMARY KEY (id, appid, relatedapp)
-- )

CREATE INDEX allapps_appid ON allapps.allapps (relatedappid);

select relatedappid from allapps where appid = 9999995

select appid, name, logo, company, rating, description from allapps where appid = 9999995
