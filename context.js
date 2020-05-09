const fs = require('fs');
const path = require('path');

var config = {};

exports.initConfig = function(env) {
	config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));
	//exports.databaseSettings = config.database;
}

exports.initAuth = function(accessToken, refreshToken, baseUrl) {
	config.accessToken = accessToken;
	config.apiBaseUrl = baseUrl;
	config.refreshToken = refreshToken;

	fs.writeFileSync("./apiBaseUrl.txt", baseUrl);
	fs.writeFileSync("./refreshToken.txt", refreshToken);
	fs.writeFileSync("./accessToken.txt", accessToken);
};

exports.setApiBaseUrl = function(url) {
	fs.writeFileSync("./apiBaseUrl.txt", url);
	apiBaseUrl = url;
};

exports.getApiBaseUrl = function() {
	if (config.apiBaseUrl.length == 0) {
		return fs.readFileSync(path.join(__dirname, "apiBaseUrl.txt"), "utf8");
	}
	return apiBaseUrl;
};

exports.getAuthToken = function() {
	if (config.accessToken.length == 0) {
		return fs.readFileSync(path.join(__dirname, "accessToken.txt"), "utf8");
	}
	return accessToken;
};

exports.getRefreshToken = function() {
	if (config.refreshToken.length == 0) {
		return fs.readFileSync(path.join(__dirname, "refreshToken.txt"), "utf8");
	}
	return refreshToken;
};

exports.getRefreshTokenUrl = function() {
	return config.refreshTokenUrl;
}

exports.getAccountId = function() {
	return config.accountId;
};

exports.getDbPassword = function() {
	return fs.readFileSync(path.join(__dirname, "dbPassword.txt"), "utf8");
}