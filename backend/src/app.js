const express = require('express');
const cors = require('cors'); // Import CORS package
const pool = require('./config/database');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors()); // Use CORS middleware

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
  // Use the index route for the base /api path
  const indexRoute = require('./routes/index');
  app.use('/api', indexRoute);

  // Dynamically load all other routes
  const routesPath = path.join(__dirname, 'routes');
  fs.readdirSync(routesPath).forEach((file) => {
    if (file !== 'index.js') {
      const route = require(path.join(routesPath, file));
      app.use('/api', route); // Use the route as defined in the file
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

connectWithRetry();
