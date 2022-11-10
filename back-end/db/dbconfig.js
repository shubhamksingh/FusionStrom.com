const mongoose = require('mongoose');

const MONGO_URL = "mongodb://127.0.0.1:27017/strom"

const dbconnect = mongoose.connect(MONGO_URL, () => { 
    console.log('Database is connected!')
})

module.exports = dbconnect