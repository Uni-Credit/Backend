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
app.use(cors());

// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));


app.use("*", (req, res) => {
  res.send("Route not found");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

app.use('auth/', authenticationRoute);
app.use('transaction/', transactionRoute); 
 

ModelsController.createModels();