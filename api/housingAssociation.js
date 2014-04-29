
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 exports.findHousinnAss = function(req, res) {
 	var id = parseInt(req.params.id);
 	  CRUD(db, 'tbl_housing_association').load({m_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 