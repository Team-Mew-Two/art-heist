const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

// route and middleware for getting art
router.get('/getArt', apiController.getArt, (req, res) => {
  res.status(200);
})


module.exports = router;