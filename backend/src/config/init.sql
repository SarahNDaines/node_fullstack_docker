CREATE DATABASE mydatabase;
\c mydatabase
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO contacts (name)
VALUES ('Sarah');
