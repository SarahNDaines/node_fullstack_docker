import express, { Request, Response } from 'express';
import cors from 'cors'; // Import CORS package
import pool from './config/database';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Enable JSON body parsing

const connectWithRetry = () => {
  pool.connect((err: Error | undefined) => {
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
  import('./routes/index').then(indexRoute => {
    app.use('/api', indexRoute.default);
  });

  // Dynamically load all other routes
  const routesPath = path.join(__dirname, 'routes');
  fs.readdirSync(routesPath).forEach((file) => {
    if (file !== 'index.ts') {
      import(path.join(routesPath, file)).then(route => {
        app.use('/api', route.default); // Use the route as defined in the file
      });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

connectWithRetry();
