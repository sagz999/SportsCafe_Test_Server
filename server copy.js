const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const db = require("./config/dbConnection");
const routes = require("./routes/routes");
const { notFound, errorHandler } = require("./middleware/httpErrorHandler");

env.config();

const PORT = process.env.PORT || 8000;

//connecting to database
db.connect((err) => {
  if (err) {
    console.log("Database connection error:" + err);
  } else {
    console.log("Database connected to PORT:27017");
  }
});

//Middleware to log HTTP requests
app.use(logger("dev"));

//Middleware to enable CORS
app.use(cors());

//Middleware to parse incoming requests with JSON payloads
app.use(express.json());

//each routes based on end points are specified seperately inside routes
app.use("/", routes);

//Middleware catch 404 and forward to error handler
app.use(notFound);

//Middleware to handle forwarded error
app.use(errorHandler);

//starting server
app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error in server setup");
  }
  console.log(`server started on PORT:${PORT}`);
});
