const mongoose = require('mongoose');

const appointSchema = mongoose.Schema({
    appointementDate: { type: String, require: true },
    startHour: {},
    endHour: {},
    taked: {},
    idOrganism: {type: mongoose.Schema.Types.ObjectId, ref: 'organism'},
});
module.exports = mongoose.model('appoint',appointSchema);