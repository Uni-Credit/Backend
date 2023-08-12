const express = require("express");
const bodyParser = require("body-parser"); 
const morgan = require("morgan");
const cors = require("cors"); 
const app = express();
 
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

app.use('auth/', /* Authentication Route */);