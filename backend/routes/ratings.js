const route = require('express').Router();
const ratings = require('../controllers/ratingController');


route.get('/getallratings', ratings.getAllRatings);

module.exports = route;