
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var housingAssociationCRUD=CRUD(db, 'tbl_housing_association');
 exports.findHousinnAss = function(req, res) {
 	var id = parseInt(req.params.id);
 	console.log('id =='+id);
 	  housingAssociationCRUD.load({'m_id':id}, function (err, val) {	 
 	  	console.log(err); 
 	  	res.jsonp(val);
 	  });
 	    
 }; 
 
 
 // exports.allHousingAss = function(req, res) {
 		 // var query = "SELECT tbl_municipality.m_id , tbl_municipality.m_name , tbl_municipality.state_id , tbl_state.state_name FROM tbl_municipality INNER JOIN tbl_state ON tbl_municipality.state_id = tbl_state.state_id";
// db.query(query, function(err, rows){
    // res.jsonp(rows);
   // });
 // }; 
 

/******************for create new municipality it inster value in to data base*****************/ 
 
 exports.createNewHousingAss = function(req, res) {
  housingAssociationCRUD.create({'housing_ass_name' :'Rissing satr','country_id' : 3,'m_id' : 3,'address' :'gulberg lahore','building_password' :'123',
 'telephone_no' :'03347268737','emergency_contact':'063225454','email' :'shahzad@fortsolution.com'}, function (err, vals) {
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'housing association successfully added'};
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

exports.deleteHousingAss = function(req, res) {
	var housing_ass_id=parseInt(req.params.id);
housingAssociationCRUD.destroy({'housing_ass_id' : housing_ass_id}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		      var resdata={status:true,
  		      message:'housing association successfully deleted'};
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

exports.updateHousingAss = function(req, res) {
	var id=parseInt(req.params.id);
 housingAssociationCRUD.update({'housing_ass_id' : id}, {building_password:'shahzad1234'}, function (err, vals) {
if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'housing association successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/

exports.abc = function(req, res) {
	 var query = "SELECT * FROM tbl_housing_association order by `housing_ass_name` ";
db.query(query, function(err, rows){
	console.log(rows);
	if(rows.length>0)
	{
		var resdata={
			status:true,
			message:'success',
			norows:rows
			
		};
		res.jsonp(resdata);
	}
   });
 };