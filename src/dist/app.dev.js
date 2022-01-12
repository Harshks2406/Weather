"use strict";

var express = require('express');

var path = require('path');

var hbs = require('hbs');

var app = express();
var port = process.env.PORT || 8000;
var static_path = path.join(__dirname, '../public');
var templatepath = path.join(__dirname, "../templates/views");
var partialpath = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);
app.use(express["static"](static_path));
app.get("", function (req, res) {
  res.render('index.hbs');
});
app.get("/weather", function (req, res) {
  res.render('weather.hbs');
});
app.get("*", function (req, res) {
  res.render('404error.hbs', {
    errorMsg: 'Oops! Page Not Found.'
  });
});
app.listen(port, function () {
  console.log("Server started on localhost:".concat(port));
});