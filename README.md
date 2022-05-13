# Assignment 2 - Web API.

Name: Scott Gbenoba

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Added in prected routes in pages upcoming to popular. 
 + Added and login and SignUp pages with out authentication
 + 

## Setup requirements.

need mongo and mongod running in the background
need to set up npm run dev to run (local host 8080 run sever)
In React apps, need too put npm install, When finished installing, put npm start and app start too run.

## API Configuration

 creating an `.env` file 

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=FAST_REFRESH=false
secret=YourJWTSecret= REACT_APP_TMDB_KEY=
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

procted routes are added in upcmoing to popular, this is when only can see them pages after logging in

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

I've added new colour into the movies fliter area