const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/user');
const brackets = require('./routes/api/bracket');

<<<<<<<<< Temporary merge branch 1
app.use('/profile', users);
app.use('/generator', brackets);
=========
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { }
  }))

app.use('/profile', users);
app.use('/bracket', brackets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))