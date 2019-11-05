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

// TODO: Redefine this function to work for lab6
// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//     name: 'Calvin\'s dog, Sadie',
//     school: 'ACME School of Airplane Flying',
//   }
//   response.status(200).json(airplanes);
// });

//Non-valid page response
app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

//Begin listening to port
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
