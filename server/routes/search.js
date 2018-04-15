const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const MESSAGE_SEARCH_MICROSERVICE_URL = process.env.MESSAGE_SEARCH_MICROSERVICE_URL ? process.env.MESSAGE_SEARCH_MICROSERVICE_URL + '/search' : 'http://localhost:3336/search';

router.get('/:query/:topicId', async (req, res, next) => {
  try {
    const results = await axios.get(MESSAGE_SEARCH_MICROSERVICE_URL + '/' + req.params.query + '/' + req.params.topicId);
    console.log(MESSAGE_SEARCH_MICROSERVICE_URL + '/' + req.params.query + '/' + req.params.topicId);
    res.json(results.data);
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = router;
