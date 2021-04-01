const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGOURI } = require('./keys');


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('connectd to mongo ')
});

mongoose.connection.on('error', (err) => {
    console.log('error connecting ', err)
});

require('./models/user');
require('./models/train')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/train'))


const customMiddleware = (req, res, next) => {
    console.log("Middleware executed!")
    next()
}

app.use(customMiddleware);

app.get('/', (req, res) => {
    console.log("Home")
    res.send("Hello World")
});

app.listen(PORT, () => {
    console.log("server is running on", PORT)
})