const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/user');
const brackets = require('./routes/api/bracket');

app.use('/profile', users);
app.use('/generator', brackets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))