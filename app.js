const express = require("express");
const app = express();
const routes = require("./routes");
const config = require("./config");
const bodyParser = require("body-parser");
const session = require("express-session");

// Set view engine
app.set("view engine", "ejs");

// Serve static files
app.use("/assets", express.static("assets"));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "yourSecretKey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// Use routes
app.use("/", routes);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
