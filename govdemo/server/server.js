require('dotenv').config();
var fs = require('fs');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser')
var privateKey  = fs.readFileSync(process.env.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(process.env.SSL_CERT, 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

// config server 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Logins = require('./logins')
const ContactGroup = require('./ContactGroup');

let loginData = new Logins();
let contactGroupData = new ContactGroup();

app.get('/healthcheck', async (req, res) => {
  res.send('hi!')
});

app.post('/signup', (req, res) => {
  var signup = req.body;

  if (!signup.email || 
    !signup.password || 
    !signup.firstName ||
    !signup.email.includes('@') ||
    signup.password.length < 6) {
    res.send(404);
  }

  var result = loginData.add(signup.email, signup.password);

  if(!result) {
    res.send(401);
  } 
  try {
    res.send(200);
  }
  catch(err) {
    console.log(err);
  }

});

app.post('/login', (req, res) => {
  const login = req.body;
  if (!login.email || 
    !login.password || 
    !login.email.includes('@') ||
    login.password.length < 6) {
    res.send(404);
  }

    if(!loginData.valid(login.email, login.password)){
      res.send(401);
    }

    res.send({status: 'Login successful!'});
})

app.post('/contact/group', (req, res) => {

})

app.get('/contact/group', (req, res) => {
  contactGroupData.get
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(process.env.HTTPS_PORT);