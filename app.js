const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataRoutes = require("./routes/exercice2");
const commerceRoutes = require("./routes/exercice1");
const etablissementRoutes = require("./routes/exercice3");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/data", dataRoutes);
app.use("/commerce", commerceRoutes);
app.use("/etablissement", etablissementRoutes);

module.exports = app;
