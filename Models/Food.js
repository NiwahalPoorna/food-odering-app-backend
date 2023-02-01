const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    // hotelid: {
    //     type: Number,
    //     required: true,
    // },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    title: {
        type: String,
    },
    image: {
        type: String,
    },

})

exports.Foods = mongoose.model('Foods', hotelSchema);