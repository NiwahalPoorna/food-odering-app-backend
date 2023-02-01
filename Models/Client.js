const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String
    }
})

exports.Clients = mongoose.model('Clients', clientSchema);