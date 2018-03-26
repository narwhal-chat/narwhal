const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const POD_MICROSERVICE_URL = process.env.POD_MICROSERVICE_URL ? process.env.POD_MICROSERVICE_URL + '/pods' : 'http://localhost:3334/pods';

router.get('/:userId', async (req, res, next) => {
  try {
    const results = await axios.get(POD_MICROSERVICE_URL + '/' + req.params.userId);
    return res.json(results.data);
  } catch (e) {
    console.log('ERROR', e);
    res.send(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const results = await axios.post(POD_MICROSERVICE_URL,
      {
        referenceName: 'dream-teamz1',
        displayName: 'Dream Team',
        description: 'This is a test description',
        avatar: 'fake avatar',
        podCategoryId: 2,
        userId: 1
      });
      res.json(results.data);
  } catch (e) {
      console.log(e);
      res.send(e);
  }
});

router.get('/:podId/topics', async (req, res, next) => {
  console.log('getting topics', req.params);
  try {
    const results = await axios.get(POD_MICROSERVICE_URL + '/' + req.params.podId + '/topics');
    res.json(results.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.post('/:podId/topics', async (req, res, next) => {
  console.log('post topic', req.params.podId, req.body.userId);
  try {
    const results = await axios.post(POD_MICROSERVICE_URL + '/' + req.params.podId + '/topics',
      {
        name: 'new-topic',
        podId: req.params.podId,
        userId: req.body.userId
      });
      res.json(results.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;
