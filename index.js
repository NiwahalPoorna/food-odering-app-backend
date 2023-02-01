const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./DataBase');
var clientController = require('./Controllers/ClientController');
var foodController = require('./Controllers/FoodController')


var app = express();
app.use(bodyparser.json());
app.use(cors());


app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/clients', clientController);
app.use('/foods',foodController );


//http://localhost:3000/clients
// http://localhost:3000/foods
