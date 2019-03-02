const mongoose = require('mongoose');
Schema = mongoose.Schema;

const VideogameSchema = new Schema({
    title: String,
    avatar: String,
    time: Number
})


const Book = mongoose.model('Videogame', VideogameSchema);
module.exports = Videogame;