DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO contacts (name)
VALUES ('Sarah');
