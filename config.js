const fs = require('fs');
const path = require('path');

var apiBaseUrl = "";

exports.setApiBaseUrl = function(url) {
	fs.writeFileSync("./apiBaseUrl.txt", url);
	apiBaseUrl = url;
};

exports.getApiBaseUrl = function() {
	if (apiBaseUrl.length == 0) {
		return fs.readFileSync(path.join(__dirname, "apiBaseUrl.txt"), "utf8");
	}
	return apiBaseUrl;
};

exports.getAuthToken = function() {
	var token = fs.readFileSync(path.join(__dirname, "accessToken.txt"), "utf8");
	console.log(token);
	return token;
};

exports.getAccountId = function() {
	return fs.readFileSync(path.join(__dirname, "accountId.txt"), "utf8");
};