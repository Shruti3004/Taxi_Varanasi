const express = require("express");
const path = require("path");
const dataAbout = require("./data/about.json");
const dataKashi = require("./data/Kashi-Vishwanath-Darshan.json");
const dataPlaces = require("./data/Top-10-Places-in-Varanasi.json");
const dataCarHire = require("./data/carHire.json");
const dataTaxiService = require("./data/taxi-and-cab-booking-service-in-varanasi.json");
const bodyParser = require("body-parser");

// Init express
const app = express();

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sending SMS
// require("./textMessage")(app);
// Sending Email
require("./email")(app);

// Dynamic Serving of Data From Backend
// app.get("/:name", (req, res) => {
//   var name = req.params.name;
//   if (data[name]) {
//     console.log("req recieved with name" + name + "with data " + data[name]);
//     res.json(data[name]);
//   } else res.json("error");
// });

// Serving of Data From Backend
app.get("/dataAbout", (req, res) => {
  res.json(dataAbout);
});
app.get("/dataKashi", (req, res) => {
  res.json(dataKashi);
});
app.get("/dataPlaces", (req, res) => {
  res.json(dataPlaces);
});
app.get("/dataCarHire", (req, res) => {
  res.json(dataCarHire);
});
app.get("/dataTaxiService", (req, res) => {
  res.json(dataTaxiService);
});

// Hoisting purpose
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on Port: ${PORT}`);
});
