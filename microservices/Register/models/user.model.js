
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        maxLength: 20
    },
    email: {
        type: String
    },
    password: {
        type: String
    },

})

module.exports.user = mongoose.model('user', userSchema);
