const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:userid', async (req, res, next) => {
  console.log('we in the get', req.params);
  try {
    const results = await axios.get('http://localhost:3334/pods/' + req.params.userid);
    console.log('response data 2', results.data);
    return res.json(results.data);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const results = await axios.post('http://localhost:3334/pods',
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

router.get('/:podid/topics', async (req, res, next) => {
  console.log(req.params);
  try {
    const results = await axios.get('http://localhost:3334/pods/' + req.params.podid + '/topics');
    console.log('topics', results);
    res.json(results.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.post('/:podid/topics', async (req, res, next) => {
  try {
    const results = await axios.post('http://localhost:3334/pods/' + req.params.podid + '/topics',
      {
        name: 'database',
        podId: req.params.podid,
        userId: 1
      });
      res.json(results.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;