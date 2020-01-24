const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    tags: [ String ],

    image: {
        type: String,
        required: true
    },

    moves: [ {
        category: String,
        move_id: String,
        repetitions: Number,
    } ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('activity', ActivitySchema);