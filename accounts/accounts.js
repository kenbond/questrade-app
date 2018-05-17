const request = require('request');

var context = require("../context");

var accountId = context.getAccountId();

exports.accounts = function (req, res) {
	var baseUrl = context.getApiBaseUrl();
	var token = context.getAuthToken();

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
	var baseUrl = context.getApiBaseUrl();
	var token = context.getAuthToken();

	request.get({
		url: baseUrl + 'v1/accounts/' + accountId + '/positions',
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

exports.activities = function(req, res) {
	var baseUrl = context.getApiBaseUrl();
	var token = context.getAuthToken();

	var startTime = new Date("2017-01-01");
	var endTime = new Date("2017-01-30");

	request.get({
		url: baseUrl + 'v1/accounts/' + accountId + '/activities?' + "startTime=" + startTime.toISOString() + "&endTime=" + endTime.toISOString(),
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