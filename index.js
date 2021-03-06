// Import express
let express = require('express');
// Import Body parser (deprecated)
// let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
// Deprecated: app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// Deprecated: app.use(bodyParser.json());
app.use(express.urlencoded());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://moat:moatdb@moatfrontend.dix5s.mongodb.net/MoatUI?retryWrites=true&w=majority', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Moat API on port " + port);
});