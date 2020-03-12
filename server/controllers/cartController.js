const db = require('../models/model');

const cartController = {};

cartController.addItem = (req, res, next) => {
    const { userId, itemId } = req.body;
    const query = `INSERT INTO Cart (userId, itemId) VALUES ($1, $2)`;
    const params = [userId, itemId];
    db.query(query, params)
    .then((response)=> {
        next();
    })
    .catch((err) => {
        console.log("Error in cart controller");
        next(err);
    });
}

cartController.getItemInfo = (req, res, next) => {
    const { itemId } = req.body;
    const query = `SELECT * FROM items WHERE objectId = $1`;
    const params = [itemId];
    db.query(query, params)
    .then((response) => {
        res.locals.itemInfo = response.rows[0];
        console.log(res.locals.itemInfo);
        next();
    })
    .catch((err) => {
        next(err);
    })
}

cartController.getItems = (req, res, next) => {
    const { userId } = req.body;
    const query = `SELECT items.* FROM items 
    JOIN users ON users.userId = $1 
    JOIN cart ON items.objectId = cart.itemId AND users.userId = cart.userId`; 
    const params = [ userId ];
    db.query(query, params)
    .then((response) => {
        res.locals.cartItems = response.rows;
        console.log(res.locals.cartItems);
        next();
    })
    .catch((err) => {
        next(err);
    })
}

module.exports = cartController;