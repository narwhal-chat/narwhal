const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const db = require('./queries')
const util = require('./shared/utility')
 

const PORT = 5000;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// Set Static Path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}

app.post('/register', (req, res, next) => {
    var body = req.body;
    console.log('body in register post', body)

    var hash = bcrypt.hashSync(body.password.trim(), 10);
    var user = { 
        username: body.username,
        password: hash,
        email_address: body.email_address,
        avatar: body.avatar,
        create_date: body.create_date
    };

    db.createUser(user, res, next)
})

app.post('/login', (req, res, next) => {
    db.loginUser({username: req.body.username, password: req.body.password}, res, next);
})

// Listening to port
app.listen(PORT);