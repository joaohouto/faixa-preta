const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MoveSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    videoUrl: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

MoveSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('move', MoveSchema);