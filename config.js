var apiBaseUrl = "";

export.setBaseUrl = function(url) {
	apiBaseUrl = url;
};

export.getApiBaseUrl = function() {
	return apiBaseUrl;
};