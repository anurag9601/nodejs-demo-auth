const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortURL : {
        type: String,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitList : [
        {time : { type : Number}},
    ],
},{timestamps: true});

module.exports = mongoose.model('urls', urlSchema);