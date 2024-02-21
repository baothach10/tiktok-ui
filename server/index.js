const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const cors = require("cors")
// const mongoose = require('mongoose'); //MongoDB
require('dotenv').config();

// import express from 'express';
// import bodyParser from 'body-parser';
// // import routesHandler from './routes/handler.js';
// import cors from 'cors';
// import 'dotenv/config.js'
// // import associations from './models/associations.js'
// const routesHandler = require('./routes/handler.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', routesHandler);


// DB Connection
// MongoDB
// mongoose.connect(process.env.DB_URI)
//     .then(() => {
//         console.log('DB Connected!');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

app.use('/public', express.static('public'))
const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
