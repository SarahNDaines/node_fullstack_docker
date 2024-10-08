CREATE DATABASE mydatabase;
\c mydatabase
CREATE TABLE mytable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO mytable (name)
VALUES ('Sarah');
