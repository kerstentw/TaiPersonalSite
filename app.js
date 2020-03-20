require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const site = require("./src");

app.use(cors());
app.use('/static',express.static('./static'))


app.get('/', function (req, res) {
 res.sendFile(__dirname + '/templates' + '/index.html');
});

app.get('/develop', function (req, res) {
 res.sendFile(__dirname + '/templates' + '/tk_developer.html');
});

app.get('/professional', function (req, res) {
 res.sendFile(__dirname + '/templates' + '/tk_professional.html');
});

app.get('/design', function (req, res) {
 res.sendFile(__dirname + '/templates' + '/tk_designer.html');
});

app.get('/willsmithrulez', function (req, res) {
 res.sendFile(__dirname + '/templates' + '/lol.html');
});

app.get('/languages', function (req, res){
  res.send({...site.languages})
})

app.get('/bonefides', function (req, res){
  res.send({...site.bonefides})
})

// Run Script
console.log(`Listening on ${process.env.PORT}`);
app.listen(process.env.PORT);
