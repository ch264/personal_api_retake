const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://personalapiretake.herokuapp.com/"), { useNewUrlParser: true };

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Videogame = require('./Videogame');