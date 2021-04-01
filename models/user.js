const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requred: true
    },
    password: {
        type: String,
        requred: true
    }
});

mongoose.model("User", userSchema)