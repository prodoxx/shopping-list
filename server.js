const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbURI = require('./config/keys').mongoURI;

// routes
const items = require('./routes/api/items');

// initialize app
const app = express();

// middlewares
app.use(bodyParser.json());

// connect to Mongo
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MonogoDB connected...'))
  .catch(err => console.log(err));

// use routes
app.use('/api/items', items);

// set port
const port = process.env.PORT || 5000;

// listen to server
app.listen(port, () => console.log(`Server started on port ${port}`));