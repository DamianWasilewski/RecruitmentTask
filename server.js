const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const events = require('./routes/api/events');

const app = express();

// Bodyparser

app.use(bodyParser.json());

// DB Config

const db = require('./config/dbConfig').mongoURI;


// Connect to Mongo

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err));

  //Routes
  app.use('/api/events', events);

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on ${port}`));

