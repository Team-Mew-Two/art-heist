const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/register', userController.createUser, (req, res) => {
  res.status(200);
})

router.post('/login', userController.verifyUser, (req, res) => {
  console.log('loginnnnnnn');
  res.status(200).json({username: req.body.username});
})

module.exports = router;