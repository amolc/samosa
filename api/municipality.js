
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 exports.findMunicipality = function(req, res) {
 
 	var id = parseInt(req.params.id);
 	  CRUD(db, 'tbl_municipality').load({state_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 









