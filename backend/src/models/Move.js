const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MoveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    videos: [{
        url: String,
        title: String,
        author: String
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

MoveSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('move', MoveSchema);