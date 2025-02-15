import express from 'express';
import homeRoute from './routes/homeRoute.js';

const app = express();
const port = 3000;

app.use('/', homeRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

