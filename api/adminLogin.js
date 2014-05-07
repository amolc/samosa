var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
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
 	  		resdata.message='successfully login welcom to .admin panal.';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='wrong user name or password ..please enter a valid one ';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });
 }; 