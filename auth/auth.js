const fs = require('fs');
const request = require('request');

const refreshTokenUrl = fs.readFileSync("../config/refreshTokenUrl.txt");

var config = require("../config");

exports.authorize = function(req, res) {
	
	var authToken = "";
	console.log(JSON.stringify(req));
	//use refresh token
	if (Object.keys(req.query).length === 0) {
		var refreshToken =  fs.readFileSync("./refreshToken.txt");
		var url = refreshTokenUrl.replace("{0}", refreshToken);

		request.get({
			url: refreshTokenUrl.replace("{0}", refreshToken)
		},
		function(err, response, body) { 
			if(err){
				console.log(err);
				return;
			}

			console.log(response.statusCode);

			if(response.statusCode != 200){
				console.log(body); // If we get here, it is likely to be a 'bad request' because we are using the same refresh_token more than once
				return;
			}

			var b = JSON.parse(body);
			var access_token = b.access_token;
			var api_server = b.api_server;
			console.log(api_server);

			fs.writeFileSync("./authToken.txt", b.access_token);

		});
	}
	else {
		res.send("id: " + JSON.stringify(req.query));
	}
};