const express = require("express");
const app = express();
const routes = require("./routes");
const config = require("./config");
const bodyParser = require("body-parser");
const session = require("express-session");

// Load routes
app.use("/", routes);
