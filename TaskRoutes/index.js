// Include express module
var express = require('express');

// create controller object
var Controller_tasks = require('../TaskController/AllTask.js');

// create node express object
var myApp = express();

// Task 1
myApp.get("/task-1/I/want/title/", Controller_tasks.getTitles);
// Task 2
myApp.get("/task-2/I/want/title/", Controller_tasks.getTitlesAsync);
// Task 3
myApp.get("/task-3/I/want/title/", Controller_tasks.getTitlesRSVP);
 //error handling
 myApp.get("/error-handling/I/want/title/",Controller_tasks.getErrorHandle);

// empty url handling
myApp.get("*", function (request,response) {
	response.status(404).send('not found');
});

myApp.listen(8081);
