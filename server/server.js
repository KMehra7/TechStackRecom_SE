const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* Loading the environment variables from the .env file. */
require("dotenv").config();

const PORT = process.env.PORT || 5005;
const MONGODB_URI = "mongodb+srv://techstackrecom:techstackrecom@cluster0.oux83li.mongodb.net/?retryWrites=true&w=majority" || "mongodb://localhost/todoapiDB";
const ActivityRouter = require("./routes/activity.route");

/* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(express.json());

/* Allowing the frontend to access the backend. */
app.use(cors());

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Telling the application to use the ActivityRouter for any requests that start with "/api". */
app.use("/api", ActivityRouter);

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, ()=> console.log("Server stated on port 5005"));
