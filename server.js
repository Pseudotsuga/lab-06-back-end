'use strict';

// Define the requirements of the server
// 1. Express on top of Node
// 2. dotenv to specify port (consume .env files)
// 3. COrS (Cross-Origin Scripting)

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//Define Port to be listened to
const PORT = process.env.PORT;

//Default routes and error
app.use(express.static('./front-end'));

//Define Functional Routes

app.get('/location', (request, response) => {
  const geoData = require('./data/geo.json');
  const city = request.query.data;
  const locationData = new Location (city, geoData);
  response.send(locationData);
});

function Location(city, geoData){
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

//Non-valid page response
app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

//Begin listening to port
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
