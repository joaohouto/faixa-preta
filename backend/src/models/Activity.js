const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ActivitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    tags: [{
        type: String,
        required: true
    }],

    imageUrl: {
        type: String,
        required: true
    },

    moves: [ {
        move_id: String,
        repetitions: Number,
    } ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

ActivitySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('activity', ActivitySchema);