const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: 'Invalid email address',
        },
    }
},{
    timestamps: true
})

const userModel = mongoose.model('usercollection',userschema)

module.exports = {Users:userModel}