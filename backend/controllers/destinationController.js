const data = require('../data/where-to.json');

exports.getAllDestinations = (req, res) => {
    // Hämta alla desinationer
    res.json(data)
}


exports.getDestinationsPerDate = (req, res) => {
    // Sortera på datum
}


exports.getDestinationsPerType = (req, res) => {
    // sortera på restype
}
