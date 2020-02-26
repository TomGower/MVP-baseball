const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const db = require('../database/index.js');
const port = 2017;

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});