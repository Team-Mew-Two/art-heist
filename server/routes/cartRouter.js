const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js');

//Route for adding items to the cart
router.post('/addCart', cartController.addItem, cartController.getItemInfo, (req, res) => {
    res.status(200).json(res.locals.itemInfo);
});

//Route for getting items from the cart
router.post('/getCart', cartController.getItems, (req, res) => {
    res.status(200).json(res.locals.cartItems);
})

module.exports = router;