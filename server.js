var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/view.html"));
});

app.get("/make", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/make.html"));
});

app.get("/api/:new?", function(req, res) {
  // What does this code do?
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }

    return res.send("No character found");
  }

  // What does this code do?
  return res.json(reservations);
});

app.post("/api/new", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});