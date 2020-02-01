var express = require("express");
const url = require('url');
//var fs = require("fs");
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const api_key = process.env.API_KEY;

app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});