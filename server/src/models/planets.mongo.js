const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true
    }
});

// "planets" collection of Planet objects
module.exports = mongoose.model('Planet', planetSchema);