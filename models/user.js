const { Schema, model } = require('mongoose');

const useSchem = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // age: {
    //     type: Number,
    //     required: true
    // },
    phone: {
        type: String,
        required: true
    },
    email: String,

    image: String

}, {timestamps: true});

const user = model('user', useSchem)

module.exports = user;