const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

const apiRouter = require('./routes/apiRouter');
const userRouter = require('./routes/userRouter');

/**
 * handle parsing request body
 */
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/**
 * * 
 * handle requests for static files -- make sure you know what this is doing
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));
*/

// handle routes 
app.use('/api', apiRouter);
app.use('/user', userRouter);

// statically serve everything in the build folder on the route '/build'
// if (process.env.NODE_ENV !== 'development') {
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.use((req, res) => res.sendStatus(404)); // Catch All Error

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); // listens on port 3000 -> http://localhost:3000/
