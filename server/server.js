const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

// Routes
const user = require('./routes/User')

const PORT = 5000;
const SALT_WORK_FACTOR = 12;
require('dotenv').config();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// Set Static Path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}


app.post('/register', function(req, res) {
    console.log(req.body)
});

// Listening to port
app.listen(PORT);