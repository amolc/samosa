var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : process.env.DB_NAME,
    user : process.env.DB_USER,
	password : process.env.DB_PASSWORD,
    host :process.env.DB_HOST,
 });
 var CRUD = require('mysql-crud');
 exports.login = function(req, res) {
 	var username=req.body.username;
 	var password=req.body.password; 
 	  CRUD(db, 'tbl_housing_admin').load({username: username,password : password }, function (err, val) {	
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcome to admin panel.';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='wrong username or password please enter a valid password ';
 	  	} 	  	  
 	  	res.jsonp(resdata);
 	  });
 }; 