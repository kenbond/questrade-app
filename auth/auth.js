const fs = require('fs');
const path = require('path');
const request = require('request');

const refreshTokenUrl = fs.readFileSync(path.join(__dirname, "..", "config", "refreshTokenUrl.txt"), "utf8");

var context = require("../context");

function authorizeWithRefreshToken(req, res) {
	var refreshToken =  fs.readFileSync("./refreshToken.txt", "utf8");
	var url = refreshTokenUrl.replace("{0}", refreshToken);

	request.get({
		url: refreshTokenUrl.replace("{0}", refreshToken)
	},
	function(err, response, body) { 
		if(err){
			console.log(err);
			res.send(err);
			return;
		}

		console.log(response.statusCode);

		if(response.statusCode != 200){
			res.send(body);
			return;
		}

		var b = JSON.parse(body);
		console.log(body);

		context.initAuth(b.access_token, b.refresh_token, b.api_server);
		
		res.send("ok");
	});
};

function authUsingLogin(req, res) {
	var authToken = "";
	console.log(JSON.stringify(req));
	res.send("id: " + JSON.stringify(req.query));
};

exports.authorize = function(req, res) { 
	if (Object.keys(req.query).length === 0) {
		authorizeWithRefreshToken(req, res);
	}
	else {
		authUsingLogin(req, res);
	}
};

