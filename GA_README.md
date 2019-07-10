# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Personal API

It's time to have some fun and play with the technologies you've learned in the past week. Your goal is to build a API about yourself. Your API will incorporate:
* Well-documented **JSON API** Endpoints
* A full set of **REST-ful Routes** (GET, POST, UPDATE, DELETE)
* At least one **CRUD-able resource** (Create, Read, Update, Destroy)
* and an `/api/profile` endpoint with some basic **details about you**

Finally, you will **consume your API** using AJAX and **render the results** to the page using jQuery.

Please fork & clone this repo to get started.

## Part 0. Deploy to Heroku
Before we start coding, our first goal together is to configure our application so that it can be deployed to Heroku (a web application host).

Follow the instructions here: [Deploying Express Apps to Heroku](https://git.generalassemb.ly/sf-wdi-45/how-to-heroku/blob/master/README.md)

As you continue to work on this project, you'll need to remember to push your changes to heroku (just like you would with github!):

```bash
# git add . -A
# git commit -m "detailed description of what I changed"
git push heroku master
heroku open
```

It's common for code to break "in production" (broken links, different environment, missing dependenies...), even if it worked in development, so do your best to debug! Let us know if you get stuck.

## Part 1. Personal API
Now that we're deployed, it's time to start coding your "personal" api!

#### Minimum Requirements

- **Documented API Endpoints**

    - You must document your API endpoints. We really want to know *how* to use your API! And for starters, we need to know what endpoints exist! (Do this step first! _Plan plan plan!_)
    - One cool way to do this is to create an endpoint at `/api` that describes all the available endpoints. We've set you up with an example in `server.js`. Make sure to update it to fill it in with your own information!
        + Here's a good example student `/api` endpoint:
         <img width="500" alt="example api documentation" src="https://cloud.githubusercontent.com/assets/1489337/22841538/dc0b7f26-ef86-11e6-9a56-013bbe51792a.png">

        + See the [Open API Initiative](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object-example) for what this looks like in practice.
- **A Profile Endpoint** (`/api/profile`) that responds with *hard-coded* data:

    + `name` - a string
    + `githubUsername` - a string
    + `githubLink` - a url to your github profile
    + `githubProfileImage` - the url of your github profile image
    + `personalSiteLink` - a link to your personal site.
    + `currentCity`
    + `pets` - an array of your pets
        + e.g. `[{name: "foo", type: "Cat", breed: "Siamese"}, {name: "bar", type: "Dog", breed: "Dalmation"}]`
        + if you do not have any pets, please get creative, or use hobbies instead
    + Please hardcode it! It would be seriously overkill to save a single profile to the database.
- **At least one resource (mongoose model)** that you can _*CRUD*_ using _*RESTful Routes*_
    - That means endpoints for `index`, `show`, `create` `update`, `delete`!
    - Here are some ideas:
        * **RECOMMENDED:** `projects` that you have built for this class
            - `_id`, name, description, githubRepoUrl, deployedUrl, screenshot
        * `places` that you've lived or that are important to you
            - `_id`, description, town, state, country, years, gps: {lat, lon}, photo
        * `destinations` you've visited, or `vacations` you're planning
            - `_id`, country, date, duration, photo
        * `books` you've read or love
            - `_id`, title, author, image, releaseDate, characters
        * `movies` or `shows` you like
            - `_id`, title, season, director
        * `portfolioProjects` or `lyrics` you've written
            - `_id`, title, body, date
        * Wish list (e.g. `gifts` or `wishes`)
            - `_id`, description, price, amazonLink

All API Endpoints must return JSON.

<!--- You will be able to see if your API is up and running because [this api aggregator](https://api-aggregator.herokuapp.com/) will be able to consume your data. Check back on it to see if it's working for your code! Note: This won't be set up until you send your instructors the name of your Heroku app! --->

> **Pro-Tip**: One good strategy is to add the database *last*. Start with your api routes and some hard-coded data. Make sure it's working the way you want before tackling the database layer!

#### API Stretch Goals
* Profile info stretch goals
    * Add a `daysOld` field that calculates how many days old you are.
    * Add an `isAwake` field that's only `true` between 8am and 10pm!
* CRUD resource stretch goals
    * Use query parameters to filter results from one of your CRUD endpoints:
        - e.g. `?limit=2` only return two results
    * Create a `/search` endpoint
        - e.g. `?q=mad+men` only returns tv shows with that in the title
        - e.g. `?type=romance` only returns romance novels

#### Examples
An example API for 'Jon Snow' might have endpoints like:

    JSON API Endpoint           Response JSON
    =============               =============
    GET /api/profile            {
                                  name: "Jon Snow",
                                  githubLink: "http://github.com/u-know-nothing-jon-snow",
                                  currentCity: "The Wall",
                                  isAwake: false,
                                  familyMembers: [
                                    { name: 'Arya Stark', relationship: 'sister' },
                                    { name: 'Bran Stark', relationship: 'brother' }
                                  ]
                                }

    GET /api/projects           [
                                 {
                                    \_id: 2,
                                    name: 'Defeat the wildlings',
                                    type: 'quest',
                                    opponents: [ 'Mance Rayder', 'Lord of Bones'],
                                    status: 'resolved'
                                 },
                                 {
                                    \_id: 3,
                                    name: 'Save the wildlings',
                                    type: 'campaign',
                                    opponents: ['the Night Watch', 'the Others'],
                                    status: 'pending'
                                 }
                                ]

    GET /api/projects?limit=1   [ { \_id: 2, name:'Defeat...' } ]

    GET /api/projects?status=pending
                                [ { \_id: 3, name:'Save...' } ]                                
    GET /api/projects/2         { \_id: 2, name:'Defeat...' }

    POST /api/projects          etc
    PUT /api/projects/2         etc
    DELETE /api/projects/2      etc

Make sure to spend time planning this part out!

## Bonus: Personal Dashboard

Consume the Personal API you just created, and use it to build your own personal dashboard.

* Create an `index.html` **homepage** that's linked to your main JavaScript and CSS files.
* Use **jQuery** and **AJAX** to consume your Personal API.

* Use **Template Strings** and **Array Iteration** to render data to the page.

* Display **at least one image/gif** that you retrieved from your Personal API.
* Create **at least one form**, so you can CRUD at least one of your resources.
* Get rid of that ugly blue background. Style it up!

<br>
<br>

<img src="https://media.giphy.com/media/mWUuD8qPSi5B6/giphy.gif" width="400">
