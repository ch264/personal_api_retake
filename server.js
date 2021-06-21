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
    documentationUrl: "https://github.com/ch264/personal_api_retake", 
    baseUrl: "https://personalapiretake.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "shows social media profile and pet information"},
      {method: "GET", path: "/api/experience", description: "shows present and past work experience"},
      {method: "GET", path: "/api/education", description: "shows education"},
      {method: "GET", path: "/api/projects", description: "shows projects"},

      // {method: "GET", path: "/api/videogames", description: "View list of games played"}, 
      // {method: "GET", path: "/api/videogames/:id", description: "View one game played"}, 
      // {method: "POST", path: "/api/videogames", description: "Create a new game"},
      // {method: "PUT", path: "/api/videogames/:id", description: "Update one game played"}, 
      // {method: "Delete", path: "/api/videogames", description: "Delete a new game"},
      // {method: "Delte", path: "/api/videogames/:id", description: "Delete one game played"}, 
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
    medium: 'https://medium.com/@christinavhastenrath',
    linkedIn: 'https://www.linkedin.com/in/christinahastenrath/',
    facebook: 'https://www.facebook.com/Christinahastenrath',
    twitter: '@ettinchen',
    currentCity: 'San Francisco',
    previousCities: [
      'Cologne', 'Brighton', 'London', 'Melbourne', 'Amsterdam'
    ],
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

app.get('/api/experience', (req, res) => {
  res.json(
    [{
    company: 'Postman',
    title: 'Software Engineer',
    year: 'June 2019 - current',
    location: 'San Francisco, USA',
    responsibilites: [
      'Lead Developer on Postman Learning Center - Open Source JamStack', 
      'Lead Developer on Postman Wordpress Blog',
      'Active Contributor to Postman Marketing Webssite on BitBucket'
    ]
  },
  {
    company: 'Usabilla',
    title: 'Customer Success Manager',
    year: 'Jan 2018 - Nov 2018',
    location: 'Amsterdam, The Netherlands',
    responsibilites: [
      'Created and maintained partnerships with all customers while maximizing growth and reduced churn, increased customer retention by 35%','Onboarded clients and dove into their digital strategy to drive product adoption',
      'Developed a deep understanding of the Usabilla solution to proactively advise customers on how to capitalize on their investment',
      'Collaborated with other teams to formulate strategies, tactics, and workflows to ensure our customers achieve their individual ROI goals',
      'Created, managed and optimized Customer Success tooling, structure, and processes, Project Management of initiative that drove community success, thereby increased customer retention by 35%',
      'Liaised with other teams to share clients feedback and bring customer needs/insights to relevant stakeholders'
    ]
  },
  {
    company: 'Charles River Laboratories',
    title: 'Senior Account Specialist',
    year: '2016 - 2017',
    location: 'Cologne, Germany',
    responsibilites: [
      'Trained Managers, Team Leaders and Sales team of various European countries on product and PCP industry Microbial validation requirements.','On-boarded and coached two new junior Account Specialists in Europe.','Delivered on-demand support to internal global teams to drive adoption in the usage of systems and applications.','Led continuous improvement initiatives after the company acquisition to integrate processes and systems.','Supported international sales team – by serving as technical resource for customers and sales personnel, providing product presentations and running financial impact assessments for prospects.','Managed 200+ client accounts across entire Northern, Central and Eastern Europe territories.'
    ]
  },
  {
    company: 'Celsis',
    title: 'Account Manager',
    year: 'Jul 2014 - Aug 2016',
    location: 'Cologne, Germany',
    responsibilites: [
      'Improved the service delivery for over 100 clients in the cosmetic, food and beverage, and pharmaceutical industries across 14 European countries. Liaising between the clients and cross-functional Celsis teams (Production, Manufacturing, R&D, Finance, Technical and Customer Service).','Project Lead for technical software upgrade of all 340 European clients. Trained Global Team members and distributors in various European countries.','Forecasted, monitored, and communicated customer trends to secure efficiency and synergy of internal Celsis departments.','Installation and qualification of hardware and software on customer site. GMP/ISO environments documentation, process validation consulting and application support.','Evolved product literature, writing manuals to support internal global team best practices, increasing sales by 120%.'
    ]
  },
  {
    company: 'Mango',
    title: 'Sales Asssistant',
    year: 'Aug 2012- Mai 2013',
    location: 'Melbourne, Australia',
    responsibilites: [
      'Provided customer service on the shop floor, tills and dressing rooms, and training new staff.','Suggested how to reorganise the till area in order to secure effective and faster till operations, thereby increasing customer satisfaction. Changes were highly appreciated and implemented in this branch.'
    ]
  }
  ]);
});

app.get('/api/education', (req, res) => {
  res.json([
    {
      university: 'General Assembly',
      degree: '12-week, full-time, Web Development Immersive',
      year: 'Jan 2019 - Apr 2019',
      location: 'San Francisco, USA',
      thesis: 'see project get request: /api/projects'
    },
    {
    university: 'University College London',
    degree: 'Master of Science, Crime and Forensic Science',
    year: '2013-2014',
    location: 'London, Great Britain',
    thesis: 'Timeline evaluation and DNA quantification of earmarks on various surfaces in sterile and non-sterile conditions (1st Class)'
  },
  {
    university: 'University of Sussex',
    degree: 'Bachelor of Science (Honours), Biology',
    year: '2009-2013',
    location: 'Brighton, Great Britain',
    thesis: 'Investigation of the role of SCO2533 in sRNA control in Streptomyces Coelicolor (1st Class)'
  }
  ])
});

app.get('/api/projects', (req, res) => {
  res.json([{
    PersonalProjects: [
      {
        title: 'EmmaMeets',
        year: 'Apr 2019 - present',
        description: 'Web application for dog owners to create profiles for their pups and review dog-related products, which any user can add and edit. Full CRUD functionality on reviews and logged in users can upload images and reset their password by having a token sent to their email that is valid for 30 min. When they click on the token the users are send back to the EmmaMeets app where they can now change their password. This Capstone project was created entirely by myself, building the front and backend within 2 weeks time.',
        technologies:[ 'Python',
          'Peewee',
          'Flask', 
          'Flask Login', 
          'JavaScript',
          'jQuery',
          'CSS', 
          'HTML', 
          'Bulma',
          'Jinja2', 
          'SQLite', 
          'Postgresql'
        ],
        projectLink: 'https://emmameets.herokuapp.com/',
        github: 'https://github.com/ch264/emma_meets'
      },
      {
        title: 'Hangry',
        year: 'Mar 2019 - present',
        description: 'Hangry is a platform for users to create and save recipes. Users must register or login to view, create, and save recipes. They have the ability to edit their profile information, edit and delete their created recipes. They can also remove a recipe from their saved collection.',
        technologies: [
          'HTML', 'CSS', 'Python', 'Peewee', 'JavaScript', 'Flask', 'Bulma.css','jQuery','Typed.js'
        ],
        projectLink: 'https://project-hangry.herokuapp.com/',
        github: 'https://github.com/ch264/hangry'
    },
    {
      title: 'Wayfarer',
        year: 'Mar 2019 - present',
        description: 'Users can create a profile and leave reviews for cities they have traveled to. I build the entire backend with Express, Mongoose and MongoDB and connected the REACT frontend with Axios calls. I participated in setting up JWT authentication and deployed on Heroku in connection with mLab as well as project managed Git conflicts.',
        technologies: [
          'HTML', 'CSS', 'Bootstrap', 'Heroku', 'Semantic UI', 'Flask', 'React.js','Mongoose','Express'
        ],
        projectLink: 'https://project-hangry.herokuapp.com/',
        github: 'https://github.com/ch264/hangry'
    }],
  Hackathon: [
  {
    organiser: 'Twilio',
    title: 'random answer text message',
    description: 'random text answer based on a yes/no question messaged to: ',
    year: 'July 2019',
    technologies: 'Twilio API',
    github: 'This project is located in my personal Twilio Account Twiml Bin'
  },
  {
      organiser: ['DocuSign', 'Google Cloud', 'Wilderness Society'],
      title: 'WilderVoices',
      description: 'DocuSign Hackathon2019 iOS application. We won 3rd place from 27 entries. This Hackathon was organized by DocuSign together with Google Cloud and The Wilderness Society. WilderVoices aids national nature conservation efforts by enabling users to leave personal voice messages when out in the Wilderness and to record memories/moments, which are turned into text and send to appropriate departments.',
      year: 'Jun 2019 - present',
      technologies: ['Mongoose','Express','React-native','Node.js (MERN stack)', 'Firebase', 'HTML', 'Google API', 'DocuSign API'],
      github: 'https://github.com/rightbrainpapi/wildervoices/tree/master/pickitout_frontend'
  }],
  InternProjects: [{
    title: 'Christina`s Chrome extension',
    description: 'A mindfulness chrome extension that opens up in a new tab. Try it, it is free',
    year: 'Jan 2019 - Apr 2019',
    technologies: ['HTML','CSS','JavaScript','Google Developer'],
    github: 'https://chrome.google.com/webstore/detail/christinas-chrome-extensi/kmmafchjenalicnigbddpgjdigkmoomj'
  }, {
    title: 'Personal API Resume',
    description: 'Christina Hastenrath`s resume turned into an API',
    year: 'July 2019',
    technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'Express'],
    github: 'https://github.com/ch264/personal_api_retake'
  }]
  }]);
});

// future CRUD implementation with MongoDB and Mongoose

// get all Videogames READ CRUD
app.get('/api/videogames', (req, res) => {
  db.Videogames.find({}, (err, foundVideogames) => {
    if (err) return console.log(err);
    res.json(foundVideogames);
  });
});

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
