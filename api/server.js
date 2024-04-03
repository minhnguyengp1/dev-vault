import express, { json } from 'express';
import cors from 'cors';
require('dotenv').config();

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});