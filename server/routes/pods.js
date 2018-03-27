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
  console.log(req.body, 'sent from create pods');
  let reference = req.body.podName + Math.random().toString(36).substring(7);
  
  try {
    const results = await axios.post(POD_MICROSERVICE_URL,
      {
        referenceName: reference,
        displayName: req.body.podName,
        description: req.body.description,
        avatar: req.body.avatar,
        podCategoryId: 2,
        userId: req.body.userId
      });

      console.log('RESULTS FROM POST', results.data)
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
        name: req.body.name,
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
