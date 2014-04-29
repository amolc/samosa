var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
	database : 'icefire',
	user : 'root',
	password : '',
});

connection.connect(function(err) {
	if (err != null) {
		console.log('Error ' + err);
	}
});

exports.findAll = function(req, res) {
	connection.query("SELECT * from directory.employee order by id", function(err, rows) {
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
	});
};

exports.findById = function(req, res) {
	console.log(req.params);
	var id = parseInt(req.params.id);
	console.log('findById: ' + id);
	connection.query("SELECT * from directory.employee where id =" + id, function(err, rows) {
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
		//query returns array of arrays we need to return the first one only.
	});
};

exports.findByManager = function(req, res) {
	var id = parseInt(req.params.id);
	console.log('findByManager: ' + id);
	connection.query("SELECT * from directory.employee where managerId =" + id, function(err, rows) {
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
	});
};
