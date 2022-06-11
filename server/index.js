// EXPRESS SERVER
// Bring in the express server and create application
let express = require('express');
const req = require('express/lib/request');
let app = express();  // creates Express application
let bookRepo = require('./repos/bookRepo');
let cors = require('cors'); // installed with: npm install cors

// Use the express Router object
let router = express.Router(); // to deal with endpoints

// Configure middleware to support JSON data parsing in request object
app.use(express.json());

// Configure CORS
app.use(cors({origin: 'http://localhost:3000'}));

// Create GET 'endpoint' to return a list of all books
router.get('/', function (req, res, next) { // request object, response object and next used for middleware error handling
    bookRepo.get(function (data) {
        res.status(200).json({ // res.status sends status code, json method to make json object or to show that it is json?
            "status": 200, // good to send more info about status here too and more
            "statusText": "OK",
            "message": "All books retrieved.",
            "data": data
        });
    }, function(err) {
        next(err);
    });
});

// Configure router so all routes are prefixed with /api/
app.use('/api/', router);

//Create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000...');
});
