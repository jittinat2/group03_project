const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')

const app = express();

app.use(bodyParser.json());
app.use(cors({
  "origin": ["http://localhost:8080"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  credentials:true
}));

const users = require('./routes/api/user');
const brackets = require('./routes/api/bracket');

// app.use('/profile', posts);
// app.use('/generator', brackets);


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