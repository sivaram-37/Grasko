const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // telling app that there is a views and it path

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || "Unknown user";
  res.render("index", {
    user: userName,
  });
});

app.listen(3000);
