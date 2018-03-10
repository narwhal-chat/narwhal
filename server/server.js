const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios')
 

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

// Listening to port
app.listen(PORT);