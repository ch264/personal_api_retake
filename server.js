// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));



/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    AllMyEndpointsError: true, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://personalapiretake.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/videogames", description: "View list of games played"}, 
      {method: "GET", path: "/api/videogames/:id", description: "View one game played"}, 
      {method: "POST", path: "/api/videogames", description: "Create a new game"},
      {method: "PUT", path: "/api/videogames/:id", description: "Update one game played"}, 
      {method: "Delete", path: "/api/videogames", description: "Delete a new game"},
      {method: "Delte", path: "/api/videogames/:id", description: "Delete one game played"}, 
    ]
  })
});



/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/profile',(req, res) => {
  // res.send('Welcome to my profile'),
  res.json({
    name: 'Christina Hastenrath',
    githubUsername: 'ch264',
    githubLink: 'https://github.com/ch264',
    githubProfileImage: 'https://github.com/settings/profile',
    linkedIn: 'https://www.linkedin.com/in/christinahastenrath/',
    facebook: 'https://www.facebook.com' ,
    currentCity: 'San Francisco',
    pets: [
      {
      name: 'Bella',
      type: 'PetRabbit',
      breed: 'dutch short hair'
      },
      {
        name: 'Emma',
        type: 'dog',
        breed: 'Springer Spaniel'
      }
    ]
  });
});

// get all Videogames READ CRUD
app.get('/api/videogames'), (req, res) => {
  db.Videogames.find({}, (err, foundVideogames) => {
    if (err) return console.log(err);
    res.json(foundVideogames);
  });
};

// read a specific videogame
app.get('/api/videogames/:id', (req, res) => {
  db.Videogames.findOne({ _id: req.params.id}, (err, foundVideogames) => {
    if (err) return console.log(err);
    res.json(foundVideogames);
  });
});



// create new book // shows up on reload ?
app.post('/api/videogames', (req, res) => {

  let newVideogames = new db.Videogames({
    title: req.body.title,
    avatar: req.body.avatar
  })

  db.Videogames.create(newVideogames, (err, newVideogamesCreated) => {
    if(err) console.log("no new book was created");
    res.json(newVideogamesCreated);
  });
});

// Edit a book
app.put('/api/videogames/:id', (req, res) => {
  let bookId = req.params.id;
  db.Book.findOneAndUpdate({ _id: bookId}, req.body, (err, updatedBook) => {
    if (err) console.log(err);
    // console.log(updatedBook);
    res.json(updatedBook);
  })
})

// Delete a specific book
app.get('/api/videogames/:id', (req, res) => {
  db.Videogames.findOneAndDelete({_id: req.params.id}, (err, foundVideogames) => {
    if (err) console.log(err);
    res.json(foundVideogames);
  })
  });







/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
