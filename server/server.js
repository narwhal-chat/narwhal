const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken');
 
const PORT = process.env.PORT || 5000;
const USER_MICROSERVICE_URL = process.env.USER_MICROSERVICE_URL || 'http://localhost:3033';

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes handled by Express Router
const pods = require('./routes/pods');

// Define a single source of route paths
const routes = {
    'register': USER_MICROSERVICE_URL + '/register',
    'login': USER_MICROSERVICE_URL + '/login',
    'editProfile': USER_MICROSERVICE_URL + '/editProfile'
};

// Set static path
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/../client/build'));
}

// Register account route
app.post('/register', (req, res, next) => {
    console.log('HELLO');
    axios.post(routes.register, req.body)
    .then(user => {
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        return res.status(404).json({
            error: err.response.data.error,
            message: err.response.data.message
        })
    });
});

// Login route
app.post('/login', (req, res, next) => {
    axios.post(routes.login, req.body)
    .then(user => {
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('Error logging in', err)
        return res.status(404).json({
            error: err.response.data.error,
            message: err.response.data.message
        })
    });
});

// Enable authentication middleware
app.use((req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log(token);
    if (token) {
        jwt.verify(token, 'asdfvadasfdfasdfcv3234asdf', (err, decod) => {
            if (err) {
                res.status(403).json({
                    message:"Token Expired"
                });
                // res.status(403).render('/login');
            } else {
                req.decoded=decod;
                next();
            }
        });
    } else {
        console.log('token expired');
        res.status(403).json({
            message:"No Token"
        });
    }
});

//PUT ALL PROTECTED ROUTES BELOW HERE

// Edit profile route
app.post('/editProfile', (req, res, next) => {
    axios.post(routes.editProfile, req.body)
    .then(user => {
        console.log('succesfully edited the profile');
        res.status(200).json({
            token: user.data.token,
            user: user.data.user
        })
    })
    .catch(err => {
        console.log('ERROR IN EDIT PROFILE', err.response.data)
        return res.status(404).json({
            error: err.response.data.error,
            message: err.response.data.message
        })
    })
})

// Pods route
app.use('/pods', pods);

// Start server
app.listen(PORT);