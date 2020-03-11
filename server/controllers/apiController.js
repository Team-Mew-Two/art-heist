const axios = require('axios');
const db = require('../models/model');

const apiController = {};

// list of objectID's from the MET API that consist of featured paintings at the MET with available photos
const listOfArt = [544740, 469887, 44696, 472562, 544453, 459027, 459028, 267019, 544320, 437609, 437261, 435896, 438821, 206989, 450409, 435809, 452102, 437153, 39901, 451725, 313256, 437056, 437654, 436838, 451909, 436658, 435621, 437299, 435702, 436105, 435817, 436896, 437926, 435844]

// controller to get all of the available art from the MET API
apiController.getArt = (req, res, next) => {
  Promise.all(listOfArt.map(id => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })))
    .then(response => {
      const artInfo = [];
      response.forEach(art => {
        artInfo.push(art.data);
      });
      // console.log(artInfo);
      res.locals.artInfo = artInfo;
      return next();
    })
    .catch(function(error) {
      console.log(error)
    });
};

// function to generate a random price from 5 million to 70 million for each piece of artwork
const generateArtPrice = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// controller to insert art information into database
apiController.insertArt = (req, res, next) => {
  const artWithPrice = res.locals.artInfo;
  // iterate through pieces of art and add a price to each using the helper function above
  artWithPrice.forEach(el => {
    el.price = generateArtPrice(5000000, 70000000);
  })

  console.log(artWithPrice);

  artWithPrice.forEach(art => {
    const {objectID, primaryImage, title, artistDisplayName, objectDate, price} = art;
    const valuesArr = [objectID, primaryImage, title, artistDisplayName, objectDate, price];
    const queryString = 'INSERT INTO items (objectID, primaryImage, title, artist, date, price) VALUES ($1, $2, $3, $4, $5, $6)'
    db.query(queryString, valuesArr, (err, response) => {
      if (err) return next({
        log: 'express error handler caught error in insertArt middleware',
        status: 400,
        message: { err },
      })
      // console.log(response);
      return next();
    })
  })
  
};

module.exports = apiController;