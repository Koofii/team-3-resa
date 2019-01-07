const data = require('../data/ratings');

exports.getAllRatings = (req, res) => {
    // Hämta alla ratings
    res.json(data)
}

