/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
/* Database configuration */
const database = require('./app/config/dbconfig');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 3001;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/* var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

/* Router configuration */
const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./app/routes/router'));
