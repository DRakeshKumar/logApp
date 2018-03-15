var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressJwt = require('express-jwt');
var path = require('path');
var http = require('http');
var app = express();
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(cookieParser());
app.use(session({
  secret: 'hubcontrol',
  saveUninitialized: true,
  resave: true,
  cookie: {secure: false, maxAge: 86400000 }
}));
/*app.use(session({
  secret: 'hubcontrol',
  saveUninitialized: true,
  resave: true
  cookie: {secure: false, maxAge: 60000 },
}));*/
// use JWT auth to secure the api
console.log('start')
app.use('/dashboard',expressJwt({ secret: 'shhhhhhared-secret'}).unless({path: ['/login']}));
console.log('end')
//app.use('/admin', expressJwt({ secret: config.secret }).unless({ path: ['/admin/users/authenticate', '/login'] }));
app.use(express.static(__dirname + '/public'));
// API file for interacting with MongoDB
const apiRoute = require('./server/routes/apiRoute');
const servicesRoute = require('./server/routes/servicesRoute');
const propertyRoute = require('./server/routes/propertyRoute');
const residentRoute = require('./server/routes/residentRoute');
const serviceProviderRoute = require('./server/routes/serviceProviderRoute');
const publicApiRoute = require('./server/routes/publicApiRoute');
const webRoute = require('./server/routes/webRoute');
const cronRoute = require('./server/routes/cronjobRoute');
var configDB = require('./server/config/database');
// Parsers


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/web', webRoute);
app.use('/cron', cronRoute);
app.use('/api', apiRoute);
app.use('/services', servicesRoute);
app.use('/property', propertyRoute);
app.use('/resident', residentRoute);
app.use('/serviceprovider', serviceProviderRoute);
app.use('/api/public', publicApiRoute);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
