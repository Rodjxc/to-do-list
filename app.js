const express = require ('express');

// Loads the Express framework, which is a web application framework 
// for Node.js that makes it easy to create web applications and APIs.

const app = express();

//creates an Express application, which is an instance of the Express framework.

app.set('view engine', 'ejs'); 

//configures the Express application to use EJS (Embedded JavaScript) as its template engine.
// This allows you to use EJS syntax to generate HTML on the server side.

app.use(express.urlencoded({ extended: true }));

// App.use Is middleware that allows the server to handle HTTP POST requests. 
//It is used to parse the request body and make it available as a JavaScript 
//object on the request object (req.body).


app.get ("/", function(req, res){



// creates a route for the root path ("/") and a callback function that will be called 
//when a client makes a GET request to that path. This function takes in a request object
// (req) and a response object (res) as its parameters.

// ========================================================

var today = new Date();
var currentDay = today.getDate();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//we create an array with the days of the week, where 0=Sunday,1=Monday and so on

const d = new Date();

//We use the built in JS object that allows us to work with days and times, and we assign
//d that value

var day = weekday[d.getDay()];

// The day variable is assigned the value of the day of the week by using the number 
// obtained from the getDay() method as the index of the weekday array. For example, 
// if the current day is a Tuesday, d.getDay() would return 2, and weekday[2] would 
// be "Tuesday". So day variable would be assigned the value "Tuesday".

res.render ("list", {kindOfDay: day })
});

// We create our response by rendering a file called "list", which has to exist inside a
//views folder (because is what the documentation says), and has to have the extension .ejs.
//Inside that file we're passing a single variable called "kindOfDay", and the value that
//we're giving it is the value of our variable "day"


// ========================================================
app.listen (3000,function(){
  console.log ("Youre now connected on port 3000");
})

//starts the Express application and tells it to listen for incoming requests on port 
//3000. When it receives a request, it will execute the corresponding callback function. 
//The console.log statement is used to confirm that the server is running.