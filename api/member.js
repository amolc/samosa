//member.js

var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
    database : 'rujia',
    user : 'ftdev',
	password : '10gXWOqeaf',
    host :'apps.fountaintechies.com',
});

var CRUD = require('mysql-crud');
var memberCRUD = CRUD(db, 'tbl_member');

exports.findMember = function(req, res) {

 	var id = parseInt(req.params.id);
 	console.log(id);
 	memberCRUD.load({member_id : id}, function (err, val) {res.jsonp(val);});
 	    
}; 

/******************for select all member *****************/

exports.memberList = function(req, res) {
    memberCRUD.load({}, function (err, val) {
      res.jsonp(val);
    });   
}; 

exports.allmember = function(req, res) {
    var query = "SELECT tbl_member.member_id , tbl_member.member_name , tbl_member.state_id , tbl_state.state_name FROM tbl_member INNER JOIN tbl_state ON tbl_member.state_id = tbl_state.state_id";
db.query(query, function(err, rows){
    res.jsonp(rows);
    });
}; 


/******************for create new member it inster value in to data base*****************/ 
 
 exports.createNewMember = function(req, res) {
 	console.log(req.body);
 	 var memberName=req.body.member_name;
 	 var stateID=req.body.stateID;
 	 	 
 	console.log('name '+memberName);
 	console.log('id'+stateID);
  memberCRUD.create({'member_name' :memberName,'state_id' : stateID}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'member successfully added'};
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

exports.deleteMember = function(req, res) {
   var member_id=parseInt(req.params.id);
   memberCRUD.destroy({'member_id' : member_id}, function (err, vals) {
   console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'member successfully deleted'};
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

exports.updateMember = function(req, res) {
	mid=req.body.member_id;
 	membername=req.body.member_name;
 	stateid=req.body.stateID;
 memberCRUD.update({'member_id' : mid}, {member_name:membername,state_id:stateid}, function (err, vals) {
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'member successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/












