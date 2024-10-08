project-name/
├── src/ 
│   ├── app.js (or server.js)  # Main entry point of the application
│   ├── config/                # Configuration files 
│   │   ├── database.js       # Database connection configuration
│   │   ├── app.js            # General app configuration 
│   ├── controllers/          # Route handlers 
│   ├── middlewares/          # Middleware functions 
│   ├── models/               # Database models 
│   ├── routes/               # API routes 
│   ├── services/             # Business logic 
│   ├── utils/                # Utility functions 
│   ├── test/                 # Test files 
├── .gitignore               # Files to ignore in version control 
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation 

run docker containers for dev

sudo docker-compose -f docker-compose.dev.yml up --build



run docker containers for prod

sudo docker-compose up --build
