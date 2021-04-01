const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require('../middlewalre/requireLogin');
const TrainList = mongoose.model("TrainList")

router.post('/addTrain', requireLogin, (req, res) => {
    const { name, number, source, destination, distance } = req.body
    if (!name || !number || source || destination || distance) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    req.user.password = undefined;

    const train = new TrainList({
        name, number, source, destination, distance
    });

    train.save().then(result => {
        res.json({ train: result })
    })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router