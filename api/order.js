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
var orderCRUD = CRUD(db, 'tbl_order');

exports.findOrder = function(req, res) {

 	var id = parseInt(req.params.id);
 	console.log(id);
 	orderCRUD.load({order_id : id}, function (err, val) {res.jsonp(val);});
 	    
}; 

/******************for select all member *****************/

exports.orderList = function(req, res) {
    orderCRUD.load({}, function (err, val) {
      res.jsonp(val);
    });   
}; 

exports.allorder = function(req, res) {
    var query = "SELECT tbl_order.order_id , tbl_order.contact_name , tbl_order.contact_email , tbl_order.contact_address , tbl_order.contact_phone , tbl_order.contact_qty FROM tbl_order";
db.query(query, function(err, rows){
    res.jsonp(rows);
    });
}; 


/******************for create new member it inster value in to data base*****************/ 
 
 exports.createNewOrder = function(req, res) {
 	//console.log(req.body);
 	 var name=req.body.name;
     var email=req.body.email;
     var address=req.body.address;
     var phoneNumber=req.body.phoneNumber;
     var orderQty=req.body.orderQty;
 	 	 
 	console.log('Name '+name);
 	console.log('Email'+email);
    console.log('Address'+address);
    console.log('Contact Number'+phoneNumber);
    console.log('No. of crates/dozen'+orderQty);

	orderCRUD.create({'contact_name' :name,'contact_email' : email,'contact_address' : address,'contact_phone' : phoneNumber,'contact_qty' : orderQty}, function (err, vals) 
	{

		if(0>0)
		{
			var resdata={status:true,
				message:'order successfully added'};
				res.jsonp(resdata);

		}
		else
		{

				var resdata={status:false,
				message:'record not added '};
				res.jsonp(resdata); 
				}
		});
	};
     
 /******************  End create *****************/



/******************for  delete data from  data base*****************/

exports.deleteOrder = function(req, res) {
   var order_id=parseInt(req.params.id);
   orderCRUD.destroy({'order_id' : order_id}, function (err, vals) {
   console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'order successfully deleted'};
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

exports.updateOrder = function(req, res) {
	 contactName=req.body.contact_name;
     contactEmail=req.body.contact_email;
     contactAddress=req.body.contact_address;
     contactPhone=req.body.contact_phone;
     contactQty=req.body.contact_qty;
     orderId = req.body.order_id;
 orderCRUD.update({'order_id' : orderId}, {contact_name:contactName,contact_email:contactEmail,contact_address:contactAddress,contact_phone:contactPhone,contact_qty:contactQty}, function (err, vals) {
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'order successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
/******************  End Update *****************/












