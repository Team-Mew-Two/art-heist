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
  const { email, password } = req.body;
  const authInfo = {
    isVerified: false,
    name: null,
    userID: null
  }
  db.query('SELECT * FROM Users WHERE email = $1', [email], (error, user) => {
    if (error) {
      return next(error);
    }

     // check to see if the user email exists in database
  if (!user.rows[0]) {
    res.json(authInfo);
  }

  res.locals.user = user.rows[0];
  bcrypt.compare(password, user.rows[0].password, (err, response) => {
    if (err) {
      return next(err);
    } else if (!response) {
      res.json(authInfo);
    }
    authInfo.isVerified = true;
    authInfo.name = user.rows[0].name;
    authInfo.userID = user.rows[0].userID;
    res.locals.authInfo = authInfo;
    return next();
  })
  })
};

module.exports = userController;