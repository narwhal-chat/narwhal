const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const multer = require('multer');
 
const PORT = process.env.PORT || 5000;
const USER_MICROSERVICE_URL = process.env.USER_MICROSERVICE_URL || 'http://localhost:3033';

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes handled by Express Router
const pods = require('./routes/pods');
const categories = require('./routes/categories');

// Define a single source of route paths
const routes = {
  register: USER_MICROSERVICE_URL + '/register',
  login: USER_MICROSERVICE_URL + '/login',
  editProfile: USER_MICROSERVICE_URL + '/editProfile',
  pods: '/pods',
  categories: '/categories'
};

// Set static path
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static(__dirname + '/../client/build'));
}

// Amazon s3 config
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
});
const s3 = new AWS.S3();

//Multer config
//memory storage keeps file data in a buffer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 }
})

io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('JOIN_ROOM', (room) => {
    console.log('Joined room', room);
    socket.join(room);
  });

  socket.on('LEAVE_ROOM', (room) => {
    console.log('Left room', room);
    socket.leave(room);
  });

  socket.on('SEND_MESSAGE', (message) => {
    console.log('Message received', message);
    io.to(message.room).emit('RECEIVE_MESSAGE', message.message);
  });
});

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
      console.log('USER DTA IN SERV', user.data)
      res.status(200).json({
          token: user.data.token,
          user: user.data.user
      });
    })
    .catch(err => {
      console.log('Error logging in', err)
        return res.status(404).json({
          error: err.response.data.error,
          message: err.response.data.message
        })
    });
});

app.post('/upload', upload.single('image'), (req, res, next) => {
  console.log('req file', req.file)
  s3.putObject({
    Bucket: 'narwhalavatar',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read'
  }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  })

  s3.getSignedUrl('getObject', {
    Bucket: 'narwhalavatar',
    Key: req.file.originalname
  }, (err, url) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    return res.status(200).send(url);
  })
})

// Enable authentication middleware
app.use((req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'asdfvadasfdfasdfcv3234asdf', (err, decod) => {
      if (err) {
        res.status(403).json({
        message:"Token Expired"
      });
      // res.status(403).render('/login');
      } else {
        req.decoded=decod;
        console.log('decod', decod);
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

// *** All protected routes go below here ***

// Edit profile route
app.post('/editProfile', (req, res, next) => {
  axios.post(routes.editProfile, req.body)
    .then(user => {
      console.log('succesfully edited the profile', user);
      res.status(200).json({
        token: user.data.token,
        user: user.data.user
      });
    })
    .catch(err => {
      console.log('ERROR IN EDIT PROFILE', err.response.data)
      res.status(401).json({
        error: err.response.data.error,
        message: err.response.data.message,
        errorType: err.response.data.errorType
      })
    })
})

// Pods route
app.use(routes.pods, pods);

// Categories route
app.use(routes.categories, categories);

// Start server
http.listen(PORT);
