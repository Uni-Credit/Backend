const express = require("express");
const bodyParser = require("body-parser"); 
const morgan = require("morgan");
const cors = require("cors"); 
const app = express();
const authenticationRoute = require('./routes/auth.js');
 
const transactionRoute = require('./routes/transaction.js');
const ModelsController = require("./models/index.js");
const pool = require("./services/db.js");


// * Cors 
app.use(cors({origin: '*'})); 


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
 
  // Request methods you wish to allow 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
}); 

// * Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));
app.use(express.json());

let PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
 
app.use('/auth', authenticationRoute);
app.use('/transaction', transactionRoute); 
  
ModelsController.createModels();
app.use("*", (req, res) => { 
  res.send("Route not found");
});