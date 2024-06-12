import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv'; 
dotenv.config({ path: 'process.env' });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Define routes
import routes from './routes/routes.js'; 
app.use('/', routes);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
