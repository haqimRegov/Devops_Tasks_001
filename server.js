'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Dev env pipeline');
});

const name = (req, res) => {
  res.send('Haqim is the creator')
};
// name.get('/creator_name', (req, res) => {
//   res.send('Haqim');
// });

app.get("/creator_name",name)
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
