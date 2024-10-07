const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

const connectWithRetry = () => {
  pool.connect((err) => {
    if (err) {
      console.error('Failed to connect to database, retrying in 5 seconds...', err);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Connected to database');
      startServer(); // Start the server once the database is connected
    }
  });
};

const startServer = () => {
  app.get('/', (req, res) => {
    pool.query('SELECT * FROM mytable', (err, result) => {
      if (err) {
        console.error('Query failed:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.send(result.rows);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

connectWithRetry();
