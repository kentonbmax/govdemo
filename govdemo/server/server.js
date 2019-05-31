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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Logins = require('./logins')


let loginData = new Logins();

app.get('/healthcheck', async (req, res) => {
  res.send('hi!')
});

app.post('/signup', (req, res) => {
  var signup = req.body;

  var result = loginData.add(signup.email, signup.password);

  if(!result) {
    res.send(401);
  } 

  res.send(200);
});

app.post('/login', async (req, res) => {
  const login = req.body;
  if (!login || !login.email) {

    if(!login.email.includes('@') || !loginData.valid(login.email, login.password)){
      res.send().status(401);
    } else {
      res.send(200);
    }
  }
})

app.put('/contact/group', async (req, res) => {

})

app.get('/contact/group', async (req, res) => {
  
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(process.env.HTTPS_PORT);