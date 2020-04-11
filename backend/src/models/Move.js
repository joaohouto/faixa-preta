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

    videoUrl: [String],

    image: {
        type: String,
        required: true
    },

    difficulty: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

MoveSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('move', MoveSchema);