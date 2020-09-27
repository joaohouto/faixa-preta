const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

//encrypts password before stores at db
UserSchema.pre('save', async function save(next) {

    if(!this.isModified('password')) 
        return next();

    try {
      const salt = await bcrypt.genSalt(10); //set salt work factor to 10
      this.password = await bcrypt.hash(this.password, salt);

      return next();

    } catch (err) {

      return next(err);
    }
});

UserSchema.methods.validatePassword = async function validatePassword(pass) {
    return bcrypt.compare(pass, this.password);
};

module.exports = mongoose.model('User', UserSchema);