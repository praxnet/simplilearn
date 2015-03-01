/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

var express = require('express'),
	routes = require('./routes'),
	courseGetService = require('./routes/courseGetService'),
	coursePostService = require('./routes/coursePostService'),
	http = require('http'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	fs = require('fs');

// setup middleware
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// setting up the database
var mongoUrl;
if(process && process.env && process.env.VCAP_SERVICES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES);
  for (var svcName in vcapServices) {
    if (svcName.match(/^mongo.*/)) {
      mongoUrl = vcapServices[svcName][0].credentials.uri;
      mongoUrl = mongoUrl || vcapServices[svcName][0].credentials.url;
      break;
    }
  }
} 
else {
  mongoUrl = "localhost:27017/courseApp";
}

mongoose.connect(mongoUrl);

var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");

var services = JSON.parse(process.env.VCAP_SERVICES || "{}");

var host = (process.env.VCAP_APP_HOST || 'localhost');

var port = (process.env.VCAP_APP_PORT || 3000);


// requirements
/*app.get('/api/GET/industries', notifierGetServices.getIndustryList);
app.get('/api/GET/applications/:inId', notifierGetServices.getAppList);
app.get('/api/GET/devices/:appId', notifierGetServices.getDevices);
app.get('/api/GET/savedMessages/:loginId', notifierGetServices.getSavedMessages);
app.get('/api/GET/historyMessages/:loginId', notifierGetServices.getHistoryMessages);
app.post('/api/POST/pushNotes', notifierPushService.pushNotification);*/

app.get('/getUserInfo/:id',courseGetService.getUser);
app.get('/getQuiz/:id',courseGetService.getQuiz);

app.post('/postFUser/:id', coursePostService.postFUser);


// used by sample app
//app.post('/api/POST/devices', notifierPostServices.postToDevices);

// dummydata services
/*
app.post('/postCourses', coursePostService.postCourses);
app.post('/postCourseMaterial', coursePostService.postCourseMaterial);
app.post('/postCourseQuiz', coursePostService.postCourseQuiz);
app.post('/postUserData', coursePostService.postUserData);
app.post('/postUserCourse', coursePostService.postUserCourse);*/


var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");

var services = JSON.parse(process.env.VCAP_SERVICES || "{}");

var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);

// Start server
http.createServer(app).listen(port, function(){
  console.log('App started on port ' + port);
});
