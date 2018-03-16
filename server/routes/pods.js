const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:userid', async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await axios.get('http://localhost:3334/pods/' + req.params.userid);
    console.log('response', response.data);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const response = await axios.post('http://localhost:3334/pods',
      {
        referenceName: 'dream-team4',
        displayName: 'Dream Team',
        description: 'This is a test description',
        avatar: 'fake avatar',
        podCategoryId: 2,
        userId: 555
      });
    console.log(response.data);
    res.send(response.data);
  } catch (e) {
      console.log(e);
      res.send(e);
  }
});

router.get('/:podid/topics', async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await axios.get('http://localhost:3334/pods/' + req.params.podid + '/topics');
    console.log('response', response.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.post('/:podid/topics', async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await axios.post('http://localhost:3334/pods/' + req.params.podid + '/topics',
      {
        name: 'database',
        podId: req.params.podid,
        userId: 1
      });
    console.log('response', response.data);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;