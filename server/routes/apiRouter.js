const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

// route and middleware for getting art
router.get('/getArt', apiController.getArt, apiController.insertArt, (req, res) => {
  res.status(200);
})

router.get('/getItems', apiController.getItems, (req, res) => {
  res.status(200).json(res.locals.items);
})


module.exports = router;