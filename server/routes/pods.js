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
    res.sendStatus(400);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let reference = req.body.podName;
    const results = await axios.post(POD_MICROSERVICE_URL, {
      referenceName: reference,
      displayName: req.body.podName,
      description: req.body.description,
      avatar: req.body.avatar,
      podCategoryId: req.body.category,
      userId: req.body.userId
    });
    res.json(results.data);
  } catch (e) {
    res.sendStatus(400);
  }
});

router.get('/:podId/topics', async (req, res, next) => {
  try {
    const results = await axios.get(POD_MICROSERVICE_URL + '/' + req.params.podId + '/topics');
    res.json(results.data);
  } catch (e) {
    res.sendStatus(400);
  }
});

router.post('/:podId/topics', async (req, res, next) => {
  try {
    const results = await axios.post(POD_MICROSERVICE_URL + '/' + req.params.podId + '/topics', {
      name: req.body.name,
      podId: req.params.podId,
      userId: req.body.userId
    });
    res.json(results.data);
  } catch (e) {
    res.sendStatus(400);
  }
});

router.get('/get/all', async (req, res, next) => {
	try {
		const results = await axios.get(POD_MICROSERVICE_URL + '/get/all');
		res.json(results.data);
	} catch (e) {
		res.sendStatus(400);
	}
});

module.exports = router;
