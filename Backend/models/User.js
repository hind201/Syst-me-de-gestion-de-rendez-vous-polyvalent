const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, require: true, min: 3, max: 48, trim: true },
    lastName: { type: String, require: true, min: 3, max: 48, trim: true },
    role: { type: String, ennum: [''], default: '' },
    username: { type: String, require: true, min: 3, max: 48, trim: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    idOrganism: { type: mongoose.Schema.Types.ObjectId, ref: 'organism' },
});
module.exports = mongoose.model('user', userSchema);