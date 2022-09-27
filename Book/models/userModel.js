const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    likedBook: Array,
    readBook: Array
})

const User = mongoose.model('users', userSchema,'users');

module.exports = User;