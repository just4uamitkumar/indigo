const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },

    distance: {
        type: Number,
        required: true
    },

}, { timestamps: true })

mongoose.model("TrainList", trainSchema)