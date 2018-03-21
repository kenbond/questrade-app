const request = require('request');

var config = require("../config");

const accountsRoute = "v1/accounts"

exports.accounts = function (req, res) {
	var baseUrl = config.getApiBaseUrl();
	var token = config.getAuthToken();

	request.get({
		url: baseUrl + 'v1/accounts',
		auth: { bearer : token }
	},
	function(err, response, body) {
		if(err) {
			console.log(err);
			res.send(err);
			return;
		}

		console.log(response.statusCode);
		console.log(body);
		res.send(body);
	});
};

exports.positions = function(req, res) {
	var baseUrl = config.getApiBaseUrl();
	var token = config.getAuthToken();

	request.get({
		url: baseUrl + 'v1/accounts/' + config.getAccountId() + '/positions',
		auth: { bearer : token }
	},
	function(err, response, body) {
		if(err) {
			console.log(err);
			res.send(err);
			return;
		}

		console.log(response.statusCode);
		console.log(body);
		res.send(body);
	});
};