const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const PORT = 5000

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Set Static Path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}

// Listening to port
app.listen(PORT);