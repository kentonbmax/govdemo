require('dotenv').config();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(process.env.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(process.env.SSL_CERT, 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

app.get('/healthcheck', async (req, res) => {
  res.send('hi!')
});

app.post('/signup', async (req, res) => {

});

app.post('/login', async (req, res) => {
  const emailPattern = '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@inmar.com';
  const login = req.body.login;
  if (!login || !login.email) {
    res.send().status(401);
  }
})

app.put('/contact/group', async (req, res) => {

})

app.get('/contact/group', async (req, res) => {
  
})

//var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//httpServer.listen(8080);
httpsServer.listen(process.env.HTTPS_PORT);