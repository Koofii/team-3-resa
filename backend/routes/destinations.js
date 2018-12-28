const route = require('express').Router();
const destinations = require('../controllers/destinationController');


route.get('/getalldestinations', destinations.getAllDestinations);
route.post('/getdestinationtype', destinations.getDestinationsPerType);
route.post('/getdestinationdate', destinations.getDestinationsPerDate);


module.exports = route;