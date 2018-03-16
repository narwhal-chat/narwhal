const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken');
 
const PORT = process.env.PORT || 5000;

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes set up by Express Router
const pods = require('./routes/pods');

// Set static path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}

// Register account route
app.post('/register', (req, res, next) => {
    axios.post('http://localhost:3033/register', req.body)
    .then(user => {
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        res.status(404).json({
            error: err.response.data.error,
            message: err.response.data.message
        })
    });
})

// Login route
app.post('/login', (req, res, next) => {
    axios.post('http://localhost:3033/login', req.body)
    .then(user => {
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('Error logging in', err)
        res.status(404).json({
            error: err.response.data.error,
            message: err.response.data.message
        })
    });
})

// Enable authentication middleware
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

// Edit profile route
app.post('/editProfile', (req, res, next) => {
    axios.post('http://localhost:3033/editProfile', req.body)
    .then(user => {

        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('Error editing profile', err);
    })
})

// Pods route
app.use('/pods', pods);

// Start app
app.listen(PORT);