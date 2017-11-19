const express = require('express');
const app = express();

app.get('/bookmark', (req, res) => {
  res.send('get bookmark');
});

app.get('/bookmarks', (req, res) => {
  res.send('get bookmarks');
});

app.get('/bookmark/:id', (req, res) => {
  res.send('get bookmark ' + req.params.id);
});

module.exports = app;

