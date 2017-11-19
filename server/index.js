const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const bookmarks = require('./routes/bookmarks');

// setup middleware
app.use(morgan('short'));

// configure custom routes
app.use('/api', bookmarks);

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(3000, () => console.log('server running on 3000!'));

