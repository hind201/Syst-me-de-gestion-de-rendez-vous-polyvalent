const mongoose = require('mongoose');

const organismSchema = new mongoose.Schema({
    name: { type: String, require: true, min: 3, max: 48, trim: true },
    description: { type: String, require: true },
    director: { type: String, require: true, min: 3, max: 48, trim: true },
    address: { type: String, require: true, min: 3, max: 48, trim: true },
    Activity: {type: String, require: true},
    startDate: { type: Date, default: Date.now },
    City: {type: String, require: true},
});
module.exports = mongoose.model('organism', organismSchema);

