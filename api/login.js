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
 	var name = parseInt(req.params.name);
 	var password = parseInt(req.params.password);
 	 	 	
 	  CRUD(db, 'tbl_housing_association').load({m_name : name,building_password : password }, function (err, val) {	
 	  	console.log(val.length);
 	  	if()
 	  	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 