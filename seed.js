
const db = require('./models');

const videogames_list = [
    {
        title: 'Zelda',
        avatar: 'Link',
    },
    {
        title: 'Donkey Kong',  
        avatar: 'Diddy Kong'
    },
    {
        title: 'Super Mario Kart',  
        avatar: 'Yoshi'
    }
];

db.Videogames.deleteMany({}, function(err, videogames) {
    console.log('removed all Videogames');

    videogames_list.forEach(function (videogamesData) {
        var videogames = new db.Videogames({
            title: videogamesData.title,
            avatar: videogamesData.author,
        });

        videogames.save(function(err, savedVideogames) {
            if (err) {
                console.log(err);
            }
            console.log('saved ' + savedVideogames.title + ' by ' + savedVideogames.avatar);
        });
    });
});