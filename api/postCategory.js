
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'rujia',
     user : 'ftdev',
	password : '10gXWOqeaf',
    host :'apps.fountaintechies.com',
 });

 var CRUD = require('mysql-crud');
 var postCRUD = CRUD(db, 'tbl_post_category');

exports.findAllPostCategory = function(req, res) {
	postCRUD.load({}, function (err, val) {
		res.jsonp(val);
	});
};

/******************for create new post value in to data base*****************/

exports.createNewPostCategory = function (req, res) {
	var datetime = new Date();
	var content = req.body.postcategory_title;
	postCRUD.create({'category_name': content, 'created_datetime': datetime}, function (err, vals) {
		console.log(err);
		if (parseInt(vals.affectedRows) > 0) {
			var resdata = {
				status: true,
				message: 'Category successfully added'
			};
			res.jsonp(resdata);
		} else {
			var resdata = {
				status: false,
				message: 'Category not added '
			};
			res.jsonp(resdata);
		}
	});
};
     
/******************  End create *****************/


/******************for  delete data from  data base*****************/

exports.deletePostCategory = function(req, res) {
	var id=parseInt(req.params.id);
	postCRUD.destroy({'id' : id}, function (err, vals) {
		console.log(vals.affectedRows);
		if(parseInt(vals.affectedRows)>0){
			var resdata={status:true,
				message:'Category successfully deleted'};
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

exports.updatePostCategory = function(req, res) {
	var content=req.body.category_name;
	var id=req.body.id;
	postCRUD.update({'id' : id}, {'category_name': content }, function (err, vals) {
		if(parseInt(vals.affectedRows)>0){
			var resdata={status:true,
				message:'post successfully updated'};
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

exports.postdetailCategory = function(req, res) {
	var id = parseInt(req.params.id);
    console.log(id);
	postCRUD.load({id: id}, function (err, val) {
		res.jsonp(val[0]);
	});
};

/******************end Details ***************/