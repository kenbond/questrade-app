const express = require("express");
const fs = require('fs');
const app = express();

app.listen(3001);


var context = require("./contextapt");
// var auth = require("./auth/auth");
// var accounts = require("./accounts/accounts");

context.initConfig();

app.get("/", (req, res) => res.send("test"));

app.get("/v1/test", (req, res) => {
  res.send({ foo: "fuck"});
});

//app.get("/api/auth", auth.authorize);

// app.get("/api/accounts", accounts.accounts);
// app.get("/api/positions", accounts.positions);
// app.get("/api/activities", accounts.activities);
