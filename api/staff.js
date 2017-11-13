
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
  	database : process.env.DB_NAME,
    user : process.env.DB_USER,
  	password : process.env.DB_PASSWORD,
    host :process.env.DB_HOST,
 });

 var CRUD = require('mysql-crud');
 var staffCRUD=CRUD(db, 'tbl_staff');
 exports.findStaff = function(req, res) {

 	var id = parseInt(req.params.id);
 	console.log(id);
 	  staffCRUD.load({staff_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 
 
 /******************for select all staff *****************/

  exports.StaffList = function(req, res) {
 	  staffCRUD.load({}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });   
 }; 

  exports.allStaff = function(req, res) {
 		 var query = "SELECT tbl_staff.staff_id , tbl_staff.staff_name , tbl_staff.state_id , tbl_state.state_name FROM tbl_staff INNER JOIN tbl_state ON tbl_staff.state_id = tbl_state.state_id";
db.query(query, function(err, rows){
    res.jsonp(rows);
   });
 }; 


/******************for create new staff it inster value in to data base*****************/ 
 
 exports.createNewStaff = function(req, res) {
 	console.log(req.body);
 	 var staffName=req.body.staff_name;
 	 var stateID=req.body.stateID;
 	 	 
 	console.log('name '+staffName);
 	console.log('id'+stateID);
  staffCRUD.create({'staff_name' :staffName,'state_id' : stateID}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'Staff successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added '};
	  	      res.jsonp(resdata);
	  	     }
      });
    };
     
 /******************  End create *****************/



/******************for  delete data from  data base*****************/

exports.deleteStaff = function(req, res) {
   var staff_id=parseInt(req.params.id);
   staffCRUD.destroy({'staff_id' : staff_id}, function (err, vals) {
   console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'staff successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

exports.updateStaff = function(req, res) {
	mid=req.body.staff_id;
 	staffname=req.body.staff_name;
 	stateid=req.body.stateID;
 staffCRUD.update({'staff_id' : mid}, {staff_name:staffname,state_id:stateid}, function (err, vals) {
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'staff successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/














