
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'root',
  password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var todoCrud=CRUD(db, 'tbl_todo');
 
 exports.findAlltodo = function(req, res) {
 	  todoCrud.load({}, function (err, val) {	   	  	
 	  	res.jsonp(val);
 	  });  
 }; 
 
 /******************for create new state it inster value in to data base*****************/ 
 
 exports.createNewTodo = function(req, res) {
 	var todoTitle=req.body.todo_title;
 	var todoDescription=req.body.todo_description;
  todoCrud.create({'todo_title' :todoTitle,'todo_description' : todoDescription}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'todo successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
     
 /******************  End create *****************/

/******************for  delete data from  data base*****************/

exports.deleteTodo = function(req, res) {
	var todo_id=parseInt(req.params.id);
  todoCrud.destroy({'todo_id' : todo_id}, function (err, vals) {
  	console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'todo successfully deleted'};
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

 exports.updateTodo = function(req, res) {
 	var todoTitle=req.body.todo_title;
  var todoDescription=req.body.todo_description;
 	var todoid=req.body.state_id;
  todoCrud.update({'todo_id' : todoid}, {todo_title:todoTitle,todo_description:todoDescription}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'todo successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated'};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/

/******************start Details ***************/

exports.tododetail = function(req, res) {
  var id=parseInt(req.params.id);
    todoCrud.load({todo_id:id}, function (err, val) { 
      res.jsonp(val[0]);
    });  
 }; 
 
/******************end Details ***************/