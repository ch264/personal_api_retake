const mongoose = require('mongoose');
Schema = mongoose.Schema;

const VideogameSchema = new Schema({
    title: String,
    avatar: String,
})


const Videogame = mongoose.model('Videogame', VideogameSchema);
module.exports = Videogame;