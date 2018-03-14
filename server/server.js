const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken');
 

const PORT = process.env.PORT || 5000;

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
    axios.post('http://localhost:3033/register', req.body)
    .then(user => {
        console.log('successfully posted in register', user)
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('Error registering', err)
    });
})

app.post('/login', (req, res, next) => {
    axios.post('http://localhost:3033/login', req.body)
    .then(user => {
        console.log('successfully posted in login', user)
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('Error registering', err)
    });
})

app.use((req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'asdfvadasfdfasdfcv3234asdf', (err, decod) => {
            if (err) {
                res.status(403).json({
                    message:"Wrong Token"
                });
            } else {
                req.decoded=decod;
                next();
            }
        });
    } else {
        res.status(403).json({
            message:"No Token"
        });
    }
})

// Listening to port
app.listen(PORT);
