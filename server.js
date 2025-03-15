const express = require("express");
var cors = require('cors');
const https = require("http");
const path = require("path");
const app = express();
require('dotenv').config();
const moment = require("moment");
const conn = require("./backend/models/db")

app.set('view engine', 'ejs');
app.use(cors({ origin: "*"}));
app.use(express.static("public"));
app.use(express.json());
app.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const httpsServer = https.createServer(app);

// //Add Employee routes
require("./backend/routes/employee.routes.js")(app);

httpsServer.listen(process.env.NODE_PORT, () => {
  console.log('Server is running on port:'+process.env.NODE_PORT);
});