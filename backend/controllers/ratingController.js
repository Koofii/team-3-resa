const data = require('../data/ratings.json');

exports.getAllRatings = (req, res) => {
    // Hämta alla ratings
    res.json(data.ratings)
}

