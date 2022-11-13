const mongoose = require('mongoose');

export default async function dbconnect(){
    return  await mongoose.connect('mongodb://localhost:27017/fusionstrom');
}