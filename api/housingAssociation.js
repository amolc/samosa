
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var housingAssociationCRUD=CRUD(db, 'tbl_housing_association');
 exports.findHousinnAss = function(req, res) {
 	var id = parseInt(req.params.id);
 	  housingAssociationCRUD.load({m_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 
 

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