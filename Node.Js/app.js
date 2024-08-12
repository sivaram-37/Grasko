const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || "Unknown user";
  res.send(
    `<h1>Welcome ${userName}</h1><form method='post' action='/'><input type='text' name='username'/><button type='submit'>SUBMIT</button></form>`
  );
});

app.listen(3000);
