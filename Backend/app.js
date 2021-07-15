require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3017;


//require component



app.use(express.json()); // for data json
app.use(express.urlencoded({ extended: false }));// for  data http

//connect to mongodb
mongoose.connect(process.env.DATABAS, { useNewUrlParser: true, useNewUrlParser: true })
    .then(() => console.log('server connect'))
    .catch(() => console.log('err server'))


//set up server
app.listen(port, () => console.log('http://localhost:' + port));