const express = require("express");
const https = require('https');
const fs = require('fs');
const app = express();

const options = {
  key: fs.readFileSync("ssl/privkey.pem"),
  cert: fs.readFileSync("ssl/fullchain.pem")
};

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  https.createServer(options, app).listen(8080);
}
else {
	 app.listen(3001);
}

var context = require(".context");
var auth = require("./auth/auth");
var accounts = require("./accounts/accounts");

context.initConfig();

app.get("/", (req, res) => res.send("test"));

app.get("/api/test", (req, res) => {
  res.send({ foo: "fuck"});
});

app.get("/api/auth", auth.authorize);

app.get("/api/accounts", accounts.accounts);
app.get("/api/positions", accounts.positions);
app.get("/api/activities", accounts.activities);
