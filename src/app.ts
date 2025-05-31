import express from 'express';
const app = express();
require('dotenv').config()||8080;
const port = 8080;
app.get('/', (req, res) => {
  res.send('Hello, World ád');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:8080 : ${port}`);
  console.log("env port:", process.env.PORT);
});