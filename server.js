var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/view.html"));
});

app.get("/make", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/make.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});