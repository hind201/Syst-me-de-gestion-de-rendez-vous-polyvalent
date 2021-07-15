const mongoose = require('mongoose');

const reservSchema = mongoose.Schema({
    idPerson: { type: mongoose.Schema.Types.ObjectId, ref: 'person' },
    idAppointement: { type: mongoose.Schema.Types.ObjectId, ref: 'appoint' },
    valid: {},
    respected: {},
})
module.exports = mongoose.model('reserv' ,reservSchema);