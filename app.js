// app.js
import express from 'express';
const app = express();

import { router } from './routes/routes.js';



// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in routes.js
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
