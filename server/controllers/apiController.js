// process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
const axios = require('axios');
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
    .then(res => {
      const artInfo = [];
      res.forEach(art => {
        artInfo.push(art.data);
      });
      console.log(artInfo);
    })
    .catch(function(error) {
      console.log(error)
    });
  
};

module.exports = apiController;