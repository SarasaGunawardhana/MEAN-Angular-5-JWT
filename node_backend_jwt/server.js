// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

// add cors 
var cors = require('cors');
app.use(cors({
  origin:'http://localhost:4200'
}));

global.__root   = __dirname + '/';

// Import routes
let userRoutes = require("./Routes/user-routes")
var AuthController = require(__root + 'auth/AuthController');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://sanerathsami123:sarasa123@ds137483.mlab.com:37483/restapijwt', { useNewUrlParser: true });

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 3000;

// Send message for default URL
app.get('/', (req, res) => res.status(200).send({ status : "JWT Rest API is up and running "}));
app.get('/api', function (req, res) {
    res.status(200).send({ status : "End-Point => {api}"});
});


// Use Api routes in the App
app.use('/api/users', userRoutes)

// Use Api routes in the App
app.use('/api/auth', AuthController);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestAPI on port " + port);
});