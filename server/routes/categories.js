const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const POD_MICROSERVICE_URL = process.env.POD_MICROSERVICE_URL ? process.env.POD_MICROSERVICE_URL + '/categories' : 'http://localhost:3334/categories';

router.get('/', async (req, res, next) => {
  try {
    const results = await axios.get(POD_MICROSERVICE_URL);
    res.json(results.data);
  } catch (e) {
    res.sendStatus(400);
  }
});

module.exports = router;
