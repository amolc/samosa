
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var municipalityCRUD=CRUD(db, 'tbl_municipality');
 exports.findMunicipality = function(req, res) {
 
 	var id = parseInt(req.params.id);
 	  municipalityCRUD.load({state_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 



/******************for create new municipality it inster value in to data base*****************/ 
 
 // exports.createNewMunicipality = function(req, res) {
  // municipalityCRUD.create({'m_name' :'shahzad municipality','state_id' : 3}, function (err, vals) {
  	// console.log(vals.affectedRows);
      // });
    // };
     
 /******************  End create *****************/



/******************for  delete data from  data base*****************/

exports.deleteMunicipality = function(req, res) {
   var municipality_id=parseInt(req.params.id);
   municipalityCRUD.destroy({'m_id' : municipality_id}, function (err, vals) {
   console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'municipality successfully deleted'};
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

//exports.updateMunicipality = function(req, res) {
 // municipalityCRUD.update({'state_id' : 3}, {state_id:1}, function (err, vals) {
  	//console.log(vals);
      //});
  //  };
  
/******************  End Update *****************/














