var mysql = require('mysql');
var context = require("../context");
 
function createConnection() {
	var connection = mysql.createConnection({
	  host     : context.databaseSettings.host,
	  user     : context.databaseSettings.user,
	  password : context.getDbPassword(),
	  database : context.databaseSettings.name
	});
	return connection;
}

exports.runQuery = function(query) {
	var connection = createConnection();
	connection.connect();

	connection.query(query, function(error, results, fields) {
		if (error) throw error;
		console.log(results[0]);	
	});

	connection.end();
};