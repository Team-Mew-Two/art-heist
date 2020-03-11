const bcrypt = require('bcryptjs');
const db = require('../models/model');

const userController = {};

// setting our number of encryption rounds to 10
const ROUNDS = 10;

userController.createUser = (req, res, next) => {
  console.log('hit createUser controller');
  const { email, password, name } = req.body;
  // generating salt for hash password
  bcrypt.genSalt(ROUNDS, async (err, salt) => {
    // handling asynchronous functionality & generating hash with password and salt
    await bcrypt.hash(password, salt, (err, hash) => {
      console.log('password ', password);
      if (err) {
        return next(err);
      }
      // inserting user info & hash into the database
      console.log('hash ', hash);
      const queryString = 'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3)';
      const values = [name, email, hash]
      db.query(queryString, values, async (error, user) => {
        if (error) {
          return next(error);
        }
      });
    });
    });
    return next();
};

userController.verifyUser = (req, res, next) => {

};

module.exports = userController;