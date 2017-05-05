var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'rujia',
     user : 'ftdev',
	password : '10gXWOqeaf',
    host :'apps.fountaintechies.com',
 });
 var CRUD = require('mysql-crud');
 exports.login = function(req, res) {
 	var username=req.body.username;
 	var password=req.body.password; 
 	  CRUD(db, 'admin_user').load({name: username,password : password }, function (err, val) {	
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcome to admin panel.';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='wrong username or password, please try again!  ';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });
 }; 