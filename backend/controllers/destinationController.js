const data = require('../data/where-to.json');

exports.getAllDestinations = (req, res) => {
    // Hämta alla desinationer
    
    res.status(200).json(data)
    
}


exports.getDestinationsPerDate = (req, res) => {
    // Sortera på datum
}


exports.getDestinationsPerType = (req, res) => {
    // sortera på restype
}
