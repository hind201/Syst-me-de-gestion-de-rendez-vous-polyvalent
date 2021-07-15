const organis = require('../models/Organism');

exports.organism = async (req, res) => {
    try {
        const orga = new organis({
            ...req.body
        })
        
    } catch (error) {

    }
}



