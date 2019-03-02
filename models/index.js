const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://personalapiretake.herokuapp.com/", {useMongoClient: true});

// module.exports.Campsite = require("./campsite.js.example");
