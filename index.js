const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());
app.use('/employees', employeeController);


app.listen(3000, () => console.log("Server started on port 3000"));