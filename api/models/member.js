const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: String,
    drink: String
});

module.exports = mongoose.model('Member', memberSchema);