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
 	var name=req.body.username;
 	var password=req.body.buildingpass; 
 	  CRUD(db, 'tbl_housing_association').load({housing_ass_name : name,building_password : password }, function (err, val) {	 
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcom to ..';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='wrong user name or password ..please enter a valid one ';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });
 }; 