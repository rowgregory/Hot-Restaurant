// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var log = console.log;

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var newVariable = "Hello World";

var reservations = [
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    },
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    },
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    },
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    },
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    }
  ];

var waitlist = [
    {
        customer_name: "John",
        phone_number: "345-214-4829",
        customer_email:"rowgregory@gmail.com",
        customer_ID:"2"
    }
]

var visitorCount = 0;



// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/api/v0.1/tables", function(req, res) {
    return res.json(reservations);
  });
  app.post("/api/v0.1/tables", function(req, res) {
    var newRes = req.body;
    log(newRes);
        if(reservations.length < 4){
            reservations.push(newRes);
            return res.json(true);
        } else {
            waitlist.push(newRes);
            return res.json(false);
        }
  });
  app.get("/api/v0.1/waitlist", function(req, res) {
    return res.json(data.waitlist);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });