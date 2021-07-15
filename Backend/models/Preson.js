const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    firstName: { type: String, require: true, min: 3, max: 48, trim: true },
    lastName: { type: String, require: true, min: 3, max: 48, trim: true },
    birthDate: { type: String, require: true, },
    address: { type: String, require: true, },
    phoneNumber: { type: String, require: true, },
    username:{type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    blacklisted: {type: String, require: true },
});

module.exports = mongoose.module('person', personSchema);