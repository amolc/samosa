
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');

 exports.findAllstate = function(req, res) {
 	  CRUD(db, 'tbl_state').load({}, function (err, val) {	   	  	
 	  	res.jsonp(val);
 	  });  
 }; 
 
 