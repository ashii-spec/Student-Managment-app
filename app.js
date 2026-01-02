const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/students", studentRoutes);

module.exports = app;